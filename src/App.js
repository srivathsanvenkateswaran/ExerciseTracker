import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/navbar.component'
import ExerciseList from './components/exercise-list.component'
import EditExercise from './components/edit-exercise.component'
import CreateExercise from './components/create-exercise.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
    <Router>
      <div className='container'>
        <NavBar/>
        <br/>
        <Routes>
          <Route path='/' exact Component={ExerciseList}/>
          <Route path='/edit/:id' Component={EditExercise}/>
          <Route path='/create' Component={CreateExercise}/>
          <Route path='/user' Component={CreateUser}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
