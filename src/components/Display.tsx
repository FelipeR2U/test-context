import React, { useContext } from 'react'
import { DisplayContext } from '../contexts'

interface Props {
  name: string
}

const Display: React.FC<Props> = ({ name }: Props) => {
  const { isSelected } = useContext(DisplayContext)

  return isSelected ? (
    <div style={{ border: 'solid black' }}>Display {name} Selected</div>
  ) : (
    <div style={{ border: 'solid black' }}>Display {name} Unselected</div>
  )
}

export default Display
