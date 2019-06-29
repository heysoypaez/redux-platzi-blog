import React, { Component } from 'react';
import { connect } from "react-redux";
import * as usersAction from "../actions/usersAction.js";

 class Users extends Component {

/*
  props = {

    users: [],
    loading: false,
    error: null
  }
*/


  fetchUsers =  async () => {


    try {

    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await users.json()

    this.setState({users: response })
    
    } 
    catch(error) {

    }
  }

  pushRows = () => (

    this.props.users.map( (user) => (

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

    //this.fetchUsers()
  }



  render() {

      console.log(this.props)

      return (
        <section className="Users">
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
        </section>
      );
    }
}

const mapStateToProps = (reducers) => {

  return reducers.usersReducer;

}

export default connect(mapStateToProps, usersAction )(Users);


