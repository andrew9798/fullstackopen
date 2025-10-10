import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a country..."
      />
      <ul>
        {filteredCountries.length === 0 ? (
          <li>No countries found</li>
        ) : filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries.length === 1 ? (
          <div>
            <h2>{filteredCountries[0].name.common}</h2>
            <p>Capital: {filteredCountries[0].capital}</p>
            <p>Area: {filteredCountries[0].area}</p>
            <h2>
              Languages:           
            </h2>
             <ul>
                {Object.entries(filteredCountries[0].languages).map(([code, name]) => (
                  <li key={code}>{name}</li>
                ))}
              </ul>
            <img
              src={filteredCountries[0].flags.png}
              alt={`Flag of ${filteredCountries[0].name.common}`}
              width="100"
            />
          </div>
        ) : (
          filteredCountries.map(country => (
            <>
            <li>{country.name.common}</li>
            <button onClick={() => setSearchTerm(country.name.common)}>Show</button>
            </>
          ))
        )}
      </ul>
    </div>
  )
}

export default App
