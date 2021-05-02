import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/layouts/NavBar';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/about" component = {About} />
          <Route exact path = "/contact" component = {Contact} />
          <Route exact path = "/users/add" component = {AddUser} />
          <Route exact path = "/users/edit/:id" component = {EditUser} />
          <Route exact path = "/users/:id" component = {User} />


          <Route component = {NotFound} />
          
        </Switch>      
      </Router>
    </>
  );
}

export default App;
