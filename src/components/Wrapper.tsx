import React from 'react'
import { ModalProvider } from '../contexts/Modal'
import { CloseButton, OpenButton } from './Button'
import Modal from './Modal'

interface Props {
  name: string
}

const Wrapper: React.FC<Props> = ({ name }: Props) => {
  return (
    <ModalProvider>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <OpenButton name={name}></OpenButton>
        <CloseButton name={name}></CloseButton>
        <Modal name={name}></Modal>
      </div>
    </ModalProvider>
  )
}

export default Wrapper
