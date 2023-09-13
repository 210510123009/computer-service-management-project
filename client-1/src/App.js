import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import TechnicianDashboard from "./pages/Technician/TechnicianDashboard";
import TechnicianRoute from "./components/Routes/TechnicianRoute";
import RegisterUsers from "./pages/Admin/RegisterUsers";
import Bookings from "./pages/Admin/Bookings";
import Services from "./pages/Admin/Services";
import ContactUs from "./pages/Admin/ContactUs";
import MyBooking from "./pages/user/MyBooking";
import AddServices from "./pages/Admin/AddServices";
import BookingForm from "./components/form/BookingForm";
import AllServiceList from "./pages/AllServiceList";
import TechnicianBookings from "./pages/Technician/TechnicianBookings";
import UpdatePassword from "./pages/user/UpdatePassword";
import UpdateProfile from "./pages/user/UpdateProfile";
import BookingDetail from "./pages/Admin/BookingDetail";
import TechnicianBookingDetail from "./pages/Technician/TechnicianBookingDetail";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/" element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/mybooking" element={<MyBooking/>}></Route>
        <Route path="/bookingform" element={<BookingForm/>}></Route>
        <Route path="/updatepassword" element={<UpdatePassword/>}></Route>
        <Route path="/updateprofile" element={<UpdateProfile/>}></Route>
      </Route>

      <Route path="/" element={<AdminRoute/>}>
        <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
        <Route path="/admindashboard/register-users" element={<RegisterUsers/>}></Route>
        <Route path="/admindashboard/bookings" element={<Bookings/>}></Route>
        <Route path="/admindashboard/services" element={<Services/>}></Route>
        <Route path="/admindashboard/addservices" element={<AddServices/>}></Route>
        <Route path="/admindashboard/contact-us" element={<ContactUs/>}></Route>
        <Route path="/bookingdetail" element={<BookingDetail/>}></Route>
      </Route>

      <Route path="/" element={<TechnicianRoute/>}>
        <Route path="/techniciandashboard" element={<TechnicianDashboard/>}></Route>
        <Route path="/techniciandashboard/technicianbookings" element={<TechnicianBookings/>}></Route>
        <Route path="/techniciandashboard/technicianbookingdetail" element={<TechnicianBookingDetail/>}></Route>
      </Route> 

      <Route path="/allservicelist" element={<AllServiceList/>}></Route>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/*" element={<PageNotFound/>} />
    </Routes>
    </>
  );
};

export default App;
