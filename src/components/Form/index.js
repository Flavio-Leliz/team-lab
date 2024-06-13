import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextInput from '../TextInput'
import './Form.css'

const Form = ({
  addCollaborator,
  teams,
  addNewTeam,
  color
}) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamColor, setTeamColor] = useState('')

  const onSave = (event) => {
    event.preventDefault()
    addCollaborator({
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
    <section className='form-container'>
      <form
        className='form'
        onSubmit={onSave}
      >
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
          itens={teams}
          required={true}
          selectValue={team}
          onChanger={selectValue => setTeam(selectValue)}
        />

        <Button>
          Criar Card
        </Button>
      </form>

      <form
        className='form'
        onSubmit={event => {
          event.preventDefault()
          addNewTeam({ name: teamName, color: teamColor })
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>

        <TextInput
          label='Nome'
          placeholder='Digite o nome do time'
          required={true}
          inputValue={teamName}
          onChanger={selectValue => setTeamName(selectValue)}
        />
        <TextInput
          label='Cor'
          type='color'
          inputValue={color}
          placeholder='Digite a cor do time'
          onChanger={selectColor => setTeamColor(selectColor)}
        />

        <Button>
          Cirar Time
        </Button>
      </form>
    </section >
  )
}

export default Form