import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import { useMoviesFavoritesDeps } from '../../deps'

import styles from './MoviesFavorites.module.scss'

interface FavoriteItemProps {
    id: string
    className?: string
    movieName: string
}

const FavoriteItem: FC<FavoriteItemProps> = memo((props) => {
    const { movieName, className, id } = props

    const deps = useMoviesFavoritesDeps()

    const onClick = () => {
        deps.removeMovieFromFavoriteList(id)
    }
    const mods = {}

    const additionsClasses = [className]

    return (
        <li className={classNames(styles.favoriteItemContainer, mods, additionsClasses)}>
            <div className={styles.favoriteContent}>
                <p className={styles.favoriteItem}>{movieName} </p>
                <p className={styles.removeButton} onClick={onClick}>
                    X
                </p>
            </div>
        </li>
    )
})

export default FavoriteItem
