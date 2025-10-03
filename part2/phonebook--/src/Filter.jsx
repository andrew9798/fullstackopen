const Filter = ({ filter, setFilter }) => {
  return (
    <div>
        <h2>Phonebook</h2>
      filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)} />
    </div>
  )
}

export default Filter