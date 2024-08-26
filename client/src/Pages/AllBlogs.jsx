import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {
  const navigate = useNavigate();
  const [allBlogs, setAllBlogs] = useState([]);

  const fetchAllBlogs = async () => {
    const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/blogs`;
    try {
      const response = await axios.get(URL);
      setAllBlogs(response.data.data.blogs);
      console.log("Blogs fetched successfully>>>>", response.data.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

    useEffect(() => {
      fetchAllBlogs();
    }, []);

  const handleClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {allBlogs.map((blog) => (
            <div
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
              key={blog._id}
            >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover sm:h-56 lg:h-48"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <h4 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer"  key={blog._id} onClick={() => handleClick(blog._id)}>{blog.title}</h4>
              <p className="text-gray-500 text-sm">{blog.date} &bull; {blog.readTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
