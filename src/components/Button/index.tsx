import { ReactElement } from 'react'
import './Button.css'

interface BotaoProps {
  children?: string | ReactElement
}

const Button = ({ children }: BotaoProps) => {
  return (
    <button className='button'>
      {children}
    </button>
  )
}

export default Button