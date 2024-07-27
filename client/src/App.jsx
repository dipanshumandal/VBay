import {BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GsapTransitions from "./components/GsapTransitions";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <GsapTransitions/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}