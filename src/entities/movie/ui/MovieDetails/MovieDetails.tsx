import { type ReactNode, memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import { useMovieDetails } from '../../model/useMovieDetails'
import GenreTag from '../GenreTag/GenreTag'

import styles from './MovieDetails.module.scss'

interface MovieDetailsProps {
    className?: string
    id: string
    action1?: ReactNode
    action2?: ReactNode
}

const MovieDetails: FC<MovieDetailsProps> = memo((props) => {
    const { id, className, action1, action2 } = props
    const { movieDetails } = useMovieDetails(id)

    if (!movieDetails) {
        return null
    }
    const { img, movieName, description, genres, starring, director, year } = movieDetails

    const mods = { [styles.pr]: Boolean(action1) }

    const additionsClasses = [className]

    return (
        <div className={classNames(styles.container, mods, additionsClasses)}>
            {action1 && <div className={styles.action1}>{action1}</div>}
            <div className={styles.flex}>
                <img className={styles.img} src={img} alt={movieName} />
                <div>
                    <h1>{movieName}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className={classNames(styles.flex, {}, [styles.aic])}>
                <div className={styles.info}>
                    <div className={styles.yearContainer}>
                        {action2 && action2}
                        <p className={styles.year}>{year}</p>
                    </div>
                    <ul className={styles.genresContainer}>
                        {genres.map((g) => (
                            <GenreTag key={g} genre={g} />
                        ))}
                    </ul>
                </div>
                <div className={styles.fdc}>
                    <p>Director: {director}</p>
                    <p>Starring: {starring.join(', ')}</p>
                </div>
            </div>
        </div>
    )
})

export default MovieDetails
