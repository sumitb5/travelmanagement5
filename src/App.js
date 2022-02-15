import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
//import LandingScreen from './Component/LandingScreen';
import Login from './login';
import Navbar from './Component/Navbar';
import About from "./webpages/about";

function App() {
  return (
    <div className='App'>
      <Navbar title="Travelgram.com" />
      <BrowserRouter>
        <Route path='/login' exact component={Login} />
        <Route path='/about' exact component={About} />
      </BrowserRouter>
    </div>
  );

}

export default App;
