import { ReactNode, ReactPortal, useState } from 'react'
import ModalFactory from './ModalFactory'

interface UseModalType {
  isShown: boolean
  Modal: ({ children, className }: ModalPortalProps) => ReactPortal | null
  openModal: () => void
  closeModal: () => void
}

interface UseModalPropsType {
  root?: string
  closeIcon?: ReactNode
}

interface ModalPortalProps {
  children: JSX.Element
  className?: string
}

export const useModal = ({ 
  root = 'modal-root',
  closeIcon
}: UseModalPropsType = {}): UseModalType => {
  const [show, setShow] = useState(false)

  const openModal = (): void => {
    setShow(true)
  }

  const closeModal = (): void => {
    setShow(false)
  }

  const Modal = ModalFactory({ show, closeModal, root, closeIcon })

  return {
    isShown: show,
    Modal,
    openModal,
    closeModal
  }
}