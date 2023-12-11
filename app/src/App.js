import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newproject';

import Container from './components/layout/container';

function App() {
  return (
      <Router>
        <ul>
          <Link to='/'>Home</Link >
          <Link to='/contact'>Contact</Link>
          <Link to='company'>Company</Link >
          <Link to='/newproject'>New Project</Link >
        </ul>

          <Container customClass='min-height'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/company' element={<Company />}/>
              <Route path='/newproject' element={<NewProject />}/>
            </Routes>
          </Container>

        <p>Footer</p>
      </Router>
  );
}

export default App;
