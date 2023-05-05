import React, { ReactNode, ReactPortal } from 'react'
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
}

const ModalFactory = ({ closeModal, show, root, closeIcon }: ModalFactoryPropsType) => ({ children }: ModalPortalProps): ReactPortal | null => {
  return (
    show
      ? ReactDOM.createPortal(
        <ModalContent closeModal={closeModal} closeIcon={closeIcon}>
          {children}
        </ModalContent>,
        document.getElementById(root) as Element | DocumentFragment ?? document.body
      )
      : null
  )
}

export default ModalFactory