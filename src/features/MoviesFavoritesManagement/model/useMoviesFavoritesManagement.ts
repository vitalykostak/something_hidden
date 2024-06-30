import { useCallback, useLayoutEffect, useState } from 'react'

import { getFromLocalStorage, setToLocalStorage } from '@/shared/lib/localstorage'

const FAVORITE_LIST_KEY = '@@FAVORITE_LIST'

type Movie = {
    id: string
    movieName: string
}

export const useMoviesFavoritesManagement = () => {
    const [isFavoriteListInitialized, setInitialized] = useState<boolean>(false)
    const [favoritesList, setList] = useState<Movie[]>([])

    useLayoutEffect(() => {
        setList(getFromLocalStorage<Movie[]>(FAVORITE_LIST_KEY, []))
        setInitialized(true)
    }, [])

    const addMovieToFavoriteList = useCallback((movie: Movie) => {
        const current = getFromLocalStorage<Movie[]>(FAVORITE_LIST_KEY, [])
        const updated = [...current, movie]
        setToLocalStorage(FAVORITE_LIST_KEY, updated)
        setList(updated)
    }, [])

    const removeMovieFromFavoriteList = useCallback((movieId: string) => {
        const current = getFromLocalStorage<Movie[]>(FAVORITE_LIST_KEY, [])
        const updated = current.filter((movie) => movie.id !== movieId)
        setToLocalStorage(FAVORITE_LIST_KEY, updated)
        setList(updated)
    }, [])

    const isMovieInFavoriteList = useCallback((movieId: string) => {
        const list = getFromLocalStorage<Movie[]>(FAVORITE_LIST_KEY, [])
        return Boolean(list.find((m) => m.id === movieId))
    }, [])

    return {
        favoritesList,
        isFavoriteListInitialized,
        addMovieToFavoriteList,
        removeMovieFromFavoriteList,
        isMovieInFavoriteList
    }
}
