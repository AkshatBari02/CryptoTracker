import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TogglePriceType({priceType, handlePriceTypeChange}) {

  return (
    <div className="flex items-center justify-center m-4">
        <ToggleButtonGroup
            value={priceType}
            exclusive
            onChange={handlePriceTypeChange}
            sx={{
                "& .css-ueukts-MuiButtonBase-root-MuiToggleButton-root.Mui-selected": {
                  color: "var(--white) !important",
                },
                borderColor: "var(--blue)",
                border: "unset !important",
                "& .MuiToggleButtonGroup-grouped": {
                  border: "1px solid var(--blue)!important",
                  borderColor: "unset",
                  color: "var(--blue)",
                },
                "& .MuiToggleButton-standard": {
                  color: "var(--blue)",
                },
              }}
            >
            <ToggleButton value="prices" className='toggle-btn'>
                Price
            </ToggleButton>
            <ToggleButton value="market_caps" className='toggle-btn' >
                Market Cap.
            </ToggleButton>
            <ToggleButton value="total_volumes" className='toggle-btn' >
                Total Volume
            </ToggleButton>
        </ToggleButtonGroup>
    </div>
  );
}
