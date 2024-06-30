import { type ReactNode, memo, type FC } from 'react'

import { ViewEnum } from '@/shared/ui/ViewSwitcher/ViewSwitcher'

import MovieTileCard from './MovieTileCard'
import MovieListCard from './MovieListCard'

interface MovieCardProps {
    className?: string
    variant: 'TILE' | 'LIST'
    imageSrc: string
    movieName: string
    year: string
    description: string
    genres: string[]
    action?: ReactNode
    onClick: () => void
}

const MovieCard: FC<MovieCardProps> = memo((props) => {
    const { variant, ...rest } = props

    if (variant === ViewEnum.TILE) {
        return <MovieTileCard {...rest} />
    }

    return <MovieListCard {...rest} />
})

export default MovieCard
