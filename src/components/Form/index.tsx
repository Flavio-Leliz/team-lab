import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextInput from '../TextInput'
import './Form.css'
import { ICollaborator } from '../../shared/interfaces/ICollaborator'
import { ITeam } from '../../shared/interfaces/ITeam'
import { v4 as uuidv4 } from 'uuid'

interface FormProps {
  addCollaborator: (collaborator: ICollaborator) => void
  teams: ITeam[]
  addNewTeam: (team: ITeam) => void
}

const Form = ({
  addCollaborator,
  teams,
  addNewTeam,
}: FormProps) => {
  // refatorar esses useState para um []
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamColor, setTeamColor] = useState('')

  const onSaveCollaborator = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addCollaborator({
      id: uuidv4(),
      image,
      job,
      team,
      name
    })
    setName('')
    setJob('')
    setImage('')
    setTeam('')
  }

  const onSaveTeam = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addNewTeam({
      id: uuidv4(),
      name: teamName,
      color: teamColor,
    })
    setTeamName('')
    setTeamColor('')
  }

  return (
    <section className='form-container'>
      <form
        className='form'
        onSubmit={onSaveCollaborator}
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
          teams={teams}
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
        onSubmit={onSaveTeam}
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
          required={true}
          label='Cor'
          type='color'
          inputValue={teamColor}
          placeholder='Digite a cor do time'
          onChanger={selectColor => setTeamColor(selectColor)}
        />

        <Button>
          Criar Time
        </Button>
      </form>
    </section >
  )
}

export default Form