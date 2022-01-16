
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Components/About';
import Features from './Components/Features';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Router>
         <div className="App">
               <Navbar/>
                <div>
                <Switch>

          <Route exact path="/"><Home/></Route>
          <Route exact path="/form"><Form/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/features"><Features/></Route>
          <Route exact path="/contact"><Contact/></Route>

        </Switch>
                </div>
              </div>
    </Router>
   
              </>
  );
}

export default App;
