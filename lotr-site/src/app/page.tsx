"use client"

import Link from "next/link"


export default function Home() {

  return (
    <main className="flex flex-col justify-center items-center
      gap-y-10">
      <h1 className="text-xl lg:text-5xl xl:text-8xl underline">Choose one of the following:</h1>
      <div className="flex flex-col justify-center items-center gap-y-10
        text-xl lg:text-3xl xl:text-5xl">
        <Link href="books">Books</Link>
        <Link href="">Movies</Link>
        <Link href="">Characters</Link>
      </div>
    </main>
  )
}
