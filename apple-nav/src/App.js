import React, { useState } from 'react';
import dummyData from './dummydata';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav'
import Home from './components/Home';
import './App.css';
import { Route, Switch, useParams } from 'react-router-dom';

const App = () => {
  const [darkMode, updateMode] = useState(false);

  return (
    <div className="App">
      <NavWrapper darkMode={darkMode}/>
      <Switch>
      {dummyData.map(subnav => {
        return (
          <Route path={subnav.path}><SubNav updateMode={updateMode} subnav={subnav}/></Route>
        )
      })}
      </Switch>
    </div>
  );
}

export default App;
