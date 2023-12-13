import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import Projects from './components/pages/projects';
import NewProject from './components/pages/newproject';

import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';


import Container from './components/layout/container';

function App() {
  return (
      <Router>
        <NavBar />

          <Container customClass='min-height'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/projects' element={<Projects />}/>
              <Route path='/newproject' element={<NewProject />}/>
              <Route path='/company' element={<Company />}/>
            </Routes>
          </Container>
        <Footer />
      </Router>
  );
}

export default App;
