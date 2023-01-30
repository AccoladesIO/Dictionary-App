import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
    
    const {search, setSearch} = useFetch()

    

    const handleChange = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(search)
    }
  return (
    <div className="input">
    <form onSubmit={handleChange}>
    <input type="text"  value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
     <input type="submit" value="Search" className='btn' />
    </form>
 </div>

  )
}

// export const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`

export default Search