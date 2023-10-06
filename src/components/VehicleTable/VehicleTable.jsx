import React from "react";
import "./VehicleTable.css";

const VeichleTable = ({ vehicles }) => {

  return (
    
    <table>
      <thead>
        <tr>
          <th>Märke</th>
          <th>Model</th>
          <th>Typ</th>
          <th>Registreringsnummer</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map(
          (
            vehicle //mappa igenom listan med fordon
          ) => (
            <tr>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.registrationNumber}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default VeichleTable;
