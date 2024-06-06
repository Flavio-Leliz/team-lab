import './DropdownList.css'

const DropdownList = (props) => {
  const handleSelect = (event) => {
    props.onChanger(event.target.value)
  }

  return (
    <div className='dropdown-list'>
      <label>{props.label}</label>

      <select
        required={props.required}
        value={props.selectValue}
        onChange={handleSelect}
      >
        <option value=''></option>
        {props.itens.map(item => {
          return (
            <option key={item}>{item}</option>
          )
        })}
      </select>
    </div>
  )
}

export default DropdownList