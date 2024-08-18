import axios from "axios"

export const getCoinPrices = (id,days,priceType)=>{

    const apiUrl = import.meta.env.VITE_GET_COIN_DATA;
    const vsCurrency = import.meta.env.VITE_VS_CURRENCY;
    const interval = import.meta.env.VITE_INTERVAL;

    const prices =
    axios.get(`${apiUrl}${id}/market_chart?vs_currency=${vsCurrency}&days=${days}&interval=${interval}`,{crossDomain: true}).then((res)=>{
        // console.log(res.data.prices)
        return res.data[priceType];
      }).catch((err)=>{
          console.log("Error:",err)
      });
      return prices;
}