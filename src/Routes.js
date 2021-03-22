import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import Offer from './components/Offer';

const Routes=()=> {
    return (
       <Router>
           <Route exact path="/" component={Home}/>
           <Route exact path="/offer" component={Offer}/>
       </Router>
    )
}

export default Routes
