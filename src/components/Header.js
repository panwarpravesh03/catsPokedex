import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Images } from 'react-native';

var time = new Date().getTime;
var greetMsg = '';
if(time>'00:00' && time<'12:00') 
	greetMsg='Good Morning';
else if(time>'12:00' && time<'16:00') 
	greetMsg='Good Afternoon';
else
	greetMsg='Good Evening';

const Header = () => {
  return (
		/* <!-- <Image source ={ require('../images/pokedexImg.png')} style={imageContainer}/> -->*/
    <header>
		  <h1>{greetMsg} Jack</h1>
		  <h2> Welcome Back to your Cat Pokedex Dashboard</h2>
		  <hr />
		<div class="verticalDashboard">
		  	<h4> What do you want to me to do now?</h4>
		  	<div className="links">									
					 <div><NavLink to="/" className="link" activeClassName="active" exact className="textForVerticalDiv">View all Pokedex's Cats</NavLink></div>
					<hr/>
		 	  		 <div><NavLink to="/add" className="link" activeClassName="active" className="textForVerticalDiv">Add a new Cat into Pokedex Collection</NavLink></div>				
		  </div>
	   </div>
    </header>
  );
};

export default Header;
