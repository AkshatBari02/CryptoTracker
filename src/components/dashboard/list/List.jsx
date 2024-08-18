import React,{useState} from 'react'
import './list.css';
import TrendingUpRoubdedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoubdedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';
import { removeItemToWatchlist } from '../../../functions/removeItemToWatchList';
import { saveItemToWatchlist } from '../../../functions/saveItemToWatchList';
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

const List = ({coin}) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
        <tr className='list-row'>
            <Tooltip title="Coin Logo" placement='bottom-start'>
                <td className="td-img">
                    <img src={coin.image} alt="" className='coin-logo'/>
                </td>
            </Tooltip>
            <Tooltip title="Coin Info" placement='bottom-start'>
                <td>
                    <div className='name-col'>
                        <p className='coin-symbol'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                </td>
            </Tooltip>
            <Tooltip title="Price Change in 24 hrs" placement='bottom-start'>
                {coin.price_change_percentage_24h > 0 ?
                (
                    <td className="chip-flex">
                        <div className="price-chip">
                            {Number(coin.price_change_percentage_24h).toFixed(2)}%
                        </div>
                        <div className='icon-chip td-icon'>
                            <TrendingUpRoubdedIcon/>
                        </div>
                    </td>
                ):(
                    <td className="chip-flex">
                        <div className="price-chip chip-red">
                            {Number(coin.price_change_percentage_24h).toFixed(2)}%
                        </div>
                        <div className='icon-chip chip-red td-icon'>
                            <TrendingDownRoubdedIcon/>
                        </div>
                    </td>
                )}
            </Tooltip>
            <Tooltip title="Current Price">
                <td>
                    <h3 className='coin-price td-center-align' style={{color:coin.price_change_percentage_24h > 0? "var(--green)" : "var(--red)"}}>${Number(coin.current_price).toLocaleString()}</h3>
                </td>
            </Tooltip>
            <Tooltip title="Total Volume" placement='bottom-end'>
                <td>
                    <p className='total-volume td-right-align td-total-volume'>{Number(coin.total_volume).toLocaleString()}</p>    
                </td>
            </Tooltip>
            <Tooltip title="Market Capital" placement='bottom-end'>
                <td className='desktop-td-mkt'>
                    <p className='total-volume td-right-align'>${Number(coin.market_cap).toLocaleString()}</p>    
                </td>
            </Tooltip>
            <Tooltip title="Market Capital" placement='bottom-end'>
                <td className='mobile-td-mkt'>
                    <p className='total-volume td-right-align'>${convertNumber(coin.market_cap).toLocaleString()}</p>    
                </td>
            </Tooltip>
            <td
            className={`watchlist-icon ${
                coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
            }`}
            onClick={(e) => {
                if (isCoinAdded) {
                // remove coin
                removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                } else {
                setIsCoinAdded(true);
                saveItemToWatchlist(e, coin.id);
                }
            }}
            >
            {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </td>
        </tr>
    </Link>
  )
}

export default List