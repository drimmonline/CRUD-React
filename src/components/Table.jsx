import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ModalDelete from "./ModalDelete";
import { Pagination } from "./Pagination";

export const Table = () => {
  const {
    confirmDelete,
    currentPost,
    postperPage,
    setCurrentPage,
    currentPage,
    setIsDelete,
    isDelete,
    selectedId,
    setSelectedId,
  } = useContext(UserContext);
  return currentPost == null ? (
    <div> ไม่มีข้อมูล</div>
  ) : (
    <div className="overflow-x-auto my-10 relative">
      <table className="table">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        {currentPost.map((data, index) => (
          <tbody key={index}>
            <tr className="bg-base-200">
              <th>{(currentPage - 1) * postperPage + index + 1}</th>
              <td>{data.name}</td>
              <td>{data.lastname}</td>
              <td>{data.position}</td>
              <td className="text-red-400">
                <button
                  onClick={() => {
                    setIsDelete(true);
                    setSelectedId(data.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        postperPage={postperPage}
      />
      {isDelete && (
        <ModalDelete
          onClose={() => setIsDelete(false)}
          onConfirm={confirmDelete}
          selectedId={selectedId}
        />
      )}
    </div>
  );
};
