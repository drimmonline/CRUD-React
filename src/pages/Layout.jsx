import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full m-0 p-0">
      {/* ส่วนหัวสีขาว */}
      <div className="bg-gray-50 p-8 text-center">
        <Navbar />
      </div>

      {/* ส่วนเนื้อหาสีดำจะขยายเต็มพื้นที่ที่เหลือด้วย flex-grow */}
      <div className="bg-gray-50 flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};
