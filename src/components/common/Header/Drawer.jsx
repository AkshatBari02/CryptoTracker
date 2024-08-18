import React from 'react';
import Drawer from '@mui/material/Drawer';

import {useState} from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path)=>{
    return location.pathname === path ? 'active' : '';
  }

  return (
    <div>
      <IconButton onClick={()=>setOpen(true)}>
        <MenuRoundedIcon className='link'/>
      </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className="drawer-div">
              <Link to={'/'} className={`link ${isActive('/')}`}><p>Home</p></Link>
              <Link to={'/compare'} className={`link ${isActive('/compare')}`}><p>Compare</p></Link>
              <Link to={'/watchlist'} className={`link ${isActive('/watchlist')}`}><p>Watchlist</p></Link>
              <Link to={'/dashboard'} className={`link ${isActive('/dashboard')}`}><p>Dashboard</p></Link>
        </div>
          </Drawer>
    </div>
  );
}
