import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { Button, Info, Load,Main } from './Styles/styled';
function App() {
  const [person, setPerson] = useState(null);
  const [loading, setloading] = useState(true);
  const url = "https://api.randomuser.me/";

  useEffect(() => {
    fetch()
  }, [])
  
  const fetch = async() => {
    setloading(true);
    const response = await axios.get(url);
    const [item] = response.data.results; 
    setPerson(item);
    setloading(false);
  }
  return (
    <Main className="App">
      <h1>Fetching Data from API</h1>
      <Button onClick={fetch}>Fetch Data</Button>
      <Load className="loading">{loading ? <h1>Loading.....</h1> : 
      <Info className="details" key={person}>
        <p>🧍Name: {person.name.first} {person.name.last}</p>
        <p>👨Gender: {person.gender}</p>
        <p>📧Email: {person.email}</p>
        <p>📱Phone Number: {person.phone}</p>
      </Info>
    }
    </Load>
    </Main>
  );
}

export default App