import React, { useContext } from 'react'
import { ModalContext } from '../contexts/Modal'

interface Props {
  name: string
}

const Modal: React.FC<Props> = ({ name }: Props) => {
  const { isOpen } = useContext(ModalContext)

  return isOpen ? (
    <div style={{ border: 'solid black' }}>Modal {name} open</div>
  ) : (
    <div style={{ border: 'solid black' }}>Modal {name} closed</div>
  )
}

export default Modal
