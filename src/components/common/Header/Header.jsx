import React from 'react';
import './Header.css';
import AnchorTemporaryDrawer from './Drawer';
import Button from '../Button/Button';
import { Link, useLocation } from 'react-router-dom';
import logo from './../../../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const isActive = (path)=>{
    return location.pathname === path ? 'active' : '';
  }
  return (
    <div className='navbar'>
        <h1 className='logo'>
            <img src={logo} alt="LOGO" width={40} height={40}/>
            CryptoTracker
        </h1>
        <div className="links">
            <Link to={'/'} className={`link ${isActive('/')}`}><p>Home</p></Link>
            <Link to={'/compare'} className={`link ${isActive('/compare')}`}><p>Compare</p></Link>
            <Link to={'/watchlist'} className={`link ${isActive('/watchlist')}`}><p>Watchlist</p></Link>
            <Link to='/dashboard' className={`link ${isActive('/dashboard')}`}><p><Button text={"Dashboard"} outlined={false} onClick={()=>console.log("Btn Clicked")}/></p></Link>
        </div>
        <div className="mobile-drawer">
            <AnchorTemporaryDrawer/>
        </div>
    </div>
  )
}

export default Header