import { ITeam } from '../../shared/interfaces/ITeam'
import './DropdownList.css'

interface DropdownListProps {
  onChanger: (color: string) => void
  label: string
  required: boolean
  selectValue: string
  teams: ITeam[]
}

const DropdownList = ({
  onChanger,
  label,
  required,
  selectValue,
  teams
}: DropdownListProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChanger(event.target.value)
  }

  return (
    <div className='dropdown-list'>
      <label>{label}</label>

      <select
        required={required}
        value={selectValue}
        onChange={handleSelect}
      >
        <option value=''></option>
        {teams.map(team => {
          return <option key={team.name}>{team.name}</option>
        })}
      </select>
    </div>
  )
}

export default DropdownList