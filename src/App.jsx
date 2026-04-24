import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './assets/nav';
import Home from './assets/home';
import Skill from './assets/skill'
import Froject from './assets/project'
import Contacts from './assets/contacts'
import './App.css';

function App() { 
  return (
    <div className="container">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/Portfolio' element ={<Home />} />
          <Route path = "/" element = {<Home />} />
          <Route path = '/skill' element = {<Skill />} />
          <Route path = '/project' element = {<Froject />} />
          <Route path = '/contacts' element = {<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
