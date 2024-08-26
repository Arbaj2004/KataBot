import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };
  
    const formattedDate = date.toLocaleDateString('en-GB', optionsDate); // 'dd/mm/yyyy'
    const formattedTime = date.toLocaleTimeString('en-GB', optionsTime); // 'hh:mm'
  
    return `${formattedDate} ${formattedTime}`;
  };

const AdminTickets = () => {
    const token=localStorage.getItem('token')
    const navigate = useNavigate();
    const [allBlogs, setAllBlogs] = useState([]);
    const fetchAllBlogs = async () => {
        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/admin/getAllTickets`;
        try {
        const response = await axios.get(URL, { headers: { 'authorization': `Bearer ${token}` } })
        setAllBlogs(response.data.data.rows);
        console.log("Blogs fetched successfully>>>>", response.data.data);
        } catch (error) {
        console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        fetchAllBlogs();
      }, []);

      const handleClick = (ticketId) => {
        navigate(`/admin/ticket/${ticketId}`);
      };

return (
    <div>AdminSolveTicket
        <div>
            hi
        <h2 className="text-3xl font-bold text-center my-8">All Active Tickets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {allBlogs.map((blog) => (
            <div
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
              key={blog.id}
            >
                {
                    blog.Answer  && (
                    <div className="p-4 flex flex-col justify-between h-full bg-green-400">
              <h4 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer"  key={blog.id} onClick={() => handleClick(blog.id)}>{blog.Question}</h4>
              <p className="text-black-500 text-sm font-bold">{blog.Answer} &bull; </p>
              <p className="text-black-500 text-sm">{formatDate(blog.createdAt)} &bull;{blog.EmailID} </p>
            </div>)
            }{
                (blog.Answer==null || !blog.Answer) && (
                <div className="p-4 flex flex-col justify-between h-full bg-red-400">
              <h4 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer"  key={blog.id} onClick={() => handleClick(blog.id)}>{blog.Question}</h4>
              <p className="text-black-500 text-sm">{formatDate(blog.createdAt)} &bull; {blog.EmailID}</p>
            </div>)
            }
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AdminTickets