import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Pagination = () => {
  const { setCurrentPage, currentPage, pages } = useContext(UserContext);

  return (
    <div className="join text-black mt-3">
      {pages.map((page, index) => (
        <button
          key={index}
          // ถ้าเป็น '...' จะไม่สั่งให้เปลี่ยนหน้า
          onClick={() => typeof page === "number" && setCurrentPage(page)}
          // ปุ่มไหนเป็น '...' ให้ cursor เป็น default และไม่มีเอฟเฟกต์ hover
          className={`px-4 py-2 rounded-md ${
            page === currentPage
              ? "bg-blue-600 text-white font-bold"
              : page === "..."
                ? "text-gray-500 cursor-default"
                : "bg-gray-200 hover:bg-gray-300 text-black cursor-pointer"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
