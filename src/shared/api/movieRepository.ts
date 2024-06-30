import { type AxiosResponse } from 'axios'

import { $api } from './api'

type MovieDTO = {
    id: string
    name: string
    img: string
    description: string
    year: string
    genres: string[]
    director: string
    starring: string[]
}

export const getMoviesList = async (): Promise<MovieDTO[]> => {
    const res = await $api.get<undefined, AxiosResponse<MovieDTO[]>>(
        'https://my-json-server.typicode.com/moviedb-tech/movies/list'
    )

    return res.data
}

export const getMovieDetails = async (id: string): Promise<MovieDTO> => {
    const res = await $api.get<undefined, AxiosResponse<MovieDTO>>(
        `https://my-json-server.typicode.com/moviedb-tech/movies/list/${id}`
    )

    return res.data
}
