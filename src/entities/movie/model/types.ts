export type MoviePreview = {
    id: string
    img: string
    movieName: string
    year: string
    description: string
    genres: string[]
}

export type Movie = {
    id: string
    movieName: string
    img: string
    description: string
    year: string
    genres: string[]
    director: string
    starring: string[]
}
