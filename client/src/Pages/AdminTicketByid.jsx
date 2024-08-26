import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };
  
    const formattedDate = date.toLocaleDateString('en-GB', optionsDate); // 'dd/mm/yyyy'
    const formattedTime = date.toLocaleTimeString('en-GB', optionsTime); // 'hh:mm'
  
    return `${formattedDate} ${formattedTime}`;
  };

const AdminTicketByid = () => {
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    const { id: ticketId } = useParams();
    const [allBlogs, setAllBlogs] = useState([]);
    const fetchAllBlogs = async () => {
        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/admin/getTicketById/${ticketId}`;
        try {
        const response = await axios.get(URL, { headers: { 'authorization': `Bearer ${token}` } })
        setAllBlogs(response.data.data.rows[0]);
        console.log("Blogs fetched successfully>>>><<<<<", response.data.data);
        } catch (error) {
        console.error("Error fetching blogs:", error);
        }
    };
    const [answer, setAnswer] = useState({ answer: '' }); // Initialize with default values

    useEffect(() => {
        fetchAllBlogs();
      }, []);

      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAnswer((prev) => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/admin/updateTicket/${ticketId}`
        try {
            const response = await axios.patch(URL,{answer}, { headers: { 'authorization': `Bearer ${token}` } })
            console.log("data", answer);
            console.log("response", response);
            console.log(response.data.status);
            if (response.data.status === "success") {
                // toast.success("new user created")
                console.log(">>>>",response);
                setAnswer({
                    answer:" "
                })
                navigate('/admin/tickets/active')
            }
        } catch (error) {
            // toast.error("error to register")
            console.log("error>>>>>>>>>><<<<<<<<<<<",error);
        }
        // console.log(data);
    }
      


return (
    <div className="max-w-3xl mx-auto p-4">
    {allBlogs && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{allBlogs.Question}</h1>
                <p className="text-gray-500 text-sm">{formatDate(allBlogs.createdAt)} &bull; {allBlogs.EmailID}</p>
                <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="answer"   // This should match the key in your state
                    placeholder="Response"
                    value={answer.answer || ''}   // Access the specific key from the state
                    onChange={handleOnChange}
                    className="w-full p-3 border-2 border-black-700 rounded-full focus:outline-none focus:border-black-700"
                    required
                />
                <button 
                    type="submit"
                    className='w-full py-3 bg-pink-500 font-bold rounded-full hover:bg-pink-600 transition-colors duration-300'
                    >
                    Send Response
                </button>
                </form>

            </div>
        </div>
    )}
</div>
  )
}

export default AdminTicketByid