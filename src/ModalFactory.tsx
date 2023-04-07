import React, { ReactPortal } from 'react'
import ReactDOM from 'react-dom'
import ModalContent from './ModalContent'

interface ModalFactoryPropsType {
  close: () => void
  show: boolean
  root: string
}

const ModalFactory = ({ close, show, root }: ModalFactoryPropsType) => ({ children }: { children: JSX.Element }): ReactPortal | null => {
  return (
    show
      ? ReactDOM.createPortal(
        <ModalContent close={close}>
          {children}
        </ModalContent>,
        document.getElementById(root) as Element | DocumentFragment ?? document.body
      )
      : null
  )
}

export default ModalFactory