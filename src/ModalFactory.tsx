import React, { ReactNode, ReactPortal } from 'react'
import ReactDOM from 'react-dom'
import ModalContent from './ModalContent'

interface ModalFactoryPropsType {
  close: () => void
  show: boolean
  root: string
  closeIcon?: ReactNode
}

interface ModalPortalProps {
  children: JSX.Element
}

const ModalFactory = ({ close, show, root, closeIcon }: ModalFactoryPropsType) => ({ children }: ModalPortalProps): ReactPortal | null => {
  return (
    show
      ? ReactDOM.createPortal(
        <ModalContent close={close} closeIcon={closeIcon}>
          {children}
        </ModalContent>,
        document.getElementById(root) as Element | DocumentFragment ?? document.body
      )
      : null
  )
}

export default ModalFactory