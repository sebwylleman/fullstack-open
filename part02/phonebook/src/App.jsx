import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [stringSearch, setStringSearch] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleNameChange = (event) => setNewName(event.target.value);

  const handleNumChange = (event) => setNewNumber(event.target.value);

  const handleStringSearch = (event) => {
    setStringSearch(event.target.value);
    setShowAll(false);
  };

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

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(stringSearch.toLowerCase())
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={stringSearch} onChange={handleStringSearch} />
      </div>
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

      {personsToShow.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
