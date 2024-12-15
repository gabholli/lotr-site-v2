"use client"

import axios from "axios";
import { use, useEffect, useState } from "react"
import { Book } from "./types/types"

export default function Home() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [book, setBook] = useState<Book[]>([])

  useEffect(() => {
    setLoading(true)

    // Fetch from local API route (not external API)
    axios
      .get("/api/book")
      .then((response) => {
        setBook(response.data.docs)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // console.log(book.map(b => b.name))
  const books = book.map(b => {
    return <p>{b.name}</p>
  })
  return (
    <main>
      <h1>Choose a book:</h1>
      <div>
        {books}
      </div>
    </main>
  )
}
