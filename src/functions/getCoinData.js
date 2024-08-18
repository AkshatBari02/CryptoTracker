import axios from "axios"

export const getCoinData = (id)=>{
    const apiUrl = import.meta.env.VITE_GET_COIN_DATA;
    const myData = 
    axios.get(`${apiUrl}${id}`).then((res)=>{
        if(res.data){
            return res.data;
        }
    }).catch((err)=>{
        console.log("Error:",err)
    })
    return myData
}