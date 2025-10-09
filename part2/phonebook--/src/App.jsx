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
    console.log(nameExists.id)

    if (nameExists) {
      const personObject = {
      name: nameExists.name,
      number: newNumber,
    }

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService.update(nameExists.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== nameExists.id ? person : returnedPerson))
            setMessage(
              `Information of ${newName} has already been removed from server`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setPersons(persons.filter(n => n.id !== nameExists.id))
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
      })
      
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>     
      <Filter filter={filter} setFilter={setFilter} />
      <Notification message={message} />
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleAddPerson={handleAddPerson}
      />
      <Persons persons={persons} filter={filter} setPersons={setPersons} />
    </div>
  )
}

export default App