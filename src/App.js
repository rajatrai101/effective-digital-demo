import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBar from './Navbar';
import GalleryView from './GalleryView';
import './App.scss';


 const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar/>
          <Switch>
            <Route path="/" component={GalleryView}  />
            <Route path="/animals" component={GalleryView}  />
            <Route path="/fruitveg" component={GalleryView}/> />
          </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
