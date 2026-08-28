import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router";

export const ModalSuccess = () => {
  const { isSuccess, setIsSuccess } = useContext(UserContext);

  if (!isSuccess) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="card w-96 bg-base-100 shadow-xl relative">
        <button
          onClick={() => setIsSuccess(false)}
          className="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-gray-700 absolute right-2 top-2"
        >
          ✕
        </button>

        <div className="card-body mt-2 text-center items-center">
          {/* เปลี่ยนสีพื้นหลังไอคอนเป็น bg-blue-100 */}
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
            {/* เปลี่ยนสีไอคอนเป็น text-blue-600 */}
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="card-title text-2xl font-bold text-white">
            เพิ่มข้อมูลสำเร็จ!
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            ข้อมูลถูกบันทึกเข้าสู่ระบบเรียบร้อยแล้ว
          </p>

          <div className="card-actions justify-center mt-6 w-full">
            {/* ปรับสไตล์ปุ่มให้เหมือน pagination (bg-blue-600) */}
            <Link to="/">
              <button
                onClick={() => setIsSuccess(false)}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
              >
                กลับสู่หน้าหลัก
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
