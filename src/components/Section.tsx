import React, { useState } from 'react'
import * as Fa from 'react-icons/fa'
import './hero.scss'
import { Data } from '../utilities/data'
import { useFetch } from '../hooks/useFetch'
import Search from './Search'

const Section = () => {

    const [data, setData] = useState(Data)
    
    const {word, setWord} = useFetch()
    // console.log(word)

  return (
    <section className="section">
        <Search />
        <h1 className="heading-section-sub">
            Word of the day: {data[`${Math.trunc(Math.random() * data.length)}`]}
        </h1>
        <div className="flex">
        <p className='flex j'><Fa.FaAngleRight /> </p>
        <p className='flex j'><Fa.FaAngleRight />Listen </p>
            
        </div>

        <p className='flex j'><Fa.FaAngleRight />Meaning </p>
        <p className='flex j'><Fa.FaAngleRight />Synonyms </p>
        <p className='flex j'><Fa.FaAngleRight />Antonyms </p>
       
    </section>
  )
}

export default Section