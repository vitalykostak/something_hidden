import { createStrictContext, useStrictContext } from '@/shared/lib/react'
import { type ViewEnum } from '@/shared/ui/ViewSwitcher/ViewSwitcher'

export type StoredGalleryViewType = {
    galleryViewType: ViewEnum
}

export type MoviesGalleryDeps = {
    addMovieToFavoriteList: (movie: { id: string, movieName: string }) => void
    removeMovieFromFavoriteList: (id: string) => void
    isMovieInFavoriteList: (id: string) => boolean
    getStoredGalleryViewType: () => StoredGalleryViewType
    storeGalleryViewType: (view: StoredGalleryViewType) => void
}

export const moviesGalleryDepsContext = createStrictContext<{ deps: MoviesGalleryDeps }>()

export const useMoviesGalleryDeps = () => useStrictContext(moviesGalleryDepsContext).deps
