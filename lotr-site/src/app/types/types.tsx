export interface Book {
    _id: string
    name: string
}

export interface Chapter {
    _id: string
    chapterName: string
}

export interface Movie {
    _id: string
    name: string
}

export interface MovieInfoTypes {
    academyAwardNominations: number
    academyAwardWins: number
    boxOfficeRevenueInMillions: number
    budgetInMillions: number
    name: string
    rottenTomatoesScore: number
    runtimeInMinutes: number
    _id: string
}