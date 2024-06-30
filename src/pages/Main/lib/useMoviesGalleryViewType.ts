import { useCallback } from 'react'

import { ViewEnum } from '@/shared/ui/ViewSwitcher/ViewSwitcher'
import { getFromLocalStorage, setToLocalStorage } from '@/shared/lib/localstorage'
import { type StoredGalleryViewType } from '@/features/MoviesGallery'

const LOCAL_STORAGE_KEY = 'MAIN_PAGE_MOVIES_GALLERY_VIEW_TYPE'
const DEFAULT_TYPE: StoredGalleryViewType = { galleryViewType: ViewEnum.TILE }

export const useMoviesGalleryViewType = () => {
    const getStoredGalleryViewType = useCallback(
        () => getFromLocalStorage<StoredGalleryViewType>(LOCAL_STORAGE_KEY, DEFAULT_TYPE),
        []
    )
    const storeGalleryViewType = useCallback((galleryViewType: StoredGalleryViewType) => {
        setToLocalStorage<StoredGalleryViewType>(LOCAL_STORAGE_KEY, galleryViewType)
    }, [])

    return { getStoredGalleryViewType, storeGalleryViewType }
}
