import React from "react";
import hoobank from "../assets/hoobank.png"
import Socials from "./Socials";

export default function Footer(){
    const links=["Content","How it works","Create","Explore","Terms & Services"]
    const community=["Help Center","Partners","Suggestions","Blogs","Newsletters"]
    const part=["Our Partners","Become a Partner"]
    return(
        <div>
            <div className="flex justify-center gap-40 mt-40">
                <div>
                    <img src={hoobank} alt="" />
                    <p className="opacity-70 text-lg mt-3">A new way to make the payments <br /> easy, reliable and secure.</p>
                </div>
                <div>
                    <h1 className="text-lg">Useful Links</h1>
                    <div className="mt-3 flex flex-col gap-2">
                        {
                            links.map((item)=>{
                                return(
                                    <p className="opacity-70">{item}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h1 className="text-lg">Community</h1>
                    <div className="mt-3 flex flex-col gap-2">
                        {
                            community.map((item)=>{
                                return(
                                    <p className="opacity-70">{item}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h1 className="text-lg">Partner</h1>
                    <div className="mt-3 flex flex-col gap-2">
                        {
                            part.map((item)=>{
                                return(
                                    <p className="opacity-70">{item}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="h-1 bg-white/70 w-[1180px] my-8 mx-auto"></div>
            <Socials />
        </div>
    )
}