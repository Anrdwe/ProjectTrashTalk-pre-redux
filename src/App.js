import React from 'react';
//components
import Nav from './components/Nav';
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
import Axios from 'axios';

//The base Url for Axios is the firebase API
Axios.defaults.baseURL = 'https://us-east1-trashtalk-245817.cloudfunctions.net/api'

class App extends React.Component {
  
  render() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/board" component={Board} />
          <Route path="/about" component={About} />
          {//if the user is not authenticated the '/post' route will go to '/login'
          }
          <Route path="/post" component={Post}/>
          {//if the user is already authenticated the '/login' and '/signup' route will go to '/board'
          } 
          <Route path="/login" component={Login}/>
          {//<AuthRoute path="/signup" component={Signup} authenticated={this.state.authenticated}/>
          }
          <Route path="/signup" component={Signup}/>
        </Switch>
      </div>
    </Router >
  );
} 
}

export default App
