import React from 'react';
import "./App.css"

function App() {

  const pushRows = () => {

    return [

      <tr>
        <td>Daniel</td>
        <td>Heysoypaez@gmail.com</td>
        <td>
        <a href="http://heysoypaez.com">heysoypaez.com</a>
        </td>
      </tr>,
      <tr>
        <td>Paty</td>
        <td>paty@gmail.com</td>
        <td>
        <a href="http://patytime.com">patytime.com</a>
        </td>
      </tr>
    ]
  }

  return (
    <div className="App">
      <h1>Heysoypaez here</h1>

      <table>
        <thead>titulo
         <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
        </thead>

        <tbody>
          {pushRows()}
        </tbody>

      </table>
    </div>
  );
}

export default App;
