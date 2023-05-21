import React, { HTMLAttributes, ReactNode, ReactPortal } from 'react'
import ReactDOM from 'react-dom'
import ModalContent from './ModalContent'

interface ModalFactoryPropsType {
  closeModal: () => void
  show: boolean
  root: string
  closeIcon?: ReactNode
}

interface ModalPortalProps {
  children: JSX.Element
  className?: string
}

const ModalFactory = ({ closeModal, show, root, closeIcon }: ModalFactoryPropsType) => ({ children, className }: ModalPortalProps): ReactPortal | null => {
  return (
    show
      ? ReactDOM.createPortal(
        <ModalContent className={className} closeModal={closeModal} closeIcon={closeIcon}>
          {children}
        </ModalContent>,
        document.getElementById(root) as Element | DocumentFragment ?? document.body
      )
      : null
  )
}

export default ModalFactory