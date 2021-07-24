import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
		  <h1>Hi Jack</h1>
		  <h2> Welcome Back to your Cat Pokedex </h2>
		  <hr />
		  <div className="links">
			  <NavLink to="/" className="link" activeClassName="active" exact>
				  View all Pokedex's Cats
        </NavLink>
		  </div>
		  <div className="links">
			  <NavLink to="/add" className="link" activeClassName="active">
				  Add a new Cat into Pokedex Collection
        </NavLink>
		  </div>
    </header>
  );
};

export default Header;
