"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import { Book } from "./types/types"

export default function Home() {

  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)
  const [book, setBook] = useState<Book[]>([])

  useEffect(() => {
    // setLoading(true)

    // Fetch from local API route (not external API)
    axios
      .get("/api/book")
      .then((response) => {
        setBook(response.data.docs)
      })
      .catch(() => {
        // setError(error)
      })
      .finally(() => {
        // setLoading(false)
      })
  }, [])

  // console.log(book.map(b => b.name))
  const books = book.map(b => {
    return <p key={b._id}>{b.name}</p>
  })


  return (
    <main className="flex flex-col justify-center items-center min-h-svh
      gap-y-10">
      <h1 className="text-3xl underline">Choose a book:</h1>
      <div className="flex flex-col justify-center items-center gap-y-10
        text-xl">
        {books}
      </div>
    </main>
  )
}
