import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Payment from "./components/Payment";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Notfound from "./components/Notfound";
import GetTent from "./components/GetTent";
import AddTent from "./components/AddTent";

import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App row">
      <BrowserRouter>
        <br />
        <br />
      < Navbar/>
        

        <header className="App-header">
          <Carousel />
        </header>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/GetTent" element={<GetTent />}></Route>
          <Route path="/Addtent" element={<AddTent />}></Route>
          <Route path="/About" element={<About />}></Route>

          <Route path="*" element={<Notfound />}></Route>
          <Route path="/" element={<GetTent />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
