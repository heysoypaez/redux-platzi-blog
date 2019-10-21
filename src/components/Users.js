import React, { Component } from 'react';
import { connect } from "react-redux";
import * as usersAction from "../actions/usersAction.js";

 class Users extends Component {

  pushRows = () => (

    this.props.users.map( (user, index) => (

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
    this.props.getAll();
  }

  render() {

      console.log(this.props)

      return (
        <section className="Users">
  
          {
            (this.props.users.length === 0) ?
            <h2>Cargando...</h2>
            :  
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
          }
        </section>
      );
    }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps, usersAction )(Users);