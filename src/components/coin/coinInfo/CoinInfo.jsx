import React, { useState } from 'react';
import './coininfo.css';

const CoinInfo = ({heading,desc}) => {
    const shortDesc = desc.slice(0,300) + "<br/><br/><p style='color:var(--grey);cursor:pointer;'>Read More...</p>";
    const longDesc = desc + "<br/><br/><p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";   

    const [flag,setFlag] = useState(false)
  return (
    <div className='grey-wrapper' style={{padding:"0rem 1rem"}}>
        <h2 className='pt-4 pb-4'>{heading}</h2>
        {
            desc.length > 300
            ?
            (
                <p onClick={()=>setFlag(!flag)} className='coin-info-desc pb-4 cursor-pointer' dangerouslySetInnerHTML={{__html: !flag ? shortDesc : longDesc}}/>
            ):(
                <p className='coin-info-desc pb-4 cursor-pointer' dangerouslySetInnerHTML={{__html: desc}}/>
            )
        }
    </div>
  )
}

export default CoinInfo