import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/sections/AboutMe';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/" component={AboutMe} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;