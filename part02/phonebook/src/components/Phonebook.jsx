const Phonebook = ({ persons, stringSearch, showAll }) => {
  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(stringSearch.toLowerCase())
      );

  return (
    <>
      {personsToShow.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

export default Phonebook;
