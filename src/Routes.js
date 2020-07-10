import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import NotFound from './pages/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/blog' component={ BlogPage } />
        <Route exact path='/about' component={ AboutPage } />
        <Route exact path='/contact' component={ ContactPage } />
        {/* <Route component={ NotFound } /> */}
      </Switch>
    )
  }
}

export default Routes;
