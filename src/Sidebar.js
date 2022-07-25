import React from 'react'
import './Sidebar.css'
import PersonIcon from '@material-ui/icons/Person';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Avatar } from '@material-ui/core';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem=(topic)=>(
        <div className="sidebar_recentitem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className='sidebar'>
          <div className='sidebar_top'>
              <img src="data:image/jpeg;base64,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" alt="" />
              <PersonIcon />
              <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
              <h2>{user.displayName}</h2>
              <h4>{user.email}</h4>  
          </div>
          
          <div className="sidebar_stats">
              <div className="sidebar_stat">
                  <p>who viewed you</p>
                  <p className="sidebar_statNumber">
                      2,543
                  </p><br></br>
                  <p>views on post</p>
                  <p className="sidebar_statNumber">
                      2,448
                  </p>
              </div>
          </div>
          <div className="sidebar_bottom">
              <p>Recent</p>
              {recentItem("react.js")}
              {recentItem("programming")}
              {recentItem("softwaare")}
              {recentItem("designer")}
              {recentItem("developer")}

          </div>
        </div>
    )
}

export default Sidebar
