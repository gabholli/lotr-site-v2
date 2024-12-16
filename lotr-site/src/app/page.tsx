// Data provided by the oneAPI (https://the-one-api.dev/). 
// License: Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/)

"use client"

import Link from "next/link"


export default function Home() {

  return (
    <main className="flex flex-col justify-center items-center
      gap-y-16">
      <h1 className="bg-white p-2 rounded-2xl text-xl lg:text-5xl xl:text-2xl">Lord of the Rings Info</h1>

      <div className="bg-white flex flex-col gap-y-8 lg:gap-y-10 p-6 md:p-12 rounded-3xl">
        <h1 className="text-xl lg:text-5xl xl:text-4xl underline">Choose one of the following:</h1>
        <div className="flex flex-col justify-center items-center gap-y-10
        text-xl lg:text-3xl xl:text-3xl">
          <Link className="hover:underline" href="books">Books</Link>
          <Link className="hover:underline" href="movies">Movies</Link>
          <Link className="hover:underline" href="">Characters</Link>
        </div>
      </div>
    </main>
  )
}
