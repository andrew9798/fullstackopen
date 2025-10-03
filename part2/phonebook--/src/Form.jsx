const Form = ({ newName, setNewName, newNumber, setNewNumber, handleAddPerson }) => {
  return (   
    <form onSubmit={handleAddPerson}>
        <h2>Add a new</h2>
      <div>
        name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
      </div>
      <div>
        number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form