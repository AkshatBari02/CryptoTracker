import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/common/Header/Header';
import Loader from '../components/common/loader/Loader';
import { coinObject } from '../functions/convertObject';
import List from '../components/dashboard/list/List';
import CoinInfo from '../components/coin/coinInfo/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/coin/lineChart/LineChart';
import SelectDays from '../components/coin/selectDays/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import PriceType from '../components/coin/priceType/PriceType';

const CoinPage = () => {
  const {id} = useParams();
  const [loading,setLoading] = useState(false)
  const [days,setDays] = useState(30)
  const [priceType, setPriceType] = useState('prices');
  const [coinData,setCoinData] = useState({
    id: "",
    name: "",
    symbol: "",
    image: "",
    desc: "",
    price_change_percentage_24h: "",
    total_volume: "",
    current_price: "",
    market_cap: "",
  })

  const [chartData,setChartData] = useState({labels:[],datasets:[{}]});

  useEffect(() => {
    if(id){
      setLoading(true)
      getData();
    }
  }, [id])

  async function getData(){
    const data = await getCoinData(id);
    if(data){
      coinObject(setCoinData,data);
      const prices = await getCoinPrices(id,days,priceType);
      if(prices.length > 0){
        console.log('YEYYEYEYEYEYEY');
        settingChartData(setChartData,prices);
        setLoading(false)
      }
    }

  }


  const handleDaysChange = async(event) =>{
    setDays(event.target.value);
    const prices = await getCoinPrices(id,event.target.value,priceType);
      if(prices.length > 0){
        settingChartData(setChartData,prices);
        setLoading(false)
      }
  }

  const handlePriceTypeChange = async(event, newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id,days,newType);
    if(prices.length > 0){
      settingChartData(setChartData,prices);
      setLoading(false)
    }
  };
  
  
  return (
    <>
      <Header/>
      {
        loading === true
        ?
        (
        <>
          <Loader/>
        </>
        ) : (
          <>
            <div className="grey-wrapper" style={{padding: "0rem 0.2rem"}}>
              <List coin={coinData}/>
            </div>
            <div className="grey-wrapper">
              <SelectDays days={days} handleDaysChange={handleDaysChange}/>
              <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
              <LineChart chartData={chartData} priceType={priceType}/>
            </div>
            <CoinInfo heading={coinData.name} desc={coinData.desc}/>
          </>
        )
      }
    </>
  )
}

export default CoinPage