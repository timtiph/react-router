import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Developpement from './Components/Services/Developpement';
import Cybersecurite from './Components/Services/Cybersecurite';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Profile/:id" element={<Profile></Profile>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/services" element={<Services></Services>}>
          <Route path="/services/developpement" element={<Developpement></Developpement>}> </Route>
          <Route path="/services/cybersecurite" element={<Cybersecurite></Cybersecurite>}> </Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>


      </Routes>
    </div>
  );
}

export default App;
