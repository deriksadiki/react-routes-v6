import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Profile from "../../../../my-chat-app/src/pages/profile/profile";

function NavBarRoutes() {
    return (
        <div>
            

<Router>
        <Switch>
        <Route path="/form" exact component={Forms}>
            <Forms/>
          </Route>
          <Route path="/signin" exact component={Login}>
            <Login/>
          </Route>

            <Route path="/home" exact component={Home}>
            <Home/>
          </Route>
          <Route path="/search" exact component={Search}>
            <Search/>
          </Route>
           <Route path="/Profile" exact component={Profile}>
            <Profile/>
          </Route>
          <Route path="/chat" exact component={Chat}>
            <Chat/>
          </Route>
          <Route path="/messages" exact component={Messages}>
            <Messages/>
          </Route>
          <Route path="/videocall" exact component={Videocall}>
            <Videocall/>
          </Route>
          <Route path="/weather" exact component={Weather}>
            <Weather/>
          </Route>
        </Switch>
    </Router>
        </div>
    )
}

export default NavBarRoutes
