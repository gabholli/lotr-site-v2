import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-white flex justify-center items-center border-t-4 border-black
        gap-x-10 fixed bottom-0 left-0 right-0 h-20'>
            <Link
                href='/'
                className='text-xl lg:text-2xl hover:underline'>
                Home
            </Link>
            <Link
                href='/credits'
                className='text-xl lg:text-2xl hover:underline'>
                Credits
            </Link>
        </div>
    )
}