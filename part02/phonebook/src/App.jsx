import { useState } from "react";
import Filter from "./components/Filter";
import Phonebook from "./components/Phonebook";
import PersonForm from "./components/PersonForm";

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

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter keyword={stringSearch} handleStringSearch={handleStringSearch} />

      <h3>Add a new</h3>

      <PersonForm
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Phonebook
        persons={persons}
        stringSearch={stringSearch}
        showAll={showAll}
      />
    </div>
  );
};

export default App;
