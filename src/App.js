import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

//import styles
import './assets/scss/style.scss'
import './assets/lib/flaticons/css/flaticon.css';
import './assets/lib/ionicons/css/ionicons.min.css';

import Home from './app/pages/Home.page';
import About from './app/pages/About.page';
import Gallery from './app/pages/Gallery.page';
import Navigation from './app/components/navigation.component';
import Footer from './app/components/footer.component';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        {/* <Route component={ErrorPage} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
