import './App.css';
import VeichleTable from './components/VehicleTable/VehicleTable';
import VehicleForm from './components/VehicleForm/VehicleForm';

import {useEffect, useState} from 'react';

function App() {

  const [vehicles, setVehicles] = useState([]);


 //Här inuti useEffect vill vi göra ett anrop till vårat API
  useEffect (() => {

    fetch ("https://localhost:8000/vehicles")
    .then(resp => resp.json())
    .then(vehicles => setVehicles(vehicles))

  }, []);

  const onAdd = (vehicle) => {

    //Skicka fordon från formuläret till backend
    //adressen vi vill till
    //använda metoden post
    //header = Det som skickas är json
    //och så tar vi vårt fordon och gör om det till json
    fetch("https://localhost:8000/vehicles", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
  body: JSON.stringify(vehicle)
  }).then(resp => resp.json())
  .then(vehicle => setVehicles([...vehicles,vehicle]))

  }

  return (
    <div className="App">
    <h1>Wrent-A-Wreck</h1>
    {/* skicka ner callback-functionntill VehicleForm (alltså en referens) */}
    <VehicleForm onAdd={onAdd}/>
    <VeichleTable vehicles={vehicles}/>

    
    
    </div>
  );
}

export default App;
