import { useEffect, useState } from 'react'
import React from 'react'
import Filter from './Filter'
import Form from './Form'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    fetch('http://localhost:3001/persons')
      .then(response => response.json())
      .then(data => {
        console.log('promise fulfilled')
        setPersons(data)
      })
  }, [])

  console.log('render', persons.length, 'persons')

  const handleAddPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.find(person => person.name === newName)

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
      <Filter filter={filter} setFilter={setFilter} />
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleAddPerson={handleAddPerson}
      />
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App