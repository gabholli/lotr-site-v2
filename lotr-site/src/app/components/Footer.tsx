import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-white flex justify-center items-center border-t-4 border-black
        gap-x-6'>
            <Link
                href='/'
                className='text-xl lg:text-3xl'>
                Home
            </Link>
            <Link
                href='/credits'
                className='text-xl lg:text-3xl'>
                Credits
            </Link>
        </div>
    )
}