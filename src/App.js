import './App.css';
import Header from './components/Header/Header';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
   <div className="app">
     <Switch>

        <Route path="/dashboard">
           <Header/>
           <Dashboard/>
        </Route>

        <Route path="/product">
           <Header/>
        </Route>

        <Route path="/Contact">
           <Header/>
        </Route>

        <Route path="/About">
           <Header/>
        </Route>


        <Route path="/Help">
           <Header/>
        </Route>

        <Route path="/">
           <Header/>
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
