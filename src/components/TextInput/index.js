import './TextInput.css'

const TextInput = (props) => {

  const handleInput = (event) => {
    props.onChanger(event.target.value)
  }

  return (
    <div className='text-input'>
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.inputValue}
        onChange={handleInput}
      />
    </div>
  )
}

export default TextInput