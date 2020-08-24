import React from 'react';
import './App.css';
import './Header'
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route path='/search/:searchTerm'>
            <div className='app_page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path='/'>
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
