import React, { useContext } from 'react'
import { DisplayContext } from '../contexts'

interface Props {
  name: string
}

export const SelectButton: React.FC<Props> = ({ name }: Props) => {
  const { selectDisplay } = useContext(DisplayContext)

  return <button onClick={selectDisplay}>Select Display {name}</button>
}

export const UnselectButton: React.FC<Props> = ({ name }: Props) => {
  const { unselectDisplay } = useContext(DisplayContext)

  return <button onClick={unselectDisplay}>Unselect Display {name}</button>
}
