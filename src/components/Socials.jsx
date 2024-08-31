import React from "react";
import copy from "../assets/copy.png"
import insta from "../assets/insta.png"
import fb from "../assets/fb.png"
import x from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"


export default function Socials(){
    const social = [insta,fb,x,linkedin]
    return(
           <div className="flex justify-around items-center">
                
                <div className="flex gap-3">
                    <p className="text-white/70">Copyright</p>
                    <img src={copy} alt="" />
                    <p className=" text-white/70">2021 HooBank. All Rights Reserved.</p>
                </div>
                <div className=" flex gap-10">
                    {
                        social.map((item)=>{
                            return(
                                <img src={item} alt="" />
                            )
                        })
                    }
                </div>
           </div> 
    )
}