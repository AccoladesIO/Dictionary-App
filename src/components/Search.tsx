import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'


const Search = (props: any) => {

  
    
    

    const handleChange = (e: any) => {
      e.preventDefault()
      // setSearch(e.target.value)
      props.fetchData()
      console.log(props.search)
    }
    

    
  return (
    <div className="input">
    <form onSubmit={handleChange}>
    <input type="text" placeholder='Search a word' value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
     <input type="submit" value="Search" className='btn' />
    </form>
 </div>

  )
}

// export const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`

export default Search