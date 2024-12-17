import axios from 'axios'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const parts = req.nextUrl.pathname.split('/')
    const id = parts.pop()  // This will be a string or undefined.

    if (!id) {
        return new Response('Book ID is missing from the URL', { status: 400 })
    }
    try {
        const response = await axios.get(`https://the-one-api.dev/v2/character/${id}`, {
            headers: {
                Authorization: `Bearer ${process.env.VITE_SOME_KEY}`
            },
        });

        return new Response(JSON.stringify(response.data), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response('Failed to fetch character details', { status: 500 })
    }
}
