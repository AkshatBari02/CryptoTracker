import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header/Header'
import Tabs from '../components/dashboard/tabs/Tabs'
import Search from '../components/dashboard/search/Search';
import PaginationComponent from '../components/dashboard/pagination/Pagination';
import BackToTop from '../components/common/backToTop/BackToTop';
import Loader from '../components/common/loader/Loader';
import { get200Coins } from '../functions/get200Coins';


const Dashboard = () => {
  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState("");
  const [paginatedCoins,setPaginatedCoins] = useState([]);
  const [page,setPage] = useState(1);
  const [loading,setLoading] = useState(false);

  const handlePageChange = (event,value)=>{
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex,previousIndex + 10))
  }
  const onSearchChange = (e)=>{
    setSearch(e.target.value);
  }

  var filteredCoins = coins.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(()=>{
    getData();
  },[])

  const getData = async ()=>{
    setLoading(true)
    const myCoins = await get200Coins();
    if(myCoins){
      setLoading(false)
      setCoins(myCoins)
      setPaginatedCoins(myCoins.slice(0,10))
    }
  }


  return (
    <div>
      <Header/>
      <BackToTop/>
      {
        loading === false 
        ?
        (
          <>
            <Search search={search} onSearchChange={onSearchChange}/>
            <Tabs coins = {search ? filteredCoins : paginatedCoins}/>
            {!search && (
            <PaginationComponent page={page} handlePageChange={handlePageChange}/>
            )}
          </>
        ) : (
          <>
            <Loader/>
          </>
        )
      }
    </div>
  )
}

export default Dashboard