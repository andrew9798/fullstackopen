const Persons = ({ persons, filter }) => {
    return (
        <div>
            <h2>Numbers</h2>

            {persons
                .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                .map(person => <p key={person.name}>{person.name}: {person.number}</p>)}
        </div>
    )
}

export default Persons
