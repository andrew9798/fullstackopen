import axios from 'axios'
import deletePerson from './services/Persons'

const Persons = ({ persons, filter, setPersons }) => {
    const handleDeletePerson = (id) => {
        deletePerson.Delete(id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== id))
            })
    }
    return (
        <div>
            <h2>Numbers</h2>

            {persons
                .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                .map(person => <p key={person.name}>{person.name}: {person.number} <button onClick={() => {
                    if (window.confirm(`Delete ${person.name}?`)) {
                        handleDeletePerson(person.id);
                        console.log(`Deleted ${person.name}`);
                        console.log(person.id);
                    } else {
                        console.log("Deletion cancelled");
                    }
                }}>Delete</button></p>)
            }

        </div>
    )
}

export default Persons
