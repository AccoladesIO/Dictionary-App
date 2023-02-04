import React, { useState } from 'react'
import * as Fa from 'react-icons/fa'
import './hero.scss'
// import { useFetch } from '../hooks/useFetch'
import Search from './Search'



const Section = () => {


  const [search, setSearch] = useState('')

    const [word, setWord] = useState<any>([])
    // console.log(word.phonetic, `redtfughyiojk`)


    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`

 


    const fetchData = async () => {
    
        try {
            const req = await fetch(`${url}`)
            const res = await req.json() 
            const text = res[0]
            console.log(text, text.word)
            setWord(text)
        } catch (e) {
            console.log({e})
        }
    }

 
    

    console.log(word)

  return (
    <section className="section">
        <Search  search={search} setSearch={setSearch} fetchData={fetchData}/>
        {word && word.word ? (
        <h1 className="heading-section-sub">
          You searched for: {word.word}
        </h1>
      ) : (
        <h1 className="heading-section-sub">No data found</h1>
      )}

    {word  && word.word ? 
   ( 
    <>
   <div className="flex">
    <p className='flex j'><Fa.FaAngleRight />{word.phonetics[0]?.text} {word.phonetics[1]?.text} </p>
    <p className='flex j'><Fa.FaAngleRight />Listen : <a href={word.phonetics[0]?.audio} target='_blank'><Fa.FaHeadphones/> </a></p>
        
    </div>


      {word.meanings.map((mean: string | any) => {
        console.log(mean)
        return (
          <>
              <p className='flex j'><Fa.FaAngleRight />{mean.partOfSpeech} : {mean.definitions[0].definition}
               </p>
     
              {mean.synonyms.length > 1 ? <p className='flex j'><Fa.FaAngleRight />Synonyms: {mean.synonyms[0] } {mean.synonyms[1]} </p> : null}
              {mean.antonyms.length > 1 ? <p className='flex j'><Fa.FaAngleRight />Antonyms: {mean.antonyms[0]} {mean.antonyms} </p> : null}
              {console.log(mean.antonyms.toString())}
          </>
        )
      })}
       </>
   ) : null

  }

      </section>
  )
}

export default Section