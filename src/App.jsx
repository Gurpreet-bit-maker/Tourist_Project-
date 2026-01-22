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
import SignUpForm from "./pages/signup_login_forms/SignUpForm.jsx";
import ShareFormContext from "./context/forms/FormContext.jsx";
import Login from "./pages/signup_login_forms/LoginForm.jsx";
import BookedContext from "./context/bookedFlights/BookedContext.jsx";
import GetTour from "./pages/dummyData/GetTour.jsx";
import GetTourDetailsPage from "./pages/dummyData/GetTourDetailsPage.jsx";
import BookingPage from "./pages/bookings/BookingPage.jsx";
function App({ dark }) {
  console.log(dark);

  return (
    <>
      <BookedContext>
        <ShareFormContext>
          <BrowserRouter>
            <NavTab />
            <Routes>
              <Route path="/" element={<Heropage />} />
              {/* signup login with auth */}
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/login" element={<Login />} />
              {/* dummy data */}
              <Route path="/GetTour" element={<GetTour />} />
              <Route path="/getTourDetail_page" element={<GetTourDetailsPage/>} />
              {/* booking api */}
              <Route path="/booking_page" element={<BookingPage/>} />

              <Route path="/contect" element={<Contect />} />
              <Route path="/about" element={<About />} />
              <Route path="/whether" element={<WeatherPage />} />
              <Route path="/bestflights" element={<BestFlights />} />
              <Route path="/events" element={<Events />} />
              <Route path="/customization" element={<FlightsFilter />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ShareFormContext>
      </BookedContext>
    </>
  );
}

export default App;
