import React from 'react';
import ReactDOM from 'react-dom';
import './mysass.scss';
import Car from './App.js';

//const myfirstelement = <h1>Hello React! Started react learning</h1>
/*function Car() {
  return <h2>Hi, I am also a Car!</h2>;
}*/
/*class Car extends React.Component 
{
  constructor() 
  {
    super();
    this.state = {color: "red",price:"20000"};
	this.engine = {number:"456466454"};
  }
  
  render() 
  {
    return <h2>I am a {this.state.color} Car!.price is {this.state.price}. Car engine no is  {this.engine.number}</h2>;
  }
}*/

/*class Car extends React.Component 
{
  render() 
  {
    return <h2>I am a wqdsqw!</h2>
  }
}

class Break extends React.Component 
{
  render() 
  {
    return <h2>I am a break! {this.props.brand}</h2>
  }
}

class Garage extends React.Component 
{
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car/>
	  <Break brand="Ford" />
      </div>
    );
  }
}
*/
//const myelement = <Car brand="Ford" />;

//ReactDOM.render(<Garage />, document.getElementById('root'));

//ReactDOM.render(<Car />, document.getElementById('footer'));


/*class Header extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  
 /* static getDerivedStateFromProps(props, state) 
  {
    return {favoritecolor: props.favcol };
  }*/
  
  /*componentDidMount() 
  {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() 
  {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}
*/


/*class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler} style={{backgroundColor: "lightblue"}}>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}
*/
/*
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
      </div>
    );
  
 
}
}

import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'   
import App from '/App';  
import About from '/about'  
import Contact from '/contact'  
  
const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <Route path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
    </div>  
  </Router>  
)  
*/
ReactDOM.render(<Car />, document.getElementById('root'));
