import { useEffect, useState } from 'react'
import React from 'react'
import Filter from './Filter'
import Form from './Form'
import Persons from './Persons'
import personService from './services/Persons'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)



  useEffect(() => {
    console.log('effect')
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
      console.log('promise fulfilled', initialPersons)
    })

  }, [])

  console.log('render', persons.length, 'persons')

  const handleAddPerson = (event) => {
  event.preventDefault()

  const nameExists = persons.find(person => person.name === newName)

  if (nameExists) {
    const personObject = {
      ...nameExists, 
      number: newNumber,
    }

    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      personService
        .update(nameExists.id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== nameExists.id ? p : returnedPerson))
          console.log(`${newName} updated`)
          setMessage(`Updated ${newName}'s number`)
          setTimeout(() => setMessage(null), 5000)
        })
        .catch(error => {
          setMessage({ text: `information of  ${newName} has already been removed from server`, type: 'error' })

          setTimeout(() => setMessage(null), 5000)
          setPersons(persons.filter(p => p.id !== nameExists.id))
        })
    }
    return
  }

  const personObject = {
    name: newName,
    number: newNumber,
  }

  personService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setMessage({ text: `Added ${newName}`, type: 'success' })
      setTimeout(() => setMessage(null), 5000)
    })
    .catch(error => {
      setMessage({ text: `Failed to add ${newName}`, type: 'error' })
      setTimeout(() => setMessage(null), 5000)
    })

  setNewName('')
  setNewNumber('')
}


  return (
    <div>     
      <Filter filter={filter} setFilter={setFilter} />
      <Notification message={message}/>
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleAddPerson={handleAddPerson}
      />
      <Persons persons={persons} filter={filter} setPersons={setPersons} setMessage={setMessage} />
    </div>
  )
}

export default App