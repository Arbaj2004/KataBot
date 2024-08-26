import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const Layout = () => {
  return (
    <>
      <div className="layout bg--500 min-h-[100vh] w-[100vw] flex flex-col justify-center items-center">
        <Preloader/>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
