/* eslint-disable react/jsx-no-undef */
import './App.css';
//import LandingScreen from './Component/LandingScreen';
import Login from './login';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar title="Travelgram.com" />
     <BrowserRouter>
      <Route path="/login" exact component={Login} />
      {/* <Route path="/" exact component={LandingScreen}/> */}
      </BrowserRouter>
      </div>    
  );

}

export default App;
