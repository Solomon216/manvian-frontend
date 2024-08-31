import React from "react";
import airbnb from "../assets/airbnb.png"
import binance from "../assets/binance.png"
import coinbase from "../assets/coinbase.png"
import drop from "../assets/dropbox.png"

export default function Companies(){

    const images = [airbnb,binance,coinbase,drop]
    return(
        <div className="flex justify-center items-center gap-[140px] mt-20">
            {
                images.map((item,index)=>{
                    return(
                        <div key={index}>
                            <img src={item} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}