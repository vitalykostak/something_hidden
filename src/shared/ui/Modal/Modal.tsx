import { type ReactNode, type FC } from 'react'
import { useScrollLock } from 'usehooks-ts'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'

import Overlay from '../Overlay/Overlay'
import Portal from '../Portal/Portal'

import modalStyles from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props

    useScrollLock()

    const { isClosing, close, isMounted } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATION_DELAY
    })

    const mods = {
        [modalStyles.opened]: isOpen,
        [modalStyles.closing]: isClosing
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div
                className={classNames(modalStyles.Modal, mods, [
                    className,
                    modalStyles.uiLatestVersion
                ])}
            >
                <Overlay onClick={close} />
                <div className={modalStyles.content}>{children}</div>
            </div>
        </Portal>
    )
}

export default Modal
