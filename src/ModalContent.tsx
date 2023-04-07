import React from 'react'

export interface ModalContentPropsType {
  children: JSX.Element
  close: () => void
}

const ModalContent = ({ children, close }: ModalContentPropsType): JSX.Element => {
  return (
    <div onClick={(e) => { e.stopPropagation() }}>
      <div>
        <button onClick={close}>
          Close
        </button>
        {children}
      </div>
    </div>
  )
}

export default ModalContent