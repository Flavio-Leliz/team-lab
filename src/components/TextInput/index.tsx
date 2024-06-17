import './TextInput.css'

interface TextInputProps {
  label: string
  placeholder: string
  required?: boolean
  inputValue: string
  type?: string
  onChanger: (value: string) => void
}

const TextInput = ({
  label,
  placeholder,
  required = false,
  inputValue,
  type = 'text',
  onChanger
}: TextInputProps) => {

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