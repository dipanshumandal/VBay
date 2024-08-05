import {BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GsapTransitions from "./components/GsapTransitions";
import {Provider} from "react-redux"
import { store } from "../store/store";

export default function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <GsapTransitions/>
        <Footer/>
      </BrowserRouter>
    </Provider>
    </>
  )
}