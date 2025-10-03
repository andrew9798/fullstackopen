import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123456789' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      {persons.map(person => <p key={person.name}>{person.name}: {person.number}</p>)}
    </div>
  )
}

export default App