import { Fragment } from "react";
import Polygon from "../assets/polygon.png"
import Blockchain from "../assets/blockchain.png"

export default function Hexagonal() {
    return (
        <Fragment>
            <div className="absolute z-[-2] right-[0px] top-[-10%] max-md:top-[0%] max-md:right-[0%]">
                <img src={Polygon} alt="polygon" />
            </div>
            <div className="absolute z-[-1] right-[15px] top-[100px] max-md:top-[10%] max-md:right-[0%]">
                <img src={Blockchain} alt="blockchain" />
            </div>
        </Fragment>
    )
}