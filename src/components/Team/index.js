import hexToRgba from 'hex-to-rgba'
import Collaborator from '../Collaborator'
import './Team.css'

const Team = ({
  changeColor,
  team,
  color,
  collaborators,
  onDelete,
}) => {
  return (
    collaborators.length > 0 &&
    <section
      className='team'
      style={{ backgroundColor: hexToRgba(team.color, '0.6') }}
    >
      <input
        type='color'
        value={color}
        className='input-color'
        onChange={(event) => changeColor(event.target.value, team.id)}
      />
      <h3
        style={{ borderColor: color }}
      >
        {team.name}
      </h3>

      <div className='collaborators'>
        {collaborators.map((collaborator) => {
          return (
            < Collaborator
              key={collaborator.name}
              backgroundColor={color}
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