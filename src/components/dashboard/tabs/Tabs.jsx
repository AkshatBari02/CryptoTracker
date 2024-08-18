import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import './tabs.css';
import Grid from '../grid/Grid';
import List from '../list/List';

export default function Tabs({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const theme = createTheme({
    palette:{
      primary:{
        main:"#3a80e9",
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant='fullWidth'>
            <Tab label="Grid" value="grid" className='tabs'/>
            <Tab label="List" value="list" className='tabs'/>
          </TabList>
        <TabPanel value="grid">
          <div className='grid-flex'>
            {
              coins.map((coin,i)=>{
                return (
                  <Grid coin={coin} key={i}/>
                )
              })
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
        <table className='list-table'>
            {
              coins.map((coin,i)=>{
                return (
                  <List coin={coin} key={i}/>
                )
              })
            }
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
