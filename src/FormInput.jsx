export const FormInput = ({
  handleSubmitForm,
  setPosition,
  setName,
  setLastname,
}) => {
  return (
    <div className="mt-5">
      <h1>Create User Here </h1>
      <form onSubmit={handleSubmitForm}>
        <fieldset className="fieldset flex gap-4 justify-center items-center ">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input  bg-white text-black"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="label" htmlFor="name">
            Lastname
          </label>
          <input
            type="text"
            id="name"
            className="input  bg-white text-black"
            placeholder="Lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
          <label className="label" htmlFor="name">
            Position
          </label>
          <input
            type="text"
            id="name"
            className="input  bg-white text-black"
            placeholder="Position"
            onChange={(e) => setPosition(e.target.value)}
          />
          <button
            className="rounded-sm p-2 bg-purple-500 text-2xl text-white "
            type="submit"
          >
            Save
          </button>
        </fieldset>
      </form>
    </div>
  );
};
