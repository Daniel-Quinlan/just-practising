import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="px-3 display: inline-flex space-x-14"
      onSubmit={addUserHandler}
    >
      <label className="text-xl block mb-1" htmlFor="username">
        Username
      </label>
      <input className="border-2  border-primary" id="username" type="text" />
      <label className="text-xl block mb-1" htmlFor="age">
        Age (Years)
      </label>
      <input className="border-2  border-primary" id="age" type="number" />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUser;
