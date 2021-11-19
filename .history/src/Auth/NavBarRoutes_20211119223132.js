import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

<Router>
      <Topbar/>
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