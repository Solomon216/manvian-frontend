import React from "react";
import per1 from "../assets/person1.png"
import per2 from "../assets/person2.png"
import per3 from "../assets/person3.png"
import quote from "../assets/quote.png"

export default function Testimonials(){

    const data=[
        {
            "testimony":"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
            "name":"Herman Jensen",
            "des":"Founder & Leader",
            "image":per1
        },
        {
            "testimony":"Money makes your life easier. If you're lucky to have it, you're lucky.",
            "name":"Steve Mark",
            "des":"Founder & Leader",
            "image":per2
        },
        {
            "testimony":"It is usually people in the money business, finance, and international trade that are really rich.",
            "name":"Kenn Gallagher",
            "des":"Founder & Leader",
            "image":per3
        }
    ]
    return(
        <div className="flex justify-center items-center gap-[120px] flex-col mt-20">
                <div className="flex justify-center items-center">
                    <div>
                        <h1 className="font-bold text-5xl text-wrap w-[550px]">What people are</h1>
                        <h1 className="font-bold text-5xl text-wrap">saying about us</h1>
                    </div>
                    <div>
                        <p className="text-white/70 text-lg w-[450px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                </div>
        <div className="flex justify-center items-center gap-8 mt-10">
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index} className="flex flex-col gap-7 hover:bg-gradient-to-br from-white/60 to-[#140f1c] p-3 rounded-lg w-[330px]">
                                <img src={quote} alt="" className="w-8" />
                                <p className="font-semibold text-xl">{item.testimony}</p>
                                <div className="flex gap-3">
                                    <img src={item.image} alt="" className="w-[60px] h-[60px]" />
                                    <div>
                                        <h1 className="font-semibold text-xl">{item.name}</h1>
                                        <h1 className="font-semibold text-xl text-white/70">{item.des}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-[395px] h-[800px] right-0 bg-white/40 rounded-full blur-[250px] absolute" />
        </div>
    )
}