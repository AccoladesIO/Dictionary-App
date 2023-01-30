import { useState, useEffect} from 'react'

export const useFetch = () => {

    const [search, setSearch] = useState('')

    const [word, setWord] = useState([])

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en`


    const fetchData = async () => {
        try {
            const req = await fetch(`${url}/${search}`)
            const result = await req.json()
            // console.log(req)
            console.log(result)
            setWord(result.data[0])
        } catch (e) {
            console.log({e})
        }
    }

    useEffect (() =>{
        fetchData()
    }, [fetchData])

    return {word, setWord, search, setSearch}
}