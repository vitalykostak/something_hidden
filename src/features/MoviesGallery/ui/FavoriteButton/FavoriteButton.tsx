import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import StarOutline from '@/shared/assets/icons/starOutline.svg'
import Star from '@/shared/assets/icons/star.svg'

import styles from './FavoriteButton.module.scss'

interface FavoriteButtonProps {
    className?: string
    isFavorite: boolean
    onClick: () => void
}

const FavoriteButton: FC<FavoriteButtonProps> = memo((props) => {
    const { isFavorite, onClick, className } = props

    const mods = {}

    const additionsClasses = [className]

    const Component = isFavorite ? Star : StarOutline

    return (
        <div className={classNames(styles.container, mods, additionsClasses)}>
            <Component width={30} height={30} onClick={onClick} />
        </div>
    )
})

export default FavoriteButton
