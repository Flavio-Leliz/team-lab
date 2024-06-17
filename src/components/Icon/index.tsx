import { IconType } from 'react-icons'
import './Icons.css'

interface IconProps {
  Icon: IconType
  label: string
}

const Icons = ({
  Icon,
  label
}: IconProps) => {
  return (
    <div >
      <Icon
        className='icon'
        title={label}
      />
    </div>
  )
}

export default Icons