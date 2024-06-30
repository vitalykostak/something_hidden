import { type ReactNode, memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import GenreTag from '../GenreTag/GenreTag'

import styles from './MovieListCard.module.scss'

interface MovieListCardProps {
    className?: string
    imageSrc: string
    movieName: string
    year: string
    description: string
    genres: string[]
    action?: ReactNode
    onClick: () => void
}

const MovieListCard: FC<MovieListCardProps> = memo((props) => {
    const { imageSrc, movieName, year, className, action, onClick, description, genres } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <li className={classNames(styles.wrapper, mods, additionsClasses)}>
            <div
                className={classNames(styles.container, { [styles.withAction]: Boolean(action) })}
                onClick={onClick}
            >
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={imageSrc} alt={movieName} />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.movieNameAndYearContainer}>
                        <p className={styles.movieName} title={movieName}>
                            {movieName}
                        </p>
                        <p className={styles.year}>{year}</p>
                    </div>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.genresContainer}>
                        {genres.map((g) => (
                            <GenreTag key={g} genre={g} />
                        ))}
                    </ul>
                </div>
            </div>
            {action && <div className={styles.action}>{action}</div>}
        </li>
    )
})

export default MovieListCard
