import { createStrictContext, useStrictContext } from '@/shared/lib/react'

export type MoviesFavoritesDeps = {
    removeMovieFromFavoriteList: (id: string) => void
}

export const moviesFavoritesDepsContext = createStrictContext<{ deps: MoviesFavoritesDeps }>()

export const useMoviesFavoritesDeps = () => useStrictContext(moviesFavoritesDepsContext).deps
