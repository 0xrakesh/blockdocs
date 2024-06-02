import { Fragment } from "react";
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Hexagonal from "./components/hexagon";

export default function App() {
  return (
    <Fragment>
        <Hexagonal/>
        <Navbar/>
        <Hero/>
    </Fragment>
  )
}