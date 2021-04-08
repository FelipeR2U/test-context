import React, { useContext } from 'react'
import { ModalContext } from '../contexts/Modal'

interface Props {
  name: string
}

export const OpenButton: React.FC<Props> = ({ name }: Props) => {
  const { openModal } = useContext(ModalContext)

  return <button onClick={openModal}>Open Modal {name}</button>
}

export const CloseButton: React.FC<Props> = ({ name }: Props) => {
  const { closeModal } = useContext(ModalContext)

  return <button onClick={closeModal}>Close Modal {name}</button>
}
