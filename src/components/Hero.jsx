import React from "react";
import hands from "../assets/heroimage.png";
import Stats from "./Stats";
import get from "../assets/get started.png"
import discount from "../assets/Discount.svg"

export default function Hero() {
  return (
    <div>
        <div className="w-[195px] h-[324px] bg-white rounded-full blur-[250px] absolute " />
        <div className="flex justify-between items-center">
            <div className="mx-auto mt-[200px]">
                <div className="bg-gradient-to-br from-[#272727] to-[#11101d] w-fit p-2 rounded-xl flex">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M15.9984 29.331C14.973 29.331 13.949 28.9417 13.1664 28.1643L12.193 27.191C11.8157 26.815 11.3104 26.607 10.7744 26.6057H9.40503C7.1917 26.6057 5.39036 24.8043 5.39036 22.591V21.2203C5.38903 20.6857 5.18103 20.1803 4.8037 19.8003L3.84636 18.8443C2.27836 17.2857 2.2717 14.7377 3.8317 13.1683L4.80503 12.1937C5.18103 11.8163 5.38903 11.311 5.39036 10.775V9.40699C5.39036 7.19232 7.1917 5.39099 9.40503 5.39099H10.7757C11.3104 5.39099 11.8144 5.18299 12.1944 4.80299L13.153 3.84699C14.7117 2.27899 17.2584 2.27099 18.829 3.83232L19.8024 4.80565C20.181 5.18299 20.685 5.39099 21.2197 5.39099H22.5904C24.8037 5.39099 26.605 7.19232 26.605 9.40699V10.7763C26.6064 11.311 26.8144 11.8163 27.1917 12.1963L28.149 13.1537C28.9077 13.9083 29.3277 14.9137 29.3317 15.987C29.3344 17.0537 28.9237 18.0577 28.1757 18.8163C28.1624 18.8297 28.1504 18.8443 28.137 18.8563L27.1904 19.803C26.8144 20.1803 26.6064 20.6857 26.605 21.2217V22.591C26.605 24.8043 24.8037 26.6057 22.5904 26.6057H21.2197C20.685 26.607 20.1797 26.815 19.801 27.1923L18.8424 28.1497C18.061 28.9363 17.029 29.331 15.9984 29.331" fill="#393939"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3903 13.4012C13.1703 13.6212 12.885 13.7399 12.569 13.7399C12.273 13.7399 11.9823 13.6186 11.749 13.3999C11.5277 13.1799 11.4023 12.8786 11.4023 12.5732C11.4023 12.2826 11.525 11.9839 11.741 11.7532C11.8597 11.6332 12.001 11.5426 12.1423 11.4946C12.545 11.3106 13.0797 11.4186 13.397 11.7519C13.5103 11.8652 13.597 11.9892 13.6543 12.1186C13.717 12.2572 13.749 12.4146 13.749 12.5732C13.749 12.8906 13.6223 13.1852 13.3903 13.4012ZM20.2539 11.7464C19.7993 11.2931 19.0593 11.2931 18.6046 11.7464L11.7513 18.5998C11.2966 19.0544 11.2966 19.7944 11.7513 20.2504C11.9726 20.4704 12.2646 20.5918 12.5766 20.5918C12.8886 20.5918 13.1806 20.4704 13.4006 20.2504L20.2539 13.3971C20.7086 12.9411 20.7086 12.2024 20.2539 11.7464ZM19.8743 18.3519C19.4423 18.1706 18.9303 18.2692 18.589 18.6106C18.5183 18.6932 18.4183 18.8212 18.3503 18.9719C18.2783 19.1346 18.269 19.3092 18.269 19.4266C18.269 19.5439 18.2783 19.7172 18.3503 19.8799C18.417 20.0292 18.497 20.1506 18.6023 20.2559C18.8437 20.4799 19.1237 20.5932 19.4357 20.5932C19.7317 20.5932 20.0223 20.4732 20.261 20.2506C20.473 20.0386 20.589 19.7452 20.589 19.4266C20.589 19.1066 20.473 18.8146 20.2597 18.6012C20.1423 18.4852 20.001 18.3946 19.8743 18.3519Z" fill="#00F6FF"/>
                    </svg>
                    <div className="font-semibold text-xl">
                        20% <span className="opacity-60">DISCOUNT FOR</span> 1 MONTH{" "}
                        <span className="opacity-60">ACCOUNT</span>
                    </div>
                </div>
                <div>
                    <h1 className="text-left font-bold text-[80px]">The Next</h1>
                    <div className="flex justify-between">
                        <div className="gradient-text h-fit">
                            <h1 className="text-left font-bold text-[80px]">Generation</h1>
                        </div>
                        <img src={get} alt="" />
                    </div>
                    <h1 className="text-left font-bold text-[70px]">Payment Method.</h1>
                </div>
                <p className="text-lg opacity-70 mt-8 text-left w-[480px]">
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>
            <div className="">
                <div className="w-[405px] absolute h-[471px] bg-white/60 rounded-full blur-[150px]" />
                <img src={hands} alt="" className="w-[550px] ml-auto" />
            </div>
        </div>
        <Stats />
    </div>
  );
}
