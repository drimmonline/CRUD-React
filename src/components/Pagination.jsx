export const Pagination = ({
  setCurrentPage,
  currentPage,
  totalPost,
  postperPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postperPage); i++) {
    pages.push(i);
  }

  return (
    <div className="join text-black">
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
