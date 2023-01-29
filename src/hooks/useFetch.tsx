import { useState, useEffect, useCallback } from 'react'

export const useFetch = () => {

    const [search, setSearch] = useState('')

    const [word, setWord] = useState([])

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`


    const fetchData = async () => {
        try {
            const req = await fetch(url)
            const result = await req.json()
            // console.log(result)
            setWord(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() =>{
        fetchData()
    }, [fetchData])

    return {word, setWord, search, setSearch}
}