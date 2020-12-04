
import React, { useContext } from "react"
import { NavLink } from "react-router-dom"


function NavBar() {

  return (
    <div className="header">
      <h2>Microblog</h2>
      <h4>Get in the Rithm of blogging!</h4>
        <NavLink exact to="/">Blog </NavLink>
        <NavLink exact to="/new">Add a new post</NavLink>
    </div>
  );
}

export default NavBar;