import React, { createContext, ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

interface ModalContextData {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

export const ModalContext = createContext<ModalContextData>({} as ModalContextData)

export const ModalProvider: React.FC<Props> = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        toggleModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
