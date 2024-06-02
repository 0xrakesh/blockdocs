import { Fragment } from "react";

export default function LinePattern(){
    const row = [1,2,3,4,5,6,7,8]
    const col = [1,2,3,4,5,6,7,8,9,10,11,12]
    let pixel = `absolute opacity-10 z-[-1]`
    return (
        <Fragment>
            <div className={pixel}>
                {row?.map((rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {col?.map((index) => (
                            <div key={index} className="w-2 h-2 m-5 bg-white max-md:m-1 rounded-full"></div>
                        ))}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}
