// Data provided by the oneAPI (https://the-one-api.dev/). 
// License: Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/)

"use client"

import Link from "next/link"


export default function Home() {

  return (
    <main className="flex flex-col justify-center items-center
      gap-y-16">
      <div className="bg-white flex flex-col gap-y-10 p-6 md:p-12 rounded-3xl">
        <h1 className="text-xl lg:text-5xl xl:text-7xl underline">Choose one of the following:</h1>
        <div className="flex flex-col justify-center items-center gap-y-10
        text-xl lg:text-3xl xl:text-4xl">
          <Link href="books">Books</Link>
          <Link href="">Movies</Link>
          <Link href="">Characters</Link>
        </div>
      </div>
    </main>
  )
}
