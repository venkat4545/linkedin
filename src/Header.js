import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SuperviseorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const dispatch=useDispatch();
    const logoutofapp=()=>{
        dispatch(logout())
        auth.signOut();

    };
    
    return (

         
        <div className='header'>
            
            <div className= "header_left">
                
                
                <img src="data:image/jpeg;base64,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" alt="/"  />
                
                
                <div className="header_search">
                   <SearchIcon />
                    <input placeholder="search" type="text"/>

                  
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SuperviseorAccountIcon} title="my network" />
                <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
                <HeaderOption Icon={ChatIcon} title="messaging" />
                <HeaderOption Icon={NotificationIcon} title="Notifications" />
                <div className= "header_img">
                    
                <HeaderOption avatar={true} onClick={logoutofapp}  />

                
                <h6>me</h6>
                </div>
            </div>
        </div>
    )
}

export default Header
