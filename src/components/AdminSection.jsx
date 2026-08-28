import { FormInput } from "../FormInput";
import { Table } from "./Table";
export const AdminSection = ({
  handleSubmitForm,
  setLastname,
  setName,
  setPosition,
  data,
  handledeleteUser,
  number,
  postperPage,
  setCurrentPage,
  currentPage,
  totalPosts,
}) => {
  return (
    <div className="text-white">
      <FormInput
        handleSubmitForm={handleSubmitForm}
        setLastname={setLastname}
        setName={setName}
        setPosition={setPosition}
      />
      <Table
        data={data}
        handledeleteUser={handledeleteUser}
        number={number}
        totalPosts={totalPosts}
        postperPage={postperPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
