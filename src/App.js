import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import userService from './utils/userService';
import SignupPage from './pages/SignupPage/SignupPage';



///////////////// AUTH




//////////////////

class App extends Component {
  constructor() {
    super();
    this.state = {
    // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  render() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      </div>
      
    </Router>
  );
   }
}

export default App;
