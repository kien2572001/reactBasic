import logo from './logo.svg';
import './App.scss';
import ListToDo from './Example/ListToDo'
import NavApp from './Nav/NavApp';
import Home from './Example/Home';
import ListUser from './Example/Users/ListUser';
import DetailUser from './Example/Users/DetailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      
        <header className="App-header">
          <NavApp/>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ListToDo/> */}
          <Switch>
            <Route exact path="/" exact="true">
              <Home />
            </Route>

            <Route path="/todo">
              <ListToDo/>
            </Route>

            <Route path="/about">
              
            </Route>

            <Route path="/users" exact>
              <ListUser/>
            </Route>

            <Route path="/users/:id">
              <DetailUser/>
            </Route>

          </Switch>
        </header>
      
      </div>
    </Router>
  );
}

export default App;
