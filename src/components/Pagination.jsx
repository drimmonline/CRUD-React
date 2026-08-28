import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Pagination = () => {
  const { setCurrentPage, currentPage, pages } = useContext(UserContext);

  return (
    <div className="join text-black mt-3">
      {pages.map((page, index) => (
        <button
          className={`join-item btn ${page === currentPage ? "active" : "border-2 text-black bg-white"}`}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          Pages {page}
        </button>
      ))}
    </div>
  );
};
