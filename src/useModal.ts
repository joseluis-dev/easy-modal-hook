import { ReactPortal, useState } from 'react'
import ModalFactory from './ModalFactory'
import { ModalContentPropsType } from './ModalContent'

interface UseModalType {
  isShown: boolean
  Modal: ({ children, close }: ModalContentPropsType) => ReactPortal | null
  open: () => void
  close: () => void
}

export const useModal = ({ root = 'modal-root' } = {}): UseModalType => {
  const [show, setShow] = useState(false)

  const open = (): void => {
    setShow(true)
  }

  const close = (): void => {
    setShow(false)
  }

  const Modal = ModalFactory({ show, close, root })

  return {
    isShown: show,
    Modal,
    open,
    close
  }
}