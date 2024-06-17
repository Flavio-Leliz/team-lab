import './Team.css'
import hexToRgba from 'hex-to-rgba'

import { ICollaborator } from '../../shared/interfaces/ICollaborator'
import { ITeam } from '../../shared/interfaces/ITeam'
import Collaborator from '../Collaborator'

interface TeamProps {
  changeColor: (color: string, id: string) => void
  team: ITeam
  collaborators: ICollaborator[]
  onDelete: (id: string) => void
}

const Team = ({
  changeColor,
  team,
  collaborators,
  onDelete,
}: TeamProps) => {
  return (
    collaborators.length > 0 &&
    <section
      className='team'
      style={{ backgroundColor: hexToRgba(team.color, '0.6') }}
    >
      <input
        type='color'
        value={team.color}
        className='input-color'
        onChange={(event) => changeColor(event.target.value, team.id)}
      />
      <h3
        style={{ borderColor: team.color }}
      >
        {team.name}
      </h3>

      <div className='collaborators'>
        {collaborators.map((collaborator) => {
          return (
            <Collaborator
              key={collaborator.id}
              backgroundColor={team.color}
              collaborator={collaborator}
              onDelete={onDelete}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Team