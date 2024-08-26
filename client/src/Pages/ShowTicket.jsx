import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminSolveTicket = () => {
    const token=localStorage.getItem('token')
    const navigate = useNavigate();
    const [allBlogs, setAllBlogs] = useState([]);
    const fetchAllBlogs = async () => {
        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/admin/getAllTickets`;
        try {
        const response = await axios.get(URL, { headers: { 'authorization': `Bearer ${token}` } })
        setAllBlogs(response.data.data.rows);
        console.log("Blogs fetched successfully>>>>", response.data.data.rows);
        } catch (error) {
        console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        fetchAllBlogs();
      }, []);

      const handleClick = (ticketId) => {
        navigate(`/ticket/${ticketId}`);
      };

  return (
    <div>AdminSolveTicket
        <div>
      <h2 className="text-3xl font-bold text-center my-8">All Active Tickets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {allBlogs.map((blog) => (
            <div
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
              key={blog._id}
            >
            
            <div className="p-4 flex flex-col justify-between h-full">
              <h4 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer"  key={blog._id} onClick={() => handleClick(blog._id)}>{blog.query}</h4>
              <p className="text-gray-500 text-sm">{blog.email} &bull; </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AdminSolveTicket