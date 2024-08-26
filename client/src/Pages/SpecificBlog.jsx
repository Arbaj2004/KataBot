import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpecificBlog = () => {
    const { id: blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token=localStorage.getItem('token')
    const fetchBlog = async () => {
        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/blogs/${blogId}`;
        try {
            const response = await axios.get(URL, { headers: { 'authorization': `Bearer ${token}` } })
            setBlog(response.data.data.ticket);
            console.response(response)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, [blogId]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

    return (
        <div className="max-w-3xl mx-auto p-4">
            {blog && (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                        <p className="text-gray-600 mb-4">{blog.date} &bull; {blog.readTime}</p>
                        <p className="text-gray-800">{blog.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpecificBlog;
