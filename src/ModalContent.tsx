import React, { HTMLAttributes, ReactNode } from 'react'

export interface ModalContentPropsType {
  children: JSX.Element
  closeModal: () => void
  closeIcon?: ReactNode
  className?: string
}

const ModalContent = ({ children, closeModal, closeIcon, className }: ModalContentPropsType): JSX.Element => {
  return (
    <div className={className}>
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