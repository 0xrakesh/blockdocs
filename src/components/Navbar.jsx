import { Fragment, useState } from "react";
import logo from '../assets/logo.png'
import Menu from "../assets/menu.png"

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    
    const menuBar = () => {
        setMenu((prev) => !prev)
    }
    return (
        <Fragment>
            <div className={`flex max-md:justify-between max-md:items-start ${menu ? "max-md:h-96 max-md:bg-black/70 rounded-b-3xl": ""}`}>
                <nav className="flex my-4 items-center w-full justify-around max-md:justify-start max-md:mx-4 max-md:flex-col max-md:items-start" >
                    <div className="flex hover:cursor-pointer items-center py-3">
                        <img src={logo} alt="Logo of blockdocs" />
                        <h2 className="hover:cursor-pointer font-bold text-xl">Blockdocs</h2>
                    </div>
                    <div className="max-md:absolute max-md:my-20 ">
                        <ul className={`flex gap-12 items-center max-md:flex-col max-md:items-start max-md:gap-2  ${menu ? '' : 'max-md:hidden'}`}>
                            <li className="hover:cursor-pointer">Features</li>
                            <li className="hover:cursor-pointer">Documentation</li>
                            <li className="hover:cursor-pointer">Products</li>
                            <li className="text-black hover:cursor-pointer max-md:text-white">Pricing</li>
                            <li className="text-black hover:cursor-pointer max-md:text-white">About Blockdocs</li>
                            <li className="hover:cursor-pointer">
                                <button className="bg-gradient-to-tr font-bold from-primary-dark to-secondary w-32 py-1 rounded drop-shadow-black">Sign in</button>
                            </li>
                        </ul>
                    </div>
                    
                </nav>
                <button className="my-4 max-md:mx-8 max-md:my-12 md:hidden">
                    <img src={Menu} alt="Menu" width={24} height={24} onClick={menuBar}/>
                </button>
            </div>
        </Fragment>
    )
}