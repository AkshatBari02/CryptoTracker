import React ,{useState} from 'react';
import './grid.css';
import TrendingUpRoubdedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoubdedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from 'react-router-dom';
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from '../../../functions/removeItemToWatchList';
import { saveItemToWatchlist } from '../../../functions/saveItemToWatchList';


const Grid = ({coin}) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
        <div className={`grid-container w-[320px] h-[320px] bg-[var(--darkgrey)] border-2 border-solid border-[var(--darkgrey)] rounded-xl ${
            coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}>
            <div className="flex justify-start items-center gap-4 p-4">
                <img src={coin.image} alt="" className='coin-logo h-14 w-14'/>
                <div className="icon-flex flex w-full justify-between items-center">
                    <div className='info-flex flex flex-col justify-between gap-[0.2rem]'>
                        <p className='coin-symbol text-[var(--white)] uppercase font-[600] text-[1.2rem] m-0'>{coin.symbol}</p>
                        <p className='coin-name text-[var(--grey)] capitalize font-[light] text-[1rem] m-0'>{coin.name}</p>
                    </div>
                    <div
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
                    </div>
                </div>
            </div>
            {coin.price_change_percentage_24h > 0 ?
            (
                <div className="chip-flex ">
                    <div className="price-chip">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className='icon-chip'>
                        <TrendingUpRoubdedIcon/>
                    </div>
                </div>
            ):(
                <div className="chip-flex">
                    <div className="price-chip chip-red">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className='icon-chip chip-red'>
                        <TrendingDownRoubdedIcon/>
                    </div>
                </div>
            )}
            <div className="info-container">
                <h3 style={{color:coin.price_change_percentage_24h > 0? "var(--green)" : "var(--red)"}}>${coin.current_price.toLocaleString()}</h3>
                <p className='total-volume'>Total Volume : {coin.total_volume.toLocaleString()}</p>    
                <p className='total-volume'>Market Cap : ${coin.market_cap.toLocaleString()}</p>    
            </div>
        </div>
    </Link>
  )
}

export default Grid;