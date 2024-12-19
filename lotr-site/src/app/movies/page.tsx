"use client"

import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Movie } from '../types/types'

function MovieList() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [movie, setMovie] = useState<Movie[]>([])

    useEffect(() => {
        setLoading(true)

        // Fetch from local API route (not external API)
        axios
            .get("/api/movie")
            .then((response) => {
                setMovie(response.data.docs)
                console.log(response.data.docs)
            })
            .catch((e) => {
                setError(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const moviesListMap = movie?.map(m => {
        return <Link
            className="hover:underline text-center"
            href={`/movies/${m._id}`}
            key={m._id}
        >{m.name}
        </Link>
    })

    if (loading) {
        return (
            <div className="bg-trees2 bg-cover bg-center flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        fill="white"
                        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                        <animateTransform
                            attributeName="transform"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                        />
                    </path>
                </svg>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-trees2 bg-cover bg-center flex flex-col justify-center items-center">
                <h1 className="text-white text-3xl mb-8 text-center mt-8">There was an error loading this page...</h1>
                <Link href="/" passHref>
                    <div className="bg-white px-4 py-2 rounded-xl text-xl hover:underline">Return to home</div>
                </Link>
            </div>
        )
    }

    return (
        <main className="bg-trees2 bg-cover bg-center flex flex-col justify-center items-center
      gap-y-16">
            <div className='flex flex-col justify-center items-center gap-y-8 lg:gap-y-10 bg-white
                p-6 md:p-12 m-2 rounded-3xl'>
                <h1 className="text-xl lg:text-5xl xl:text-4xl underline text-center">Find information for one of the following:</h1>
                <div className="flex flex-col justify-center items-center gap-y-10
        text-xl lg:text-3xl xl:text-3xl">
                    {moviesListMap}
                    {/* {movie.length > 0 && movie[6] && (
                        <Link
                            className='hover:underline'
                            href={`/movies/${movie[6]._id}`}
                        >
                            {movie[6].name}
                        </Link>)}
                    {movie.length > 0 && movie[5] && (
                        <Link
                            className='hover:underline'
                            href={`/movies/${movie[5]._id}`}
                        >
                            {movie[5].name}
                        </Link>)}
                    {movie.length > 0 && movie[7] && (
                        <Link
                            className='hover:underline'
                            href={`/movies/${movie[7]._id}`}
                        >
                            {movie[7].name}
                        </Link>)} */}
                </div>
            </div>
        </main>
    )
}

export default MovieList