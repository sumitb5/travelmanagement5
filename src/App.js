import { BrowserRouter, Route} from "react-router-dom";g
import './App.css';
//import LandingScreen from './Component/LandingScreen';
import Login from './login';
import Navbar from './Component/Navbar';
import About from "./webpages/about";
import Contact from "./webpages/contact";
import Home from "./webpages/home";

function App() {
  return (
    <div className='App'>
      <Navbar title="Travelgram.com" />
      <BrowserRouter>
        <Route path='/login' exact component={Login} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/home' exact component={Home} />
      </BrowserRouter>
    </div>
  );

}

export default App;
