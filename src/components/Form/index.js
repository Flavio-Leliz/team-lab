import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextInput from '../TextInput'
import './Form.css'

const Form = (props) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const onSave = (event) => {
    event.preventDefault()
    props.addCollaborator({
      name,
      job,
      image,
      team
    })
    setName('')
    setJob('')
    setImage('')
    setTeam('')
  }


  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <TextInput
          label="Nome"
          placeholder="Digite seu nome"
          required={true}
          inputValue={name}
          onChanger={inputValue => setName(inputValue)}
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo"
          required={true}
          inputValue={job}
          onChanger={inputValue => setJob(inputValue)}
        />
        <TextInput
          label="Imagem"
          placeholder="Informe o endereço da sua imagem"
          required={true}
          inputValue={image}
          onChanger={inputValue => setImage(inputValue)}
        />
        <DropdownList
          label='Time'
          itens={props.teams}
          required={true}
          selectValue={team}
          onChanger={selectValue => setTeam(selectValue)}
        />

        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Form