import React, { ReactNode } from 'react'

export interface ModalContentPropsType {
  children: JSX.Element
  closeModal: () => void
  closeIcon?: ReactNode
}

const ModalContent = ({ children, closeModal, closeIcon, ...props }: ModalContentPropsType): JSX.Element => {
  return (
    <div {...props}>
      {Boolean(closeIcon)
        ? <button onClick={closeModal}>
            {closeIcon}
          </button>
        : <button onClick={closeModal}>
            Close
          </button>}
      {children}
    </div>
  )
}

export default ModalContent