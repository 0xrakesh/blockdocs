import { Fragment } from "react";
import { heroTitle, heroDescription } from "../context";
import ScrollBar from "../assets/scrollbar.png"
import LinePattern from "./linePattern";

export default function Hero() {
    return (
        <Fragment>
            <LinePattern/>
            <div className="mx-64 my-48 flex max-md:mx-2 max-md:my-[90%] max-lg:mx-0">
                <div className="w-[4px] h-[auto] rounded  mx-6 relative bg-gradient-to-b from-primary to-secondary flex justify-center">
                    <img src={ScrollBar} alt="Scrollbar" width={100} height={32} />
                </div>
                <div>
                    <h1 className="font-bold z-2 w-3/5 text-[64px] max-md:text-[24px]">{heroTitle}</h1>
                    <p className="my-4 font-thin text-[24px] w-2/5 max-md:text-[12px]">{heroDescription}</p>
                    <button className="my-4 bg-gradient-to-l select-none py-3 px-12 max-md:py-1 max-md:px-5 max-md:rounded-xl max-md:text-md from-primary to-secondary drop-shadow-white rounded-2xl">
                        Get Started 
                    </button>
                </div>
            </div>
        </Fragment>
    )
}