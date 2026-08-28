import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const FormInput = () => {
  const { handleSubmitForm } = useContext(UserContext);
  const { formData, handleChange } = useContext(UserContext);
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
            value={formData.name}
            name="name"
            onChange={handleChange}
            required
          />
          <label className="label" htmlFor="name">
            Lastname
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            className="input  bg-white text-black"
            placeholder="Lastname"
            onChange={handleChange}
            required
          />
          <label className="label" htmlFor="name">
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            className="input  bg-white text-black"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
            required
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
