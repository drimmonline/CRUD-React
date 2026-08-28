export const Table = ({ data, handledeleteUser }) => {
  return data == null ? (
    <div> ไม่มีข้อมูล</div>
  ) : (
    <div className="overflow-x-auto my-10">
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
              <th>{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.lastname}</td>
              <td>{data.position}</td>
              <td className="text-red-400">
                <button
                  onClick={() => {
                    handledeleteUser(data.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
