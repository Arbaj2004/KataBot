import { useState } from "react";
import uploadFile from "./UploadFiles";
import Loading from "../components/Loading";
import { CiImageOn } from 'react-icons/ci'; // Assuming you are using react-icons

const UploadFileHere = () => {
  const [uploadPhoto, setUploadPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUploadProfilePhoto = async (e) => {
    const file = e.target.files[0];
    setLoading(true);
    console.log("Uploading photo...");
    
    try {
      const uploadedPhoto = await uploadFile(file); // renamed from `uploadPhoto` to `uploadedPhoto`
      console.log("Photo uploaded:", uploadedPhoto.secure_url);

      setUploadPhoto(file);
    } catch (error) {
      console.error("Error uploading photo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      UploadFileHere
      <div
        className={`${
          loading ? " cursor-wait" : "bg-slate-200"
        } flex flex-col border-dashed border-2 border-sky-500 rounded`}
      >
        <label htmlFor="profilePic">
          <div
            className={`bg-blue-200 flex justify-center items-center flex-col hover:cursor-pointer border p-3 hover:border-primary rounded-lg ${
              loading ? "hidden" : "cursor-pointer"
            }`}
          >
            <CiImageOn size={20} />
            <p className="text-ellipsis max-w-80 line-clamp-1">
              {uploadPhoto?.name ? uploadPhoto?.name : "Upload the photo"}
            </p>
          </div>

          <div
            className={`bg-blue-200 flex justify-center items-center flex-col border p-3 hover:border-primary rounded-lg ${
              loading ? " cursor-wait" : "hidden"
            }`}
          >
            <Loading size={30} color={"#78827e"}/>
            <p className="text-ellipsis max-w-80 line-clamp-1">Uploading....</p>
          </div>
        </label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id="profilePic"
          name="profilePic"
          className="bg-slate-100 px-2 py-1 focus:outline-primary rounded my-3 hidden"
          disabled={loading}
          onChange={handleUploadProfilePhoto}
        />
      </div>
    </div>
  );
};

export default UploadFileHere;