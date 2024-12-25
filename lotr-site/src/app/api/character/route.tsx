import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { page, pageSize, query } = await request.json()
    const pageNumber = parseInt(page || '1', 10)
    const pageSizeNumber = parseInt(pageSize || '10', 10)
    const searchQuery = query || '' // Get search query
    const startIndex = (pageNumber - 1) * pageSizeNumber
    const endIndex = startIndex + pageSizeNumber

    try {
        // Fetch all characters from external API
        const response = await axios.get('https://the-one-api.dev/v2/character', {
            headers: {
                Authorization: `Bearer ${process.env.VITE_SOME_KEY}`,
            },
        })

        // Ensure the API response structure is typed
        type Character = {
            _id: string;
            name: string;
        }

        const characters: Character[] = response.data.docs;

        // Filter based on query (case-insensitive)
        const filteredCharacters = characters.filter((character) =>
            character.name.toLowerCase().includes(searchQuery.toLowerCase())
        )

        // Paginate the filtered results
        const paginatedCharacters = filteredCharacters.slice(startIndex, endIndex)

        return NextResponse.json({
            data: paginatedCharacters,
            totalPages: Math.ceil(filteredCharacters.length / pageSizeNumber),
            currentPage: pageNumber,
            pageSize: pageSizeNumber,
        });
    } catch (error: unknown) {
        console.error(
            'API Error:',
            error instanceof Error ? error.message : 'An unknown error occurred'
        )
        return new NextResponse('Failed to fetch characters', { status: 500 })
    }
}
