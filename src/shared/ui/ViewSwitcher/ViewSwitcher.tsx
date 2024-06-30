import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import TileIcon from '@/shared/assets/icons/tile.svg'
import ListIcon from '@/shared/assets/icons/list.svg'

import styles from './ViewSwitcher.module.scss'

export enum ViewEnum {
    TILE = 'TILE',
    LIST = 'LIST'
}

interface ViewSwitcherProps {
    className?: string
    view: ViewEnum
    onSwitch: (view: ViewEnum) => void
}

const ViewSwitcher: FC<ViewSwitcherProps> = memo((props) => {
    const { view, onSwitch, className } = props

    const mods = {}

    const additionsClasses = [className]

    const renderItem = (viewType: ViewEnum, Icon: React.FC<React.SVGProps<SVGSVGElement>>) => (
        <div
            className={classNames(styles.item, { [styles.active]: view === viewType })}
            onClick={() => {
                onSwitch(viewType)
            }}
        >
            <Icon width={24} height={24} />
        </div>
    )

    return (
        <div className={classNames(styles.container, mods, additionsClasses)}>
            {renderItem(ViewEnum.TILE, TileIcon)}
            {renderItem(ViewEnum.LIST, ListIcon)}
        </div>
    )
})

export default ViewSwitcher
