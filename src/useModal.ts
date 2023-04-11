import { ReactNode, ReactPortal, useState } from 'react'
import ModalFactory from './ModalFactory'

interface UseModalType {
  isShown: boolean
  Modal: ({ children }: ModalPortalProps) => ReactPortal | null
  open: () => void
  close: () => void
}

interface UseModalPropsType {
  root?: string
  closeIcon?: ReactNode
}

interface ModalPortalProps {
  children: JSX.Element
}

export const useModal = ({ 
  root = 'modal-root',
  closeIcon
}: UseModalPropsType = {}): UseModalType => {
  const [show, setShow] = useState(false)

  const open = (): void => {
    setShow(true)
  }

  const close = (): void => {
    setShow(false)
  }

  const Modal = ModalFactory({ show, close, root, closeIcon })

  return {
    isShown: show,
    Modal,
    open,
    close
  }
}