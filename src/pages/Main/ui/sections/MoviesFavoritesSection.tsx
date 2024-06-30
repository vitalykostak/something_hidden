import { memo, type FC } from 'react'

import {
    MoviesFavorites,
    type FavoriteMovie,
    type MoviesFavoritesDeps,
    moviesFavoritesDepsContext
} from '@/features/MoviesFavorites'

interface MoviesGallerySectionProps {
    className?: string
    deps: { deps: MoviesFavoritesDeps }
    favoritesList: FavoriteMovie[]
}

const MoviesFavoritesSection: FC<MoviesGallerySectionProps> = memo((props) => {
    const { deps, favoritesList, className } = props

    return (
        <moviesFavoritesDepsContext.Provider value={deps}>
            <MoviesFavorites favoritesList={favoritesList} className={className} />
        </moviesFavoritesDepsContext.Provider>
    )
})

export default MoviesFavoritesSection
