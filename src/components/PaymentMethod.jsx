import React from "react";
import PaymentMethods from "../assets/paymentmethod.png"

export default function PaymentMethod(){
    return(
        <div className="flex items-center justify-center gap-[120px] mt-20">
            <div className="flex flex-col gap-[70px]">
                <div>
                    <h1 className="font-bold text-5xl text-wrap">Find a better card deal</h1>
                    <h1 className="font-bold text-5xl text-wrap">in few easy steps.</h1>
                </div>
                <p className="text-white/70 font-normal text-xl w-[550px]">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <div className=" bg-gradient-to-b from-[#def9fa] via-[#bef3f5] to-[#33bbcf] rounded-[10px] text-black font-normal text-lg w-fit p-3">
                    Get Started
                </div>
            </div>
            <div>
                <img src={PaymentMethods} alt="" className="w-[450px]" />
            </div>
        </div>
    )
}