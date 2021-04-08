import React, { createContext, ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

interface DisplayContextData {
  isSelected: boolean
  selectDisplay: () => void
  unselectDisplay: () => void
  toggleDisplay: () => void
}

export const DisplayContext = createContext<DisplayContextData>({} as DisplayContextData)

export const DisplayProvider: React.FC<Props> = ({ children }: Props) => {
  const [isSelected, setIsSelected] = useState(false)

  const selectDisplay = () => {
    setIsSelected(true)
  }

  const unselectDisplay = () => {
    setIsSelected(false)
  }

  const toggleDisplay = () => {
    setIsSelected(!isSelected)
  }

  return (
    <DisplayContext.Provider
      value={{
        isSelected,
        selectDisplay,
        unselectDisplay,
        toggleDisplay
      }}
    >
      {children}
    </DisplayContext.Provider>
  )
}
