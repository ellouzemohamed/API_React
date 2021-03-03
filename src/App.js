import './App.css';
import Users from './Components/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="conatiner-fluid">
    <BrowserRouter>
    <NavBar/>
    <Route exact path='/' component={Users}/>
    <Route exact path='/users/:id' component={Profile}/>
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;