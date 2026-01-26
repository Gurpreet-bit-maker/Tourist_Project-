import "./App.css";

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
import Footer from "./components/Footer.jsx";
import SignUpForm from "./pages/signup_login_forms/SignUpForm.jsx";
import ShareFormContext from "./context/forms/FormContext.jsx";
import Login from "./pages/signup_login_forms/LoginForm.jsx";
import BookedContext from "./context/bookedFlights/BookedContext.jsx";
import GetTour from "./pages/dummyData/GetTour.jsx";
import GetTourDetailsPage from "./pages/dummyData/GetTourDetailsPage.jsx";
import BookingPage from "./pages/bookings/BookingPage.jsx";
import Icons from "./components/Icons.jsx";
import Bookings from "./pages/bookings/Bookings.jsx";
import Profile from "./pages/profile/Profile.jsx";
import BestFlights from "./pages/flightCategory/BestFlights.jsx";
import Events from "./pages/flightCategory/Events.jsx";
import BestFlightsContext from "./context/bestFlightsData/BestFlightsContext.jsx";
import BestFlightSinglePage from "./pages/flightCategory/BestFlightSinglePage.jsx";
function App() {


  return (
    <>
      <BestFlightsContext>
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
                <Route
                  path="/getTourDetail_page"
                  element={<GetTourDetailsPage />}
                />
                {/* booking api */}
                <Route path="/booking_page" element={<BookingPage />} />
                {/* bookings */}
                <Route path="/bookings" element={<Bookings />} />
                {/* profile */}
                <Route path="/profile" element={<Profile />} />
                {/*//! flight category */}
                <Route path="/bestflights" element={<BestFlights />} />
                <Route path="/events" element={<Events />} />
                <Route
                  path="/bflightsingle"
                  element={<BestFlightSinglePage />}
                />

                <Route path="/contect" element={<Contect />} />
              </Routes>

              <Footer />
              <Icons />
            </BrowserRouter>
          </ShareFormContext>
        </BookedContext>
      </BestFlightsContext>
    </>
  );
}

export default App;
