import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import Star from '@/shared/assets/icons/star.svg'

import { type FavoriteMovie } from '../../model/type'

import styles from './MoviesFavorites.module.scss'
import FavoriteItem from './FavoriteItem'

interface MoviesFavoritesProps {
    className?: string

    favoritesList: FavoriteMovie[]
}

const MoviesFavorites: FC<MoviesFavoritesProps> = memo((props) => {
    const { favoritesList, className } = props

    const mods = {}

    const additionsClasses = [className]

    const content =
        // eslint-disable-next-line multiline-ternary
        favoritesList.length > 0 ? (
            <ul className={styles.listContainer}>
                {favoritesList.map((m) => (
                    <FavoriteItem key={m.id} movieName={m.movieName} id={m.id} />
                ))}
            </ul>
        ) : (
            <h3 className={styles.emptyMsg}>Favorite list is empty :(</h3>
        )

    return (
        <div className={classNames(styles.container, mods, additionsClasses)}>
            <h2>
                <Star width={25} height={25} />
                {'  '}
                Favorite List
            </h2>
            {content}
        </div>
    )
})

export default MoviesFavorites
