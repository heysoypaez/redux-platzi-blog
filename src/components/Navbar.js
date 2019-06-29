
import React, {useState} from "react";

import "./styles/Navbar.css";

import {Link} from "react-router-dom"

import iconMenu from "../icons/icon-menu.svg";


const IconMenu = (props) => {


  return(

     <figure onClick={props.onClick}>
       <img src={iconMenu} alt="Icon Menu" />
     </figure>
  )
}

function Navbar(props) {
	
  const [visible, setVisible] = useState(false)

  if(!visible) {
    return (
      <header className="Navbar hidden">

      <IconMenu onClick={() => setVisible(!visible)} />

      </header>
    )
  }

	return(

	   <header className="Navbar visible">

        <div className="container">

           <IconMenu onClick={() => setVisible(!visible)} />

            <section className="logo">
              <Link to="/">
                <h1>Redux Blog</h1>
              </Link>
            </section>

            <nav className="menu">
              <ul>
            
              <li>
                <Link to="/tareas">
                  Tareas
                </Link>
              </li>
                
              <li> 
                <Link to="/usuarios">
                  Usuarios
                </Link>
              </li>

              </ul>
            </nav>
        </div>
     </header>
	)


}

export default Navbar;


