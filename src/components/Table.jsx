import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ModalDelete from "./ModalDelete";
import { Pagination } from "./Pagination";
import { ModalSuccess } from "./ModalSuccess";

export const Table = () => {
  const {
    confirmDelete,
    currentPost,
    postperPage,
    currentPage,
    setIsDelete,
    isDelete,
    selectedId,
    setSelectedId,
    isSuccess,
  } = useContext(UserContext);
  return currentPost == null ? (
    <button type="button" class="bg-indigo-500 ..." disabled>
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Processing...
    </button>
  ) : (
    <div className="overflow-x-auto my-10 relative px-5">
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
      <Pagination />
      {isDelete && (
        <ModalDelete
          onClose={() => setIsDelete(false)}
          onConfirm={confirmDelete}
          selectedId={selectedId}
        />
      )}
      {isSuccess && <ModalSuccess />}
    </div>
  );
};
