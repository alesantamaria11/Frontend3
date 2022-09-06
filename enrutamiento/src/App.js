import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Navbar</h1>
        <hr/>
        <Switch>
          <Route path='/contacto'>
            Esta es la página de contacto
          </Route>
          <Route path='/nosotros'>
            Esta es la página de nosotros
          </Route>
          <Route path='/'>
            Esta es la página de inicio
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
