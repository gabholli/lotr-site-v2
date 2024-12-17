import axios from 'axios'

export async function GET() {
    try {
        const response = await axios.get('https://the-one-api.dev/v2/character', {
            headers: {
                Authorization: `Bearer ${process.env.VITE_SOME_KEY}`,
                'X-LOTR-Host': 'the-one-api.dev'
            }
        })

        return new Response(JSON.stringify(response.data), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response('Failed to fetch characters', { status: 500 })
    }
}
