import { useState, useEffect} from 'react'



export const useFetch = () => {

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

    // useEffect (() =>{
    //     fetchData()
    // }, [search])

    return {word, search, setSearch, fetchData}
}