import { useEffect, useState } from 'react'

import { getMovieDetails } from '@/shared/api/movieRepository'

import { type Movie } from './types'

export const useMovieDetails = (id: string) => {
    const [movieDetails, setDetails] = useState<Movie | null>(null)
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const effect = async () => {
            try {
                setLoading(true)
                const res = await getMovieDetails(id)
                if (!res) {
                    throw new Error()
                }
                const details: Movie & { name?: string } = Object.assign(res, {
                    ...res,
                    movieName: res.name
                })
                delete details?.name
                setDetails(details)
            } catch (error) {
                setError('Something went wrong')
            } finally {
                setLoading(false)
            }
        }

        void effect()
    }, [id])

    return { movieDetails, movieDetailsError: error, moviesDetailsLoading: loading }
}
