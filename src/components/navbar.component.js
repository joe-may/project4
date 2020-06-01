import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const nav = props.user ?
        <div>
            <Link to="/" className="home">Home</Link>
            <Link to="/create" className="nav-link">Create Exercise Log</Link>
            <Link to="/" className="nav-link">Exercises</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='' onClick={props.handleLogout}>Log out</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
            
        </div>
        :
        <div className="nav">
            <Link to="/create" className="nav-link">Create Exercise Log</Link>
            <Link to="/" className="nav-link">Exercises</Link>
            <Link to='/login'>Log in</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup'>Sign up</Link>
            <Link to='' onClick={props.handleLogout}>Log out</Link>
            
        </div>
    return (
        <div className='NavBar'>
            {nav}
        </div>
    )}
export default NavBar;