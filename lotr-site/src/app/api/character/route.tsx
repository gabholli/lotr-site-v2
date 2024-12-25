import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);
    const query = searchParams.get('query') || '' // Get search query
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize

    try {
        // Fetch all characters from external API
        const response = await axios.get('https://the-one-api.dev/v2/character', {
            headers: {
                Authorization: `Bearer ${process.env.VITE_SOME_KEY}`,
            },
        });

        // Ensure the API response structure is typed
        type Character = {
            _id: string
            name: string
        };

        const characters: Character[] = response.data.docs;

        // Filter based on query (case-insensitive)
        const filteredCharacters = characters.filter((character) =>
            character.name.toLowerCase().includes(query.toLowerCase())
        )

        // Paginate the filtered results
        const paginatedCharacters = filteredCharacters.slice(startIndex, endIndex)

        return NextResponse.json({
            data: paginatedCharacters,
            totalPages: Math.ceil(filteredCharacters.length / pageSize),
            currentPage: page,
            pageSize: pageSize,
        });
    } catch (error: unknown) {
        console.error(
            'API Error:',
            error instanceof Error ? error.message : 'An unknown error occurred'
        );
        return new NextResponse('Failed to fetch characters', { status: 500 })
    }
}
