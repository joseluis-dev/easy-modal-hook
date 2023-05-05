import React, { ReactNode } from 'react'

export interface ModalContentPropsType {
  children: JSX.Element
  closeModal: () => void
  closeIcon?: ReactNode
}

const ModalContent = ({ children, closeModal, closeIcon }: ModalContentPropsType): JSX.Element => {
  return (
    <>
      {Boolean(closeIcon)
        ? <button onClick={closeModal}>
            {closeIcon}
          </button>
        : <button onClick={closeModal}>
            Close
          </button>}
      {children}
    </>
  )
}

export default ModalContent