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

export interface Character {
    _id: string
    name: string
    wikiUrl: string
    race: string
    birth: string
    gender: string
    death: string
    hair: string
    height: string
    realm: string
    spouse: string
}