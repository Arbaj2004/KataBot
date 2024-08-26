// import axios from 'axios';
// import { response } from 'express';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const SpecificTicket = () => {
//     const token=localStorage.getItem('token')
//     const { id: blogId } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     // const [responsee, setData] = useState("")
//     const [data, setData] = useState({
//         response: "",
//         _id:blogId
//     })
//     const handleOnChange = (e) => {
//         const { name, value } = e.target
//         setData((prev) => {
//             return {
//                 ...prev,
//                 [name]: value
//             }
//         })
//     }

//     const fetchBlog = async () => {
//         const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/admin/solveTickets/${blogId}`;
//         try {
//             // const response = await axios.get(URL);
//             const response = await axios.get(URL, { headers: { 'authorization': `Bearer ${token}` } })
//             setBlog(response.data.data.blog);
//             console.log(response.data.data.blog)
//             setLoading(false);
//         } catch (error) {
//             setError(error);
//             setLoading(false);
//         }
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         e.stopPropagation()

//         const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/admin/solveTickets`
//         try {
//             // const response = await axios.post(URL, data)
//             const response = await axios.post(
//                 URL, 
//                 {
//                   response,      // Your data payload
//                   _id:blogId   // Additional data
//                 }, 
//                 {
//                   headers: {
//                     'authorization': `Bearer ${token}`
//                   }
//                 }
//               );
              
//             console.log("data", data);
//             console.log("response", response);
//             console.log(response.data.status);
//             if (response.data.status === "success") {
//                 console.log(">>>>",response);
//                 localStorage.setItem('token', response?.data?.token)
//                 setData(" ")
//             }
//         } catch (error) {
//             console.log("error>>>>>>>>>><<<<<<<<<<<",error);
//         }
//     }

//     useEffect(() => {
//         fetchBlog();
//     }, [blogId]);

//     if (loading) return <p className="text-center text-gray-500">Loading...</p>;
//     if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

//     return (
//         <div className="max-w-3xl mx-auto p-4">
//             {blog && (
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                     <div className="p-6">
//                         <h1 className="text-3xl font-bold mb-4">{blog.query}</h1>
//                         <p className="text-gray-600 mb-4">{blog.email} </p>
//                         <p className="text-gray-800">{blog.description}</p>
//                     </div>
//                 </div>
//             )}

//         <div className='mb-4'>
//             <form onSubmit={handleSubmit}>
//                             <input 
//                                 type="text"
//                                 name='response'
//                                 placeholder='Response'
//                                 value={data.response}
//                                 onChange={handleOnChange}
//                                 className='w-full p-3 border-2 border-black-700 rounded-full focus:outline-none focus:border-black-700'
//                                 required
//                                 />
//                         <button 
//                             type="submit"
//                             className='w-full py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors duration-300'
//                             >
//                         Give response
//                         </button>
//                     </form>
//                         </div>
//         </div>
//     );
// };

// export default SpecificTicket;
