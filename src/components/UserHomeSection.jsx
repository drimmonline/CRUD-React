import { Table } from "./Table";
export const UserHomeSection = ({
  data,
  handledeleteUser,
  number,
  postperPage,
  currentPage,
  totalPosts,
  setCurrentPage,
  setIsDelete,
  isDelete,
  confirmDelete,
  selectedId,
  setSelectedId,
}) => {
  return (
    <Table
      data={data}
      handledeleteUser={handledeleteUser}
      number={number}
      totalPosts={totalPosts}
      postperPage={postperPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      setIsDelete={setIsDelete}
      isDelete={isDelete}
      confirmDelete={confirmDelete}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />
  );
};
