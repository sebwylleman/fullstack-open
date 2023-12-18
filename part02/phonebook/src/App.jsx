import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "07826838346" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => setNewName(event.target.value);

  const handleNumChange = (event) => setNewNumber(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const personExistsinPhonebook = persons.some(
      (person) => person.name === newName
    );
    if (personExistsinPhonebook) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = { name: newName, number: newNumber };
      setPersons(persons.concat(personObject));
    }
    setNewName("");
  };

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
