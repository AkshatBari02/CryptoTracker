import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SelectDays from '../../coin/selectDays/SelectDays';

const SelectCoins = ({allCoins,
    crypto1,
    crypto2,
    onCoinChange,
    days,
    handleDaysChange}) => {


    const styles = {
        height: "2.5rem",
        color:"var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover":{
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
      };


  return (
    <div className='flex justify-start items-center gap-6 mx-6 my-0'>
            <div className="flex justify-start items-center gap-4">
                <p>Crypto 1:</p>
                <Select
                sx={styles}
                label = "Crypto 1"
                value={crypto1}
                onChange={(event)=>onCoinChange(event,false)}
                >
                    {
                        allCoins.filter((item)=> item.id != crypto2).map((coin,i)=>{
                            return <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>
                        })
                    }
                
                </Select>
            </div>
            <div className="flex justify-start items-center gap-4">
                <p>Crypto 2:</p>
                <Select
                sx={styles}
                label = "Crypto 2"
                value={crypto2}
                onChange={(event)=>onCoinChange(event,true)}
                >
                    {
                        allCoins.filter((item)=> item.id != crypto1).map((coin,i)=>{
                            return <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>
                        })
                    }
                
                </Select>
            </div>
            <SelectDays
            days={days}
            handleDaysChange={handleDaysChange}
            />
        </div>
        
  )
}

export default SelectCoins