import React from "react";
import star from "../assets/rewars.png"
import shield from "../assets/secured.png"
import arrow from "../assets/transfer.png"

export default function GetStarted(){

    const data=[
        {
            "icon":star,
            "name":"Rewards",
            "description":"The best credit cards offer some tantalizing combinations of promotions and prizes."
        },
        {
            "icon":shield,
            "name":"100% Secured",
            "description":"We take proactive steps make sure your information and transactions are secure."
        },
        {
            "icon":arrow,
            "name":"Balance Transfer",
            "description":"A balance transfer credit card can save you a lot of money in interest charges."
        }
    ]
    return(
        <div className="flex items-center justify-center gap-[120px] mt-20">
            <div className="flex flex-col gap-[70px]">
                <h1 className="font-bold text-5xl text-wrap">You do the business,<br></br> we'll handle the money.</h1>
                <p className="text-white/70 font-normal text-xl w-[550px]">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <div className=" bg-gradient-to-b from-[#def9fa] via-[#bef3f5] to-[#33bbcf] rounded-[10px] text-black font-normal text-lg w-fit p-3">
                    Get Started
                </div>
            </div>
            <div>
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index} className="flex mb-5 hover:bg-gradient-to-br from-white/60 to-[#140f1c] rounded-lg p-5">
                                <img src={item.icon} alt="" className="w-16 h-16 justify-center items-center" />
                                <div>
                                    <h1 className="font-bold text-2xl">{item.name}</h1>
                                    <p className="text-white/70 w-[350px]">{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-[400px] h-[324px] bg-white/70 rounded-full blur-[280px] absolute left-0 mt-[500px]" />
        </div>
    )
}