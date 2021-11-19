import React from 'react'
import './topbar.css'

/*Online Nav Bar*/
//Topbar Icons
import {NavLink} from 'react-router-dom'
import {CgCloud, CgHome} from "react-icons/cg";
import {CgUserlane} from "react-icons/cg";
import {CgBell} from "react-icons/cg";
import {CgToolbox} from "react-icons/cg";
import {CgLogOff} from "react-icons/cg";
function OnlineNav(props) {
    //Topbar navlinks Online
    return (
        <div>
            
            <div className="linksContainer">  
                    <NavLink to="/Home" activeStyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span><i><CgHome/>Home</i></span>
                    </NavLink>
                    <br></br>
                    <NavLink to="/Profile" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i ><CgUserlane/>Profile</i></span>
                    </NavLink>
                    <br></br>
                    <NavLink to="/Chat" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgBell/>Chats</i></span>
                    </NavLink>
                    <br></br>
                    <NavLink to="/Settings" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgToolbox />Settings</i></span>
                    </NavLink>
                    <br></br>
                    <NavLink to="/Weather" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgCloud />Weather</i></span>
                    </NavLink>
                    <br></br>
                    <NavLink to="/signin" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span className="signout"><i><CgLogOff />Log Out</i></span>
                    </NavLink>
                    </div>
        </div>
    )
}

export default OnlineNav
