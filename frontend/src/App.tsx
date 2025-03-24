import './App.css';
import data from './CollegeBasketballTeams.json'; // Ensure correct import path

function Welcome() {
  return <h1>Welcome to March Madness</h1>;
}

function Card({ school, name, city, state }: { school: string; name: string; city: string; state: string}) {
  return (
    <>
      <h2>{school}</h2>
      <h3>Mascot Name: {name}</h3>
      <h3>Location: {city}, {state}</h3>
    </>
  );
}

function TeamList() {
  const teams = data.teams; // Access the "teams" key inside JSON
  console.log("Loaded Teams:", teams); // Debugging log

  return (
    <>
      {teams && teams.length > 0 ? (
        teams.map((singleTeam, index) => (
          <Card key={index} {...singleTeam} />
        ))
      ) : (
        <p>No teams found.</p>
      )}
    </>
  );
}


function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
