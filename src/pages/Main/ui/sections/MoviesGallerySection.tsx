import { memo, type FC } from 'react'

import {
    type MoviesGalleryDeps,
    moviesGalleryDepsContext,
    MoviesGallery
} from '@/features/MoviesGallery'
import { type MoviePreview } from '@/entities/movie'

interface MoviesGallerySectionProps {
    className?: string
    deps: { deps: MoviesGalleryDeps }
    moviesList: MoviePreview[]
    onMovieClick: (movieId: string) => void
}

const MoviesGallerySection: FC<MoviesGallerySectionProps> = memo((props) => {
    const { deps, moviesList, onMovieClick } = props

    return (
        <moviesGalleryDepsContext.Provider value={deps}>
            <MoviesGallery moviesList={moviesList} onMovieClick={onMovieClick} />
        </moviesGalleryDepsContext.Provider>
    )
})

export default MoviesGallerySection
