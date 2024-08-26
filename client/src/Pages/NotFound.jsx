// import { useState } from "react";

import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { CiImageOn } from "react-icons/ci";
import { useState } from "react";
import uploadFile from "../helper/UploadFiles";




const NotFound = () => {
  const [uploadPhoto, setUploadPhoto] = useState("")
  const [loading, setLoading] = useState(false);
  const handleUploadProfilePhoto = async (e) => {
      const file = e.target.files[0];
      setLoading(true)
      console.log(`😒😒😒😒😒😒${import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME}`);
      console.log("😒😒😒😒uploadPh");
      const uploadPhoto = await uploadFile(file)
      console.log("😒😒😒😒uploadPhoto", uploadPhoto.secure_url);
      setLoading(false)

      setUploadPhoto(file)
  }


  return (
      <div className=' flex flex-col justify-center items-center m-0 p-0'>
        {/* <Loading loading={loading} width={20} height={20}/> */}
        <div className='mb-4'>
                            
                            <div className={` ${loading ? " cursor-wait" : " "}`}>
                        <label htmlFor="profilePic">
                            <div className={`flex justify-center items-center flex-col w-full p-3 border-2 border-green-700 rounded-full focus:outline-none focus:border-green-700 ${loading ? "hidden" : "cursor-pointer"}`}>
                                <CiImageOn size={20} />
                                <p className='text-ellipsis max-w-80 line-clamp-1'>{uploadPhoto?.name ? uploadPhoto?.name : "Upload The Photo"}</p>
                            </div>

                            <div className={` flex justify-center items-center flex-col  border p-3 hover:border-primary rounded-lg ${loading ? " cursor-wait" : "hidden"}`}>
                                <Loading />
                                <p className='text-ellipsis max-w-80 line-clamp-1'>Uploading....</p>
                            </div>

                        </label>
                        <input
                            type="file"
                            accept="image/png, image/jpeg image/jpg"
                            id='profilePic'
                            name='profilePic'
                            className={`bg-slate-100 px-2 py-1 focus:outline-primary rounded my-3 hidden`}
                            disabled={loading ? true : false}
                            onChange={handleUploadProfilePhoto}
                        />
                    </div>
                    </div>
    <div className='h-[30vh] w-full bg-white flex flex-col items-center relative m-0 p-0'>
        <h2 className='absolute text-slate-400 font-extrabold bottom-0 text-9xl -mb-3'>404</h2>
    </div>
    <div className='h-[70vh] w-full bg-slate-400 flex flex-col gap-3 items-center m-0 p-0' >
        <h1 className='text-white font-semibold text-5xl mt-20'>Sorry, Page Not Found</h1>
        <p className='text-white mt-6 text-lg'>The page you requested could not found</p>
        <Link to={"/"} className='text-primary text-white mt-4 w-36 h-12 flex justify-center items-center rounded-xl bg-black hover:underline hover:text-blue-500'>Go Back Home</Link>
    </div>
</div>
  );
};

export default NotFound;

