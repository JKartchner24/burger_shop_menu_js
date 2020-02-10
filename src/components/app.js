import React, { Component } from 'react';


export default class App extends Component {
	function myFunction() {
    	document.getElementById("burgerDropdown").classList.toggle("show");}
  render() {
    return (
	    	<div>
			    <div className="background">
			    	<div className='burger-heading'>
			    		<h1>Burger Menu</h1>
			   			<div className="buger-sub">
			    			Hello, and welcome to Jake's Burger Shop <br />
			    			Below are our options for food, feel free to take a look and order whatever you like.
			    		</div>
			    	</div>
			    	<div className='suggestion'>
			    		<p>Waitress/Waiter = "I suggest the Swiss Mushroom Burger"</p>
			    	</div>
			    </div>
			    <div className='content-wrapper'>
			   	<button onclick='myFunction' className="menu-content">Main Menu</button>
			    	<div id='burgerDropdown' className='dropdown-content'>
			    		<a href='#hamburger'>Ham Burger = $7.89</a>
			    		<a href='#cheeseburger'>Cheese Burger = $7.99</a>
			    		<a href='#baconburger'>Bacon Burger = $8.89</a>
			    		<a href='#baconcheeseburger'>Bacon Cheese Burger = $7.99</a>
			    		<a href='#bbqburger'>BBQ Burger = $9.99</a>
			    		<a href='#guacamoleburger'>Guacamole Burger = $10.30</a>
			    		<a href='#doubleburger'>Double Burger = $7.89</a>
			    		<a href='#doublecheeseburger'>Double Cheese Burger = $10.89</a>
			    		<a href='#chickenburger'>Chicken Burger = $11.79</a>
			    		<a href='#swissmushroomburger'>Swiss Mushroom Burger = $7.49</a>
			    	</div>
			    </div>
			    <div className='content-wrapper'>
			    	<button onclick='myFunction' className="menu-content">Sides Menu</button>
			    	<div id='sidedd' className='dropdown-content'>
			    		<li>Fries = $4.39</li>
			    		<li>Wings = $6.50</li>
			    	</div>
			    </div>
			    <div className='content-wrapper'>
			    	<button onclick='myFunction' className="menu-content">Drink Menu</button>
			    	<div id='drinkdd' className='dropdown-content'>
			    		<li>Water = Free</li>
			    		<li>Dr. Pepper = $1.99</li>
			    		<li>Mountain Dew = $1.99</li>
			    		<li>Sprit = $1.99</li>
			    		<li>Lemonaide = $1.99</li>
			    		<li>Strawberry Lemonaide = $1.99</li>
			    		<li>Coke = $1.99</li>
			    		<li>Diet Coke = $1.99</li>
			    	</div>
			    </div>
		    </div>
    );
  	}
}
