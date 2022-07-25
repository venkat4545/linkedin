import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./HeaderOption.css";

function HeaderOption({avatar,Icon, title, onClick}) {
    const user= useSelector(selectUser);
    return(
        <div className="headerOption" onClick={onClick}>
            {Icon &&<Icon className='headerOption_icon' />}
           {avatar && <Avatar >{user?.email[0]}</Avatar>}
            <h4 className='headerOption_title'>{title}</h4>
        </div>
    );
}

export default HeaderOption;
