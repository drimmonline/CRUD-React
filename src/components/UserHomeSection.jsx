import { Table } from "./Table";
export const UserHomeSection = ({
  data,
  handledeleteUser,
  number,
  postperPage,
  currentPage,
  totalPosts,
  setCurrentPage,
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
    />
  );
};
