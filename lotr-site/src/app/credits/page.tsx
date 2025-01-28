import Link from 'next/link'
import React from 'react'

export default function Credits() {
    return (
        <section className='flex flex-col justify-center items-center gap-y-10 m-4 md:m-12'>
            <div className='flex flex-col justify-center items-center gap-y-10 bg-white
                p-6 md:p-12 rounded-3xl'>
                <h2 className='text-xl lg:text-5xl xl:text-4xl'>Credits</h2>
                <div className='flex flex-col justify-center items-center gap-y-10 text-center
                text-xl lg:text-3xl xl:text-3xl px-10'>
                    <p className=''>This project uses The One API for data from The
                        &lsquo;Lord of the Rings universe&rsquo;, licensed under the MIT License.
                    </p>
                    <p>
                        This project is a fan-made demonstration using The One API. It
                        is not affiliated with or endorsed by the official Lord of the
                        Rings franchise.
                    </p>
                    <Link
                        className='underline text-xl lg:text-3xl xl:text-3xl'
                        href="https://github.com/gitfrosh/lotr-api"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Original source
                    </Link>
                    {/* <Link
                        className='underline text-xl lg:text-3xl xl:text-3xl'
                        href="https://creativecommons.org/licenses/by/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        License information
                    </Link> */}

                </div>
            </div>
        </section>

    )
}
