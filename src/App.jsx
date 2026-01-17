// import "./App.css";

import LikeButton from "./LikeButton.jsx";
import Product from "./Product.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import "./index.css";
import NavTab from "./components/NavTab.jsx";
import Heropage from "./components/Heropage.jsx";
import Contect from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import WeatherPage from "./pages/WeatherPage.jsx";
import BestFlights from "./pages/BestFlights.jsx";
import Events from "./pages/Events.jsx";
import FlightsFilter from "./components/FlightsComp/FlightsFilter.jsx";

function App({dark}) {
  console.log(dark);
  
  return (
    <>
      <BrowserRouter>
        <NavTab />
        <Routes>
          <Route path="/" element={<Heropage />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/about" element={<About />} />
          <Route path="/whether" element={<WeatherPage/>} />
          <Route path="/bestflights" element={<BestFlights/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/customization" element={<FlightsFilter/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
