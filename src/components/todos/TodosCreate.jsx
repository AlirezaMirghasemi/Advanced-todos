const TodosCreate = () => {
  return (
    <form className="d-flex justify-content-center align-items-center mb-4">
      <div data-mdb-input-init className="form-outline flex-fill">
        <input
          type="text"
          id="form2"
          className="form-control"
          placeholder="New task..."
        />
      </div>
      <button
        type="submit"
        data-mdb-button-init
        data-mdb-ripple-init
        className="btn btn-outline-success ms-2"
      >
        Add
      </button>
    </form>
  );
};
export default TodosCreate;
