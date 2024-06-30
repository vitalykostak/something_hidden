import { memo, useState, type FC } from 'react'

import { Page } from '@/widgets/Page'
import { useMoviesList } from '@/entities/movie'
import { FavoriteButton } from '@/features/MoviesGallery'
import { useMoviesFavoritesManagement } from '@/features/MoviesFavoritesManagement'
import MovieDetails from '@/entities/movie/ui/MovieDetails/MovieDetails'
import Modal from '@/shared/ui/Modal/Modal'
import Cross from '@/shared/assets/icons/cross.svg'

import { useMoviesGalleryViewType } from '../../lib/useMoviesGalleryViewType'
import MoviesGallerySection from '../sections/MoviesGallerySection'
import MoviesFavoritesSection from '../sections/MoviesFavoritesSection'

import styles from './Main.module.scss'

type MainProps = {
    className?: string
}

const Main: FC<MainProps> = memo(() => {
    const [movieDetailsId, setMovieDetailsId] = useState<string>('')

    const { moviesList } = useMoviesList()
    const {
        favoritesList,
        addMovieToFavoriteList,
        removeMovieFromFavoriteList,
        isMovieInFavoriteList
    } = useMoviesFavoritesManagement()

    const { getStoredGalleryViewType, storeGalleryViewType } = useMoviesGalleryViewType()

    const isMovieDetailsItemFavorite = isMovieInFavoriteList(movieDetailsId)
    const onClickMovieDetailsItemFavorite = isMovieDetailsItemFavorite
        ? () => {
            removeMovieFromFavoriteList(movieDetailsId)
        }
        : () => {
            addMovieToFavoriteList({
                id: movieDetailsId,
                movieName: moviesList.find((m) => m.id === movieDetailsId)?.movieName || ''
            })
        }

    return (
        <>
            <Page className={styles.container}>
                <MoviesGallerySection
                    onMovieClick={setMovieDetailsId}
                    moviesList={moviesList}
                    deps={{
                        deps: {
                            addMovieToFavoriteList,
                            removeMovieFromFavoriteList,
                            isMovieInFavoriteList,
                            getStoredGalleryViewType,
                            storeGalleryViewType
                        }
                    }}
                />
                <MoviesFavoritesSection
                    favoritesList={favoritesList}
                    className={styles.favoritesList}
                    deps={{
                        deps: {
                            removeMovieFromFavoriteList
                        }
                    }}
                />
            </Page>
            {Boolean(movieDetailsId) && (
                <Modal
                    isOpen={Boolean(movieDetailsId)}
                    onClose={() => {
                        setMovieDetailsId('')
                    }}
                >
                    <MovieDetails
                        id={movieDetailsId}
                        className={styles.movieDetailsModal}
                        action1={
                            <Cross
                                cursor='pointer'
                                onClick={() => {
                                    setMovieDetailsId('')
                                }}
                            />
                        }
                        action2={
                            <FavoriteButton
                                isFavorite={isMovieInFavoriteList(movieDetailsId)}
                                onClick={onClickMovieDetailsItemFavorite}
                            />
                        }
                    />
                </Modal>
            )}
        </>
    )
})

export default Main
