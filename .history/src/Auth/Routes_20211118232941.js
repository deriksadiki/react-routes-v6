
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


//components
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Profile from '../Components/Profile/Profile';
import SIgnup from '../Components/SIgnup/SIgnup';


const AuthRoutes = () =>{
    const [loginState, setLoginState] = useState(false)
    return(
        
        <Router>
            {
                loginState ?
                <Routes>
                <Route exact path="*" element={<Home/>}/>
                <Route exact path="/Home" element={<Home/>}/>
                <Route exact path="/Profile" element={<Profile/>}/>
            </Routes>
            :
                <Routes>
                    <Route exact path="*" element={<Login/>}/>
                    <Route exact path="/Signup" element={<SIgnup/>}/>
                    <Route exact path="/Login" element={<SIgnup/>}/>
                </Routes>
}
        </Router>
    )
}

export default AuthRoutes;
    