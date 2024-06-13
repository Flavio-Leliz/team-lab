import './TextInput.css'

const TextInput = ({
  label,
  placeholder,
  required,
  inputValue,
  type = 'text',
  onChanger
}) => {

  return (
    <div className={`text text-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={inputValue}
        onChange={event => onChanger(event.target.value)}
      />
    </div>
  )
}

export default TextInput