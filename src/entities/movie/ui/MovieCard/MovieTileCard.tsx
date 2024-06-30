import { type ReactNode, memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './MovieTileCard.module.scss'

interface MovieTileCardProps {
    className?: string
    imageSrc: string
    movieName: string
    year: string
    action?: ReactNode
    onClick: () => void
}

const MovieTileCard: FC<MovieTileCardProps> = memo((props) => {
    const { imageSrc, movieName, year, className, action, onClick } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <li className={classNames(styles.wrapper, mods, additionsClasses)}>
            <div className={styles.container} onClick={onClick}>
                <img className={styles.img} src={imageSrc} alt={movieName} />
                <p className={styles.movieName} title={movieName}>
                    {movieName}
                </p>
                <p className={styles.year}>{year}</p>
            </div>
            {action && <div className={styles.action}>{action}</div>}
        </li>
    )
})

export default MovieTileCard
