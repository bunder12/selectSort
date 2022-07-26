import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';


const App = () => {

  const [data, setData] = useState([]);
  const [val, setVal] = useState("");

  const getCoba = async () => {
    const value = await axios.get("https://pokeapi.co/api/v2/berry")
    // const valueJson = await value.json()
    let res = value.data.results.map(data => {
      return{
        label: data.name,
        value: data.name
      }
    })
    setData(res.sort((a, b) => a.label.localeCompare(b.label)))
  }

  useEffect(() => {
    getCoba()
  })

  const handleChange = (value) => {
    setVal(value)
  }

  return (
    <div>
      <h1>{val}</h1>
      <Select options={data} onChange={(e) => handleChange(e.value)}/>
    </div>
  )
}

export default App