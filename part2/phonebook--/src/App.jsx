import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123456789' },
    { name: 'Ada Lovelace', number: '987654321' },
    { name: 'Dan Abramov', number: '5647382910' },
    { name: 'Mary Poppendieck', number: '192837465' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.find(person => person.name === newName)
    setNewName('')

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }


    const personObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)} />
      </div>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input
            value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input
            value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => <p key={person.name}>{person.name}: {person.number}</p>)}
    </div>
  )
}

export default App