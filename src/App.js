import './App.css'
import Result from './modules/result/result';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './modules/home/home';
import About from './components/About';
//import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {
  return (
    <div className="App" >
    <Router>
      <Navbar />
      <div id="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/result" component={Result}/>
              <Route exact path="/about" component={About}/>
          </div>
    </Router>
    </div>
  );
}

export default App;
