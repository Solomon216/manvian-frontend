import React from "react";

export default function Stats() {

    const data = [
        {   
            "count": "3800+",
            "name": "USER ACTIVE"
        },
        {
            "count":"230+",
            "name":"TRUSTED BY COMPANY"
        },
        {
            "count":"$230M+",
            "name":"TRANSACTION"
        }
    ];

    return (
        <div className=" flex justify-center items-center mt-4">
            {
                data.map((item, index) => {
                    if(index<=1){
                        return(
                            <div key={index} className="flex gap-8">
                                <h1 className="text-4xl font-bold">{item.count}</h1>
                                <div className="gradient-text flex items-center justify-center mt-2">
                                    <h1 className="font-bold text-lg">{item.name}</h1>
                                </div>
                                <div className="w-[13.63px] h-[0px] origin-top-left rotate-90 border-2 border-white/60 mt-4 ml-9"></div>
                            </div>
                        )
                    }else{
                        return(
                            <div key={index} className="flex gap-8">
                                <h1 className="text-4xl font-bold">{item.count}</h1>
                                <div className="gradient-text flex items-center justify-center mt-2">
                                    <h1 className="font-bold text-lg">{item.name}</h1>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}
