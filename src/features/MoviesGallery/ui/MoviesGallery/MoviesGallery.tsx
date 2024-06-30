import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import { MovieCard, type MoviePreview } from '@/entities/movie'
import ViewSwitcher from '@/shared/ui/ViewSwitcher/ViewSwitcher'

import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { useMoviesGalleryDeps } from '../../deps'
import { useGalleryViewSwitcher } from '../../lib/viewSwitcher'

import styles from './MoviesGallery.module.scss'

interface MoviesGalleryProps {
    className?: string
    moviesList: MoviePreview[]
    onMovieClick: (movieId: string) => void
}

const MoviesGallery: FC<MoviesGalleryProps> = memo((props) => {
    const { moviesList, className, onMovieClick } = props

    const { galleryViewType, changeGalleryViewType } = useGalleryViewSwitcher()
    const deps = useMoviesGalleryDeps()

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames(styles.container, mods, additionsClasses)}>
            <h2 className={styles.title}>Movies Gallery</h2>
            <div className={styles.viewSwitcher}>
                <span>view as</span>
                <ViewSwitcher view={galleryViewType} onSwitch={changeGalleryViewType} />
            </div>

            <ul className={styles.containerList}>
                {moviesList.map((m) => {
                    const isFavorite = deps.isMovieInFavoriteList(m.id)
                    const onClickFavoriteButton = () => {
                        isFavorite
                            ? deps.removeMovieFromFavoriteList(m.id)
                            : deps.addMovieToFavoriteList(m)
                    }

                    return (
                        <MovieCard
                            variant={galleryViewType}
                            description={m.description}
                            genres={m.genres}
                            onClick={() => {
                                onMovieClick(m.id)
                            }}
                            key={m.id}
                            imageSrc={m.img}
                            movieName={m.movieName}
                            year={m.year}
                            action={
                                <FavoriteButton
                                    isFavorite={isFavorite}
                                    onClick={onClickFavoriteButton}
                                />
                            }
                        />
                    )
                })}
            </ul>
        </div>
    )
})

export default MoviesGallery
