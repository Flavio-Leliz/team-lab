import { useState } from 'react';
import Bannner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#52C278',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ])

  // const collaboratorProps = [
  //   {
  //     id: uuidv4(),
  //     name: ''
  //     job: ''
  //     image: ''
  //     team: teams[0].name
  //   }
  // ]

  const [collaborators, setCollaborators] = useState([])

  const handleOnDelete = (id) => {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }

  const handleChangeColor = (color, id) => {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
      return team
    }))
  }

  const handleAddNewTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuidv4() }])
  }

  return (
    <div className="App">
      <Bannner />
      <Form
        teams={teams.map(team => team.name)}
        addCollaborator={collaborator => setCollaborators([...collaborators, collaborator])}
        addNewTeam={handleAddNewTeam}
      />
      <section className='teams'>
        <h1>Times</h1>
        {teams.map((team) => {
          return (
            <Team
              key={team.id}
              team={team}
              color={team.color}
              secondaryColor={team.secondaryColor}
              collaborators={collaborators.filter((collaborator) => collaborator.team === team.name)}
              onDelete={handleOnDelete}
              changeColor={handleChangeColor}
            />
          )
        })}
      </section>

      <Footer />

    </div>
  );
}

export default App;
