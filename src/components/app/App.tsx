import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
//UI
import './App.scss'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../theme/MaterialTheme'
//Components 
import Menu from '../menu/Menu'
import Footer from '../footer/Footer'

import GeneralPage from '../general page/GeneralPage'
import Game from '../game/Game'


function App() {
  return (<ThemeProvider theme={theme}>
    <Menu />
    <div className="app-canvas">
      <Router >
        <Switch>
          <Route exact path="/" component={GeneralPage} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Router>
    </div>
    <Footer />
  </ThemeProvider>
  );
}

export default App;