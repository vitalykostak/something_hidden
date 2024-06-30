import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './GenreTag.module.scss'

interface GenreTagProps {
    className?: string
    genre: string
}

const GenreTag: FC<GenreTagProps> = memo((props) => {
    const { genre, className } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames(styles.container, mods, additionsClasses)}>
            <p>{genre}</p>
        </div>
    )
})

export default GenreTag
