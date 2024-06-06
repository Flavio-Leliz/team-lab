import './Collaborator.css'

const Collaborator = ({ name, image, job, backgroundColor }) => {
  return (
    <div className='collaborator'>
      <div className='header' style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>

      <div className='footer'>
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>

    </div>
  )
}

export default Collaborator