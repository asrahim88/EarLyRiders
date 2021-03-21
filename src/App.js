import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: false,
    logInSuccess: false,
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="appBody">
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/destination'>
              <Destination></Destination>
            </Route>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <CreateAccount></CreateAccount>
            </Route>
            
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;
