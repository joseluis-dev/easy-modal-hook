import React, { ReactNode } from 'react'

export interface ModalContentPropsType {
  children: JSX.Element
  close: () => void
  closeIcon?: ReactNode
}

const ModalContent = ({ children, close, closeIcon }: ModalContentPropsType): JSX.Element => {
  return (
    <div onClick={(e) => { e.stopPropagation() }}>
      <div>
        {Boolean(closeIcon)
          ? <button onClick={close}>
              {closeIcon}
            </button>
          : <button onClick={close}>
              Close
            </button>}
        {children}
      </div>
    </div>
  )
}

export default ModalContent