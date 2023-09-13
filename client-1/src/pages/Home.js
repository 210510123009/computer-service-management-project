import React, {useContext} from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth';
import { NavLink } from 'react-router-dom';

const Home = () => { 
  
  const [auth, setAuth] = useAuth();

  return (
    <Layout>
  <div>
    <div className="container-flex" id="banner">
      <div className="container">
      <h1 style={{backgroundImage: 'url("./matias-malka-TZIH-fDKzvY-unsplash.jpg")'}}>Expert Computer Repair Services
        at Your Fingertips!
      </h1>
      <p>Our reliable and efficient computer repair team is dedicated to helping you get your computer up and running
        as quickly as possible. We offer a wide range of services to suit your needs</p>    
    </div>
  </div>
  <hr />
  <div className="container service mt-4">
    <div className="row">
      <div className="col-12">
      <NavLink to='/allservicelist' className="nav-link"><button type="button" class="btn btn-outline-warning"><h1>Our Services</h1></button></NavLink>
      </div>
    </div>
    <div className="row p-2">
      <div className="col-lg-3 text-dark card">
      <NavLink to='/' className="nav-link"><h5 style={{color:""}}>Hardware Repair</h5></NavLink>
        <p className="mt-4">Our team can help you
          with all your hardware
          needs, whether you
          need a new screen,
          keyboard, or other
          component installed.</p>
      </div>
      <div className="col-lg-3 text-dark p-2 card">
        <NavLink to='/' className="nav-link"><h5>Virus Removal</h5></NavLink>
        <p className="mt-4">Don't let a virus slow
          your computer down!
          We can remove any
          threats and ensure
          your computer is
          running at peak
          performance.</p>
      </div>
      <div className="col-lg-3 text-dark p-2 card">
        <NavLink to='/' className="nav-link"><h5>Data Recovery</h5></NavLink>
        <p className="mt-4">Lost important files?
          Our team can help
          recover data from
          damaged or corrupted
          hard drives.</p>
      </div>
      <div className="col-lg-3 text-dark p-2 card">
        <NavLink to='/' className="nav-link"><h5>Software Installation</h5></NavLink>
        <p className="mt-4">We can install new
          software on your
          computer and provide
          you with training on
          how to use it
          efficiently.
        </p>
      </div>
    </div>
  </div>
  <hr />
  <div className="container booking">
    <div className="row">
      <div className="col-12 p-2">
        <h1>Online Booking</h1>
      </div>
      <div className="row">
        <div className="col-6 text-dark p-2 card">
          <h4>Appointment Time</h4>
          <p>Select a date and time that works for you, and
            we'll be there on time.</p>
        </div>
        <div className="col-6 text-dark p-2 card">
          <h4>Service Type</h4>
          <p>Select the type of service you need so our
            technicians can come prepared.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-dark p-2 card">
          <h4>Location</h4>
          <p>Give us your location, and we'll come to you. No
            need to drive to us or wait in line.
          </p>
        </div>
        <div className="col-6 text-dark p-2 card">
          <h4>Service Type</h4>
          <p>Provide us with your contact information, and
            we'll confirm your appointment by email or
            phone.
          </p>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="container pricing">
    <div className="row">
      <div className="col-12 p-2">
        <h1>Pricing Information</h1>
      </div>
      <div className="row">
        <div className="col-4 text-dark p-3 card">
          <h4>Transparent Pricing</h4>
          <p>Our competitive pricing varies by
            service and location. We'll provide
            a detailed quote before any work is
            done. No hidden fees!
          </p>
        </div>
        <div className="col-4 text-dark p-3 card">
          <h4>Discounts Available</h4>
          <p>We offer discounts for students,
            seniors, and military personnel.
            Speak to our team to see if you
            qualify.
          </p>
        </div>
        <div className="col-4 text-dark p-3 card">
          <h4>Customer Satisfaction
            Guaranteed
          </h4>
          <p>We care about your satisfaction! If
            you're not happy with the work
            we've done, we'll work with you to
            make it right.
          </p>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="container faq">
    <div className="row">
      <div className="col-12 p-2">
        <h1>Frequently Asked Questions</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-6 text-dark p-3 card">
        <h4>How long will it take to repair my
          computer?
        </h4>
        <p>The time it takes to repair your computer
          depends on the nature and complexity of the
          problem. We'll provide an estimate when we
          provide a quote.
        </p>
      </div>
      <div className="col-6 text-dark p-3 card">
        <h4>Do I need to be home during the
          repair?</h4>
        <p>It's not necessary for you to be present during
          the repair. Just make sure we have access to
          the computer.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-6 text-dark p-3 card">
        <h4>What if I'm not satisfied with the
          repair?
        </h4>
        <p>We care about your satisfaction and offer a
          guarantee. If you're not satisfied with the work
          we've done, we'll work with you until you are
          happy with the results.
        </p>
      </div>
      <div className="col-6 text-dark p-3 card">
        <h4>What types of payment do you
          accept?</h4>
        <p>We accept all major credit cards, cash, and
          PayPal
        </p>
      </div>
    </div>
  </div>
</div>

    </Layout>

  );
}

export default Home