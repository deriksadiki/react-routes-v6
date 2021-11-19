import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from '../Components/Home/Home';
import Profile from '../Components/Profile/Profile';

function NavBarRoutes() {
    return (
        <div>
            

<Router>
        <Switch>
            <Route path="/home" exact component={Home}>
            <Home/>
          </Route>
         
           <Route path="/Profile" exact component={Profile}>
            <Profile/>
          </Route>
        </Switch>
    </Router>
        </div>
    )
}

export default NavBarRoutes
