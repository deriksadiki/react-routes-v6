import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from '../Components/Home/Home';


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
