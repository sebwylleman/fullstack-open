const PersonForm = ({
  name,
  number,
  handleNameChange,
  handleNumChange,
  addPerson,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input value={name} onChange={handleNameChange} />
      </div>
      <div>
        number:
        <input value={number} onChange={handleNumChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
