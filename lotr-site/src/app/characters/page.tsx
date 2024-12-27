"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Character } from "../types/types"
// import { useDebounce } from "../hooks/useDebounce"

export default function CharactersList() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [characters, setCharacters] = useState<Character[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState<string>('')

    // const debouncedSearch = useDebounce(search, 1000)

    async function fetchCharacters(page: number, query: string) {
        setLoading(true)
        try {
            console.log(`Fetching characters: page=${page}, query=${query}`) // Debugging
            const response = await axios.get(
                `/api/character?page=${page}&pageSize=10&query=${query}`
            )
            console.log("Response:", response) // Debugging
            setCharacters(response.data.data)
            console.log("Updated Characters:", response.data.data)
            setTotalPages(response.data.totalPages)
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message)
                console.error("Error:", e.message) // Debugging
            } else {
                setError("An unknown error occurred")
                console.error("Unknown error") // Debugging
            }
        } finally {
            setLoading(false)
        }
    }
    console.log('Characters:', characters) // Debugging
    console.log('Total Pages:', totalPages) // Debugging

    // Fetch characters when the page or query changes
    useEffect(() => {

        fetchCharacters(currentPage, query)

    }, [currentPage, query])

    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    function handlePreviousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("Form submitted") // Debugging line
        console.log(`Search query: ${search}`) // Debugging line
        setQuery(search)
        setCurrentPage(1)
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    // const filteredCharacters = characters.filter(char =>
    //     char.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    // )

    const charactersMap = characters?.map((character) => (
        <Link
            key={character._id}
            className="hover:underline text-center"
            href={`/characters/${character._id}`}
        >
            {character.name}
        </Link>
    ))

    if (loading) {
        return (
            <div className="bg-trees2 bg-cover bg-center flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="white"
                        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                    >
                        <animateTransform
                            attributeName="transform"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12360 12 12"
                        />
                    </path>
                </svg>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-trees2 bg-cover bg-center flex flex-col justify-center items-center">
                <h1 className="text-white text-3xl mb-8 text-center mt-8">
                    There was an error loading this page...
                </h1>
                <Link href="/" passHref>
                    <div className="bg-white px-4 py-2 rounded-xl text-xl hover:underline">
                        Return to home
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <main className="bg-trees2 bg-cover bg-center flex flex-col justify-center items-center gap-y-16">
            <div className="flex flex-col justify-center items-center gap-y-8 lg:gap-y-10 bg-white p-6 md:p-12 m-2 rounded-3xl">
                <h1 className="flex flex-col justify-center items-center text-xl lg:text-5xl xl:text-4xl underline text-center">
                    Select a character:
                </h1>
                <form
                    className="flex flex-col justify-center items-center md:gap-x-4 md:flex-row gap-y-4"
                    onSubmit={handleSubmit}
                    name="CharactersList"
                // method="POST"
                // data-netlify="true"
                >
                    {/* <input
                        type="hidden"
                        name="form-name"
                        value="CharactersList"
                    /> */}
                    <input
                        type="text"
                        placeholder="Search characters..."
                        value={search}
                        name="query"
                        onChange={handleChange}
                        className="px-4 py-2 border border-black rounded"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded w-full"
                    >
                        Search
                    </button>
                </form>
                {characters.length > 0 ? (
                    <>
                        <div className="flex flex-col justify-center items-center gap-y-10 text-xl lg:text-3xl xl:text-3xl">
                            {charactersMap}
                        </div>

                        <div className="flex justify-between w-full">
                            <button
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Next
                            </button>
                        </div>
                    </>
                ) : (
                    <h1 className="text-center text-2xl">
                        Please enter a valid name...
                    </h1>
                )}
            </div>
        </main>
    )
}
