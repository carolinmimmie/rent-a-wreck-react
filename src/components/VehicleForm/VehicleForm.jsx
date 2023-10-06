import React from "react";
import "./VehicleForm.css";
import { useState } from "react";

const VehicleForm = ( {onAdd}) => {
  //State variabel innheåller alla olika fält i formuläret
  const [form, setForm] = useState({
    make: "",// tomma fält som syns i våra input-fält
    model: "",
    type: "",
    registrationNumber: "",
  });

  //När onSubmit inträffar kommer den här funktionen anropas
  //då kommer eventet som inträffade skickas in i funktionen
  //och då anropar vi preventDeafult för att sidan inte ska laddas om v
  //gång vi trycker på knappen.
  const handleSubmit = (event) => {
    event.preventDefault();

    // skapar ett nytt objekt 
    const vehicle = { ...form, type: parseInt(form.type)};

    onAdd(vehicle)

    console.log(vehicle);
  }

  return (
    //la till ett attribut onsubmit och koppla in en referens till en funktion
    <form onSubmit = {handleSubmit}>
      <label> Märke </label>
      <input 
      type="text" 
      name="make" 
      value={form.make}
      onChange = {event => setForm ({//Gör så att vi kan skriva i våra input-fältet
        ...form,
        make: event.target.value // hämta upp värdet - value
      })}
      />

      <label> Modell </label>
      <input 
      type="text" 
      name="model" 
      value={form.model} 
      onChange = {event => 
        setForm ({//Gör så att vi kan skriva i våra input-fältet
        ...form,
        model: event.target.value // hämta upp värdet - value
      })}
      
      />

      <label> Typ </label>
      <input 
      type="text"
       name="type" 
       value={form.type}
       onChange = {event => 
        setForm ({//Gör så att vi kan skriva i våra input-fältet
        ...form,
        type: event.target.value // hämta upp värdet - value
      })}
       />

      <label> Registreringsnummer </label>
      <input
       type="text"
        name="registrationNumber" 
        value={form.registrationNumber}
        onChange = {event => 
            setForm ({//Gör så att vi kan skriva i våra input-fältet
            ...form,
            registrationNumber: event.target.value // hämta upp värdet - value
          })}
        
        
        
        />
      <button>Lägg till</button>
    </form>
  );
};

export default VehicleForm;
