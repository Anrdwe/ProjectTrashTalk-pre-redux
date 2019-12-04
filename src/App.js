import React from 'react';
//components
import Nav from './components/Nav';
import AuthRoute from './util/AuthRoute';
import UnauthRoute from './util/UnauthRoute';
//pages
import About from './pages/About';
import Home from './pages/Home';
import Board from './pages/Board';
import Post from './pages/Post';
import Login from './pages/Login';
import Signup from './pages/Signup';
//redux, not here in this version

import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state =  {
      authenticated: false
    }
  }
  setAuth(props) {
    this.setState({authenticated: props})
  }
  componentDidMount() {
    const token = localStorage.FBIdToken;
    if(token) {
      //we have token, we want to decode it with jwt-decode, inside there is a expiration date
      //the exp value is in seconds and can be passed into date() to get the exact time the token expires
      const decodedToken = jwtDecode(token);
      if(decodedToken.exp * 1000 < Date.now()) {
        //if the token is expired, we redirect them to the login page
        this.setState({ authenticated: false })
        //window.location.href = '/login'
      } else {
        this.setState({ authenticated: false })
      }
    }
  }
  render() {
  return (
    //everything inside Provider will have access to store, which is our state
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/board" component={Board} />
          <Route path="/about" component={About} />
          {//if the user is not authenticated the '/post' route will go to '/login'
          } 
          <Route path="/post" component={Post} authenticated={this.state.authenticated}/>
          {//if the user is already authenticated the '/login' and '/signup' route will go to '/board'
          } 
          <AuthRoute path="/login" component={Login} authenticated={this.state.authenticated}/>
          <AuthRoute path="/signup" component={Signup} authenticated={this.state.authenticated}/>
        </Switch>
      </div>
    </Router >
  );
} 
}

export default App
