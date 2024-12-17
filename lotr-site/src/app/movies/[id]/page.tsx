"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import { useParams } from "next/navigation"
import { MovieInfoTypes } from "@/app/types/types"

export default function MovieDetails() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [movieInfo, setMovieInfo] = useState<MovieInfoTypes[]>([])

    useEffect(() => {
        if (!id) return
        setLoading(true)

        // Fetch from local API route (not external API)
        axios
            .get(`/api/movie/${id}`)
            .then((response) => {
                console.log(response.data.docs)
                setMovieInfo(response.data.docs)
            })
            .catch((e) => {
                setError(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    const movieInfoMap = movieInfo?.map(movie => {
        return (
            <div key={movie._id}
                className="flex flex-col justify-center items-center text-sm lg:text-2xl xl:text-xl
                    gap-y-4"
            >
                <p>Name: {movie.name}</p>
                <p>Academy Award nominations: {movie.academyAwardNominations}</p>
                <p>Academy Award wins: {movie.academyAwardWins}</p>
                <p>Box office revenues(in millions): {movie.boxOfficeRevenueInMillions}</p>
                <p>Rotten Tomatoes score: {movie.rottenTomatoesScore}</p>
                <p>Total run time(minutes): {movie.runtimeInMinutes}</p>
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
                href="/movies"
                className="bg-white p-2 rounded-2xl text-xl my-4 hover:underline"
            >
                Back to movie list:
            </Link>
            <section className="bg-white m-2 rounded-3xl p-6 md:p-12 flex flex-col gap-y-6 lg:gap-y-8">
                <h1 className="text-xl lg:text-3xl xl:text-2xl underline text-center">Information about this movie:</h1>
                {movieInfoMap}
            </section>
        </main>
    )
}
