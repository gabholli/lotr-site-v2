import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='flex justify-center items-center border-t-4 border-black'>
            <Link
                href='/'
                className='text-xl lg:text-3xl'>
                Home
            </Link>
        </div>
    )
}