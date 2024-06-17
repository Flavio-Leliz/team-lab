import { AiFillCloseCircle } from 'react-icons/ai'
import './Collaborator.css'
import { ICollaborator } from '../../shared/interfaces/ICollaborator'

interface CollaboratorProps {
  collaborator: ICollaborator
  backgroundColor: string
  onDelete: (id: string) => void
}

const Collaborator = ({
  collaborator,
  backgroundColor,
  onDelete
}: CollaboratorProps) => {

  return (
    < div className='collaborator' >
      <AiFillCloseCircle
        size={25}
        className='delete'
        onClick={() => onDelete(collaborator.id)}
      />

      <div className='header' style={{ backgroundColor: backgroundColor }}>
        <img src={collaborator.image} alt={collaborator.name} />
      </div>

      <div className='footer'>
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.job}</h5>
      </div>
    </div >
  )
}

export default Collaborator