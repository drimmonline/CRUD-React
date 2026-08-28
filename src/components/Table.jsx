import ModalDelete from "./ModalDelete";
import { Pagination } from "./Pagination";

export const Table = ({
  data,
  totalPosts,
  setCurrentPage,
  currentPage,
  postperPage,
  setIsDelete,
  isDelete,
  confirmDelete,
  selectedId,
  setSelectedId,
}) => {
  return data == null ? (
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
        {data.map((data, index) => (
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
        totalPost={totalPosts}
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
