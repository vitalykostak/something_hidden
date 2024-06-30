import { useCallback, useState } from 'react'

import { ViewEnum } from '@/shared/ui/ViewSwitcher/ViewSwitcher'

import { useMoviesGalleryDeps } from '../deps'

export const useGalleryViewSwitcher = () => {
    const deps = useMoviesGalleryDeps()

    const [galleryViewType, setType] = useState<ViewEnum>(
        () => deps.getStoredGalleryViewType()?.galleryViewType || ViewEnum.TILE
    )

    const changeGalleryViewType = useCallback(
        (view: ViewEnum) => {
            setType(view)
            deps.storeGalleryViewType({ galleryViewType: view })
        },
        [deps]
    )

    return { galleryViewType, changeGalleryViewType }
}
