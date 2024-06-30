import { useEffect, useState } from 'react'

import { type MoviePreview } from '@/entities/movie'
import { getMoviesList } from '@/shared/api/movieRepository'

export const useMoviesList = () => {
    const [list, setList] = useState<MoviePreview[]>([])
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const effect = async () => {
            try {
                setLoading(true)
                const list = await getMoviesList()
                if (!list) {
                    throw new Error()
                }

                const mapped = list.map((dto) => ({
                    id: dto.id,
                    movieName: dto.name,
                    img: dto.img,
                    year: dto.year,
                    description: dto.description,
                    genres: dto.genres
                }))

                setList(mapped)
            } catch (error) {
                setError('Something went wrong')
            } finally {
                setLoading(false)
            }
        }

        void effect()
    }, [])

    return { moviesList: list, moviesListError: error, moviesListLoading: loading }
}
