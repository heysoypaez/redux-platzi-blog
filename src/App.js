import React, {Component} from 'react';
import "./App.css"

class App extends Component {

  state = {

    users: [],
    loading: false,
    error: null
  }

  fetchUsers = async () => {

    try {

    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await users.json()

    this.setState({users: response })
    
    console.log(this.state)      
    } 
    catch(error) {

    }

  }

  pushRows = () => (

    this.state.users.map( (user) => (

      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
        <a href={`http://${user.link || user.website}`}>{user.link || user.website}</a>
        </td>
      </tr>
    ))
  )

  componentDidMount = () => {

    this.fetchUsers()
  }



  render() {
      return (
        <div className="App">
          <h1>Heysoypaez here</h1>
  
          <table>
            <thead>
             <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
            </thead>
  
            <tbody>
              {this.pushRows()}
            </tbody>
  
          </table>
        </div>
      );
    }
}

export default App;
