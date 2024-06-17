import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
// import { v4 as uuidv4 } from 'uuid'
import { ICollaborator } from './shared/interfaces/ICollaborator';
import { ITeam } from './shared/interfaces/ITeam';

function App() {

  // const teamProps = [
  //   {
  //     id: uuidv4(),
  //     name: 'Programação',
  //     color: '#52C278',
  //   }
  // ]

  // const collaboratorProps = [
  //   {
  //     id: uuidv4(),
  //     name: '',
  //     job: '',
  //     image: '',
  //     team: teams[0].name
  //   }
  // ]

  const [teams, setTeams] = useState<ITeam[]>([])
  const [collaborators, setCollaborators] = useState<ICollaborator[]>([])

  const handleOnDelete = (id: string) => {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }

  const handleChangeColor = (color: string, id: string) => {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
      return team
    }))
  }

  const handleAddCollaborator = (collaborator: ICollaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  const handleAddNewTeam = (newTeam: ITeam) => {
    setTeams([...teams, newTeam])
  }

  return (
    <div className="App">
      <Banner
        imageUrl='/assets/banner.png'
        alt='banner'
      />
      <Form
        teams={teams}
        addCollaborator={handleAddCollaborator}
        addNewTeam={handleAddNewTeam}
      />
      <section className='teams'>
        <h1>Times</h1>
        {teams.map((team) => {
          return (
            <Team
              key={team.id}
              team={team}
              collaborators={collaborators.filter((collaborator) => collaborator.team === team.name)}
              onDelete={handleOnDelete}
              changeColor={handleChangeColor}
            />
          )
        })}
      </section>

      <Footer
        github='https://github.com/Flavio-Leliz/'
        linkedin='https://www.linkedin.com/in/fl%C3%A1vio-leliz-a6329a238/'
        instagram='https://www.instagram.com/leliz.flavio/'
      />

    </div>
  );
}

export default App;
