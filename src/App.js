import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './app/pages/Home.page';
import Navigation from './app/components/navigation.component';

//import styles
import './assets/scss/style.scss'
import './assets/lib/flaticons/css/flaticon.css';
import './assets/lib/ionicons/css/ionicons.min.css';
import Footer from './app/components/footer.component';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
