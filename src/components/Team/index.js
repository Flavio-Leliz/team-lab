import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
  const secondaryColor = { backgroundColor: props.secondaryColor }
  const primaryColor = { backgroundColor: props.primaryColor, borderColor: props.primaryColor }

  return (
    props.collaborators.length > 0 &&
    <section
      className='team'
      style={secondaryColor}
    >
      <h3
        style={{ borderColor: primaryColor.borderColor }}
      >
        {props.teamName}
      </h3>

      <div className='collaborators'>
        {props.collaborators.map((collaborator) => {
          return (
            < Collaborator
              backgroundColor={primaryColor.backgroundColor}
              key={collaborator.name}
              name={collaborator.name}
              job={collaborator.job}
              image={collaborator.image}
            />

          )
        })}
      </div>
    </section>
  )
}

export default Team