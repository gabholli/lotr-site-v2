"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Character } from "@/app/types/types"

export default function CharacterDetails() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [character, setCharacter] = useState<Character[]>([])

    useEffect(() => {
        if (!id) return
        setLoading(true)

        // Fetch from local API route (not external API)
        axios
            .get(`/api/character/${id}`)
            .then((response) => {
                console.log(response.data.docs)
                setCharacter(response.data.docs)
            })
            .catch((e) => {
                setError(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    const characterDetails = character?.map(c => {
        return (
            <div
                className="flex flex-col gap-y-4 justify-center items-center text-center"
                key={c._id}>
                {c.name && <p>Name: {c.name}</p>}
                {c.race && <p>Race: {c.race}</p>}
                {c.birth && <p>Birthdate: {c.birth}</p>}
                {c.gender && <p>Gender: {c.gender}</p>}
                {c.death && <p>Time of death: {c.death}</p>}
                {c.hair && <p>Hair color: {c.hair}</p>}
                {c.height && <p>Height: {c.height}</p>}
                {c.realm && <p>Realm: {c.realm}</p>}
                {c.spouse && <p>Spouse: {c.spouse}</p>}
            </div>
        )
    })

    if (loading) {
        return (
            <div className="bg-trees3 bg-cover bg-center flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                    fill="white" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                    <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite"
                        type="rotate" values="0 12 12;360 12 12" /></path></svg>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-trees3 bg-cover bg-center flex flex-col justify-center items-center">
                <h1 className="text-white text-3xl mb-8 text-center mt-8">There was an error loading this page...</h1>
                <Link href="/" className="bg-white px-4 py-2 rounded-xl text-xl hover:underline">
                    Return to home
                </Link>
            </div>
        )
    }

    return (
        <main className="bg-trees3 bg-cover bg-center flex flex-col justify-center items-center">
            <Link
                href="/characters"
                className="bg-white p-2 rounded-2xl text-xl my-4 hover:underline"
            >
                Back to character list:
            </Link>
            <section className="bg-white m-2 rounded-3xl p-6 md:p-12 flex flex-col gap-y-6 lg:gap-y-8">
                <h1 className="text-xl lg:text-3xl xl:text-2xl underline text-center">This character&apos;s information:</h1>
                <div className="flex flex-col justify-center items-center lg:text-2xl xl:text-xl
                    gap-y-4 gap-x-4">
                    {characterDetails}
                </div>
            </section>
        </main>
    )
}
