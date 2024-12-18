import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: { url: string | URL; }) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);
    const query = searchParams.get('query') || ''; // Get search query
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    try {
        // Fetch all characters from external API
        const response = await axios.get('https://the-one-api.dev/v2/character', {
            headers: {
                Authorization: `Bearer ${process.env.VITE_SOME_KEY}`,
            },
        });

        // Filter based on query (case-insensitive)
        const filteredCharacters = response.data.docs.filter((character) =>
            character.name.toLowerCase().includes(query.toLowerCase())
        );

        // Paginate the filtered results
        const paginatedCharacters = filteredCharacters.slice(startIndex, endIndex);

        return NextResponse.json({
            data: paginatedCharacters,
            totalPages: Math.ceil(filteredCharacters.length / pageSize),
            currentPage: page,
            pageSize: pageSize,
        });
    } catch (error) {
        console.error('API Error:', error.response?.data || error.message);
        return new NextResponse('Failed to fetch characters', { status: 500 });
    }
}
