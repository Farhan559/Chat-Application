import React from 'react'
import "./myStyle.css";
import logo from "../Images/logo.png";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function UsersGroups() {
  return (
    <div className='list-container'>
      <div className="ug-header">
        <img src={logo} alt='Logo' style={{height:"3rem",width:"3rem", borderRadius:"50px"}} />
        <p className="ug-title">Online Users</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <input placeholder='Search' className='search-box' />
      </div>
      <div className="ug-list">
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>

      </div>
    </div>
  )
}

export default UsersGroups
