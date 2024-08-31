import React from "react";
import paypal from "../assets/paypal.png"
import appstore from "../assets/appstore.png"
import playstore from "../assets/paly store.png"

export default function Billing(){
    return(
        <div className="flex justify-center items-center gap-[120px] mt-20">
            <img src={paypal} alt="" className="w-[550px] " />
            <div className=" flex flex-col gap-[50px] justify-center">
                <div>
                    <h1 className="font-bold text-5xl text-wrap">Easily control your</h1>
                    <h1 className="font-bold text-5xl text-wrap mt-5">billing & invoicing.</h1>
                </div>
                <p className="text-white/70 text-xl w-[450px] ">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <div className="flex gap-10">
                    <img src={appstore} alt="" />
                    <img src={playstore} alt="" />
                </div>
            </div>
        </div>
    )
}