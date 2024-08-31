import React from "react";

export default function TryOut(){
    return(
        <div className="bg-gradient-to-br from-white/30 to-[#100f1c] rounded-[20px] backdrop-blur-[100px] flex justify-between items-center p-16 px-28 gap-[250px] mt-12" >
            <div className="flex flex-col gap-[30px]">
                <h1 className="font-bold text-5xl text-wrap">Let’s try our service now!</h1>
                <p className="text-white/70 font-normal text-xl w-[550px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className=" bg-gradient-to-b from-[#def9fa] via-[#bef3f5] to-[#33bbcf] rounded-[10px] text-black font-normal text-lg w-fit p-3">
                Get Started
            </div>
        </div>
    )
}