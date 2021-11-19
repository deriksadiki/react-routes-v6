import OnlineNav from "./OnlineNav";
import OfflineNav from "./OfflineNav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'


const NavbarLinks = () =>{
    const [loginState, setLoginState] = useState(true)
   
        return(
            <Router>
                {
                    loginState ?
                    <Routes>
                    <Route exact path="*" element={<O/>}/>
                    </Routes>
                :
                    <Routes>
                        <Route exact path="*" element={<OfflineNav/>}/> 
                    </Routes>
    }
            </Router>
        )
    }
    
    export default NavbarLinks;