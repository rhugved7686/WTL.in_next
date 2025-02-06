import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export const Home = () => {
  return (
    <>
  {/* 914530054 */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WTL Tourism Pvt. Ltd. - Mahakumbh Mela Packages</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      \n\n    /* General Styles */\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0px;\n  padding: 0px;\n  background-size: cover;\n  color: #333;\n  background-color: white;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: beige;\n}\n\nheader img {\n  width: 120px;\n}\n\nheader h1 {\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: center;\n  flex: 1;\n}\n\nnav {\n  display: flex;\n  gap: 20px;\n}\n\nnav a {\n  color: black;\n  text-decoration: none;\n  font-size: 1rem;\n  transition: color 0.3s ease;\n}\n\nnav a:hover {\n  color: #ff5722;\n  text-decoration: none;\n}\n\n/* Media Queries for responsiveness */\n\n/* For devices with a width up to 768px (mobile and tablet) */\n@media (max-width: 768px) {\n  header {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n  header h1 {\n    font-size: 1.5rem; /* Increase font size for mobile */\n    margin-top: 10px;\n  }\n\n  nav {\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 15px;\n  }\n\n  nav a {\n    font-size: 1.2rem; /* Slightly larger links on mobile */\n  }\n}\n\n/* For devices with a width up to 480px (smaller screens) */\n@media (max-width: 480px) {\n  header {\n    padding: 15px;\n  }\n\n  header img {\n    width: 100px; /* Reduce the logo size on smaller screens */\n  }\n\n  header h1 {\n    font-size: 1.2rem; /* Adjust title font size for very small screens */\n  }\n\n  nav a {\n    font-size: 1.1rem; /* Slightly smaller text on very small screens */\n  }\n}\n\n\n      /* Top Image Section */\n      .top-image {\n        position: relative;\n        width: 100%;\n        height: 500px;\n      }\n\n      .top-image img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n\n      .overlay-para {\n        position: absolute;\n        top: 10%;\n        left: 10%;\n        font-size: 35px;\n        color: #fff;\n        font-weight: bold;\n        transition: transform 0.5s ease;\n      }\n\n      .overlay-para p:hover {\n        transform: scale(1.2);\n        color: darkblue;\n      }\n\n      .overlay-text {\n        position: absolute;\n        top: 55%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background-color: rgb(18, 181, 231);\n        padding: 10px 15px;\n        border-radius: 10px;\n        color: black;\n        font-size: 24px;\n        font-weight: bold;\n        text-align: center;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n        line-height: 1.5;\n      }\n\n      .word {\n        display: inline-block;\n        opacity: 0;\n        animation: fadeIn 1s forwards;\n      }\n\n      .word:nth-child(1) {\n        animation-delay: 0.2s;\n      }\n      .word:nth-child(2) {\n        animation-delay: 0.4s;\n      }\n      .word:nth-child(3) {\n        animation-delay: 0.6s;\n      }\n      .word:nth-child(4) {\n        animation-delay: 0.8s;\n      }\n      .word:nth-child(5) {\n        animation-delay: 1s;\n      }\n\n      @keyframes fadeIn {\n        0% {\n          opacity: 0;\n        }\n        100% {\n          opacity: 1;\n        }\n      }\n\n      .offer-text {\n        position: absolute;\n        top: 70%;\n        align-items: center;\n        left: 35%;\n        transform: translate(-50%, -50%);\n        font-size: 32px;\n        color: red;\n        font-weight: bold;\n        background-color: white;\n        padding: 5px 10px;\n        border-radius: 5px;\n        animation: zoomInOut 2s infinite;\n      }\n\n      @keyframes zoomInOut {\n        0%,\n        100% {\n          transform: translate(-50%, -50%) scale(1);\n        }\n        50% {\n          transform: translate(-50%, -50%) scale(1.2);\n        }\n      }\n\n      /* Ashtavinayak Div (default styling for large screens) */\n      .Ashtavinayak-div {\n        top: 10px;\n        bottom: 10px;\n        background-color:firebrick;\n        padding: 5px 10px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        text-align: center;\n\n      }\n\n      .Ashtavinayak-div p {\n        font-size: 26px; \n        margin: 0;\n        padding-bottom: 15px;\n        color: white;\n        animation: zoomInOut 1.5s infinite;\n      }\n      @keyframes zoomInOut {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n\n      .Ashtavinayak-div button {\n        background-color: #6200ea;\n        color: white;\n        border: none;\n        padding: 10px 20px;\n        border-radius: 5px;\n        cursor: pointer;\n        font-size: 14px;\n        transition: background-color 0.3s;\n        \n      }\n\n      .Ashtavinayak-div button:hover {\n        background-color: #3700b3;\n      }\n\n      /* Media Queries for Responsive Design */\n\n      /* For medium screens like tablets */\n      @media screen and (max-width: 1024px) {\n        /* .Ashtavinayak-div {\n          top: 15px; \n          right: 15px; \n          padding: 4px 8px;\n        } */\n\n        .Ashtavinayak-div p {\n          font-size: 20px; \n        }\n\n        .Ashtavinayak-div button {\n          font-size: 13px; \n          padding: 8px 16px; \n        }\n      }\n\n      /* For small screens like mobile phones */\n      @media screen and (max-width: 768px) {\n        .Ashtavinayak-div {\n         \n          padding: 4px 6px; \n          background-color: #ff6347; \n        }\n\n        .Ashtavinayak-div p {\n          font-size: 16px; \n        }\n\n        .Ashtavinayak-div button {\n          font-size: 12px; \n          padding: 6px 12px; \n        }\n      }\n      @media screen and (max-width: 480px) {\n  .Ashtavinayak-div p {\n    font-size: 14px; /* Further reduce for small screens */\n  }\n}\n\n      /* Scrolling Event Bar */\n      .event-bar,\n      .event-bar2 {\n        position: relative;\n        z-index: 10; /* Adjust this value as needed */\n      }\n\n      .event-bar {\n        background-color:black;\n        width: 100%;\n        height: 55px;\n        display: flex;\n        align-items: center;\n        font-size: 18px;\n        font-weight: bold;\n        color: white;\n        overflow: hidden;\n        margin-bottom: 10px;\n        /* top:300px; */\n      }\n      .event-bar {\n        top: 0; /* Or adjust this to the desired value */\n      }\n\n      .event-bar div {\n        display: inline-block;\n        padding: 0 50px;\n        animation: scrollEvent 15s linear infinite;\n      }\n\n      @keyframes scrollEvent {\n        0% {\n          transform: translateX(100%);\n        }\n        100% {\n          transform: translateX(-100%);\n        }\n      }\n\n      .event-bar2 button {\n        border-radius: 20px;\n        padding: 10px 20px;\n        font-size: 16px;\n        background-color: #000;\n        color: white;\n        border: none;\n        cursor: pointer;\n        animation: glow 1.5s infinite alternate;\n        position: fixed;\n        top:20%;\n         right:2%;\n         background-color: blue;\n      }\n\n      .event-bar2 button:hover {\n        background-color: #30bb37;\n      }\n\n      @keyframes glow {\n        0%,\n        100% {\n          box-shadow: 0 0 10px rgba(255, 255, 255, 0.7),\n            0 0 20px rgba(255, 255, 255, 0.5);\n        }\n        50% {\n          box-shadow: 0 0 20px rgba(0, 255, 0, 0.7),\n            0 0 40px rgba(0, 255, 0, 0.5);\n        }\n      }\n\n      /* Responsive Design */\n      @media screen and (max-width: 768px) {\n        .top-image {\n          height: 400px;\n        }\n\n        .overlay-para {\n          font-size: 24px;\n          top: 20%;\n        }\n\n        .overlay-text {\n          font-size: 16px;\n          top: 55%;\n        }\n\n        .offer-text {\n          font-size: 20px;\n          top: 90%;\n          align-items: center;\n        }\n\n        .event-bar {\n          font-size: 14px;\n          height: 50px;\n          top: 0px;\n        }\n\n        .event-bar2 button {\n          font-size: 12px;\n          padding: 8px 14px;\n          position: fixed;\n        }\n      }\n\n      @media screen and (max-width: 480px) {\n        .top-image {\n          height: 300px;\n        }\n\n        .overlay-para {\n          font-size: 18px;\n        }\n\n        .overlay-text {\n          font-size: 12px;\n        }\n\n        .offer-text {\n          font-size: 16px;\n        }\n\n        .event-bar {\n          font-size: 10px;\n          height: 38px;\n        }\n\n        .event-bar2 button {\n          font-size: 12px;\n          padding: 6px 12px;\n          position: fixed;\n        top:30%;\n         right:10%\n        }\n      }\n\n      /* Main container styles */\n      .container {\n        width: 90%;\n        max-width: 1200px;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 15px;\n        padding: 15px;\n        margin-top: -5px;\n        overflow-x: auto;\n        scroll-snap-type: x mandatory;\n        flex-wrap: wrap; /* Ensure items wrap to the next line on small screens */\n      }\n\n      /* Individual package card styles */\n      .package-card {\n        background-color: #fff;\n        padding: 20px;\n        border-radius: 10px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n        transition: transform 0.3s ease, box-shadow 0.3s ease;\n        text-align: center;\n        width: 230px; /* Default width for larger screens */\n        scroll-snap-align: start;\n        margin-bottom: 20px;\n      }\n\n      .package-card:hover {\n        transform: translateY(-10px);\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n      }\n\n      .package-card img {\n        width: 100%;\n        height: 200px;\n        object-fit: cover;\n        border-radius: 10px;\n      }\n\n      .package-card h3 {\n        font-size: 24px;\n        color: #ff6f00;\n        margin-top: 20px;\n      }\n\n      .package-card p {\n        font-size: 18px;\n        color: #555;\n        margin: 10px 0;\n      }\n\n      .package-card .price {\n        font-size: 22px;\n        font-weight: bold;\n        color: #ff5722;\n        margin-top: 15px;\n      }\n\n      .package-card .btn {\n        background-color: #ff6f00;\n        color: white;\n        padding: 10px 20px;\n        border: none;\n        border-radius: 5px;\n        font-size: 16px;\n        cursor: pointer;\n        margin-top: 20px;\n        text-decoration: none;\n      }\n\n      .package-card .btn:hover {\n        background-color: #ff8c00;\n      }\n\n\n      /* Modal Styles */\n      .modal {\n        display: none;\n        position: fixed;\n        z-index: 4;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        background-color: rgba(0, 0, 0, 0.5);\n        justify-content: center;\n        align-items: center;\n      }\n\n      .modal-content {\n        background-color: white;\n        padding: 20px;\n        border-radius: 10px;\n        width: 60%;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      }\n\n      .modal-content input,\n      .modal-content select {\n        width: 100%;\n        padding: 10px;\n        margin-bottom: 15px;\n        border: 1px solid #ccc;\n        border-radius: 5px;\n      }\n\n      .modal-content button {\n        background-color: #ff6f00;\n        color: white;\n        padding: 10px 20px;\n        border: none;\n        border-radius: 5px;\n        width: 100%;\n        cursor: pointer;\n      }\n\n      .modal-content button:hover {\n        background-color: #ff8c00;\n      }\n\n      .close {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        color: #aaa;\n        font-size: 30px;\n        font-weight: bold;\n      }\n\n      .close:hover,\n      .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n      }\n\n      \n\n      /* Mobile and Tablet View */\n      @media (max-width: 768px) {\n        .container {\n          flex-direction: row;\n          padding: 10px;\n          align-items: center;\n          justify-content: flex-start;\n          overflow-x: scroll;\n          width: 100%;\n          gap: 10px;\n        }\n\n        .package-card {\n          width: 100vw; /* Make each package card take full width */\n          margin-right: 10px;\n          scroll-snap-align: start;\n        }\n\n       \n        .modal-content {\n          width: 90%; /* Make modal content responsive */\n        }\n\n        .package-card h3 {\n          font-size: 22px;\n        }\n\n        .package-card p {\n          font-size: 16px;\n        }\n\n        .package-card .price {\n          font-size: 18px;\n        }\n\n        .package-card .btn {\n          font-size: 14px;\n          padding: 8px 16px;\n        }\n        .modal-content {\n    width: 40%; /* Make modal content narrower for tablets */\n  }\n      }\n\n      /* Mobile View (Very Small Devices) */\n      @media (max-width: 480px) {\n        .package-card {\n          width: 100vw; /* Make the package card take up full width */\n          margin-right: 10px;\n        }\n\n        .package-card h3 {\n          font-size: 18px;\n        }\n\n        .package-card p {\n          font-size: 14px;\n        }\n\n        .package-card .price {\n          font-size: 16px;\n        }\n\n        .package-card .btn {\n          font-size: 12px;\n          padding: 8px 14px;\n        }\n\n       \n\n        .modal-content {\n          width: 70%;\n        }\n      }\n      \n\n      /* Floating WhatsApp and Call Buttons */\n   /* Floating WhatsApp and Call Buttons */\n.floating-buttons {\n  position: fixed;\n  bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between; /* Align buttons to opposite ends */\n  padding: 0 20px; /* Add some padding on the sides */\n  z-index: 1000;\n}\n\n.floating-buttons a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 60px;\n  background-color: white;\n  border-radius: 50%;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  transition: transform 0.3s ease;\n  margin-right: 15px;\n}\n\n.floating-buttons a img {\n  width: 70%;\n  height: 70%;\n  object-fit: cover; /* Maintain icon proportions */\n}\n\n.floating-buttons a:hover {\n  transform: scale(1.1);\n}\n\n.floating-buttons .call-button {\n  background-color: #34b7f1;\n}\n\n/* Media Query for Smaller Screens */\n@media (max-width: 768px) {\n  .floating-buttons {\n    padding: 0 10px; /* Reduce padding for smaller screens */\n    flex-direction: row; /* Keep buttons in one line horizontally */\n    align-items: center; /* Vertically center the buttons */\n    justify-content: space-evenly; /* Spread the buttons evenly */\n  }\n\n  .floating-buttons a {\n    width: 50px; /* Reduce button size */\n    height: 50px;\n    margin-right: 10px; /* Space between buttons */\n  }\n\n  .floating-buttons a img {\n    width: 60%; /* Scale down icons */\n    height: 60%;\n    margin: 0; /* Ensure no extra margin around images */\n  }\n\n  .floating-buttons a.call-button {\n    margin-bottom: 0; /* Remove any extra bottom margin */\n  }\n}\n\n/* For very small screens (max-width: 360px) */\n@media (max-width: 360px) {\n  .floating-buttons {\n    padding: 0 5px; /* Even smaller padding for very narrow screens */\n  }\n\n  .floating-buttons a {\n    width: 45px; /* Further reduce button size */\n    height: 45px;\n  }\n\n  .floating-buttons a img {\n    width: 50%; /* Scale down icons more */\n    height: 50%;\n  }\n}\n\n     /* General Footer Styling */\n /* General Footer Styling */\n .footer {\n  background-color: #2f2f2f;\n  color: #fff;\n  padding: 30px 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.footer-content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.footer-section {\n  flex: 1;\n  padding: 10px;\n  max-width: 23%;\n  margin: 15px;\n}\n.footer-section img {\n  width:50%;\n  height: 30%;\n  align-items: center;\n  margin-left: 15%;\n}\n\n.footer-section h3 {\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n  text-align: justify;\n}\n\n.footer-section ul {\n  list-style: none;\n  padding-left: 0;\n  text-align: justify;\n}\n\n.footer-section ul li {\n  margin: 5px 0;\n  text-align: justify;\n}\n\n.footer-section ul li a {\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n.footer-logo {\n  width: 270px;\n  height: auto;\n  margin-bottom: 15px;\n}\n\n.footer-section p {\n  font-size: 0.9em;\n  text-align: justify;\n}\n\n.footer-section a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.footer-section a:hover {\n  text-decoration: underline;\n}\n\n/* Responsive Styles */\n@media (max-width: 1024px) {\n  .footer-content {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .footer-section {\n    max-width: 100%;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .footer-logo {\n    width: 200px;\n  }\n}\n.footer-section img {\n  width:50%;\n  height: 30%;\n  align-items: center;\n  margin-left: 15%;\n}\n\n@media (max-width: 768px) {\n  .footer-section h3 {\n    font-size: 1em;\n  }\n\n  .footer-section ul li {\n    font-size: 0.9em;\n  }\n\n  .footer-section p {\n    font-size: 0.8em;\n  }\n\n  .footer-logo {\n    width: 180px;\n  }\n}\n.footer-section img {\n  width:40%;\n  height: 30%;\n  align-items: center;\n  margin-left: 15%;\n}\n\n     \n    "
    }}
  />
  <header>
    <div>
      <img src="./images/wtl-logos.png" alt="Ganesha Logo" />
    </div>
    <h1>Mahakumbh Mela</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/About">About Us</a>
      <a href="/TourPackages">Tour Packages</a>
      <a href="/Contact">Contact</a>
    </nav>
  </header>
  {/* Top Image with Overlay Text */}
  <div className="top-image">
    <img
      src="images/Mahakumb.webp"
      alt="Kumbh Mela"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    <div className="overlay-para">
      <p>"महा कुंभ में डुबकी लगाओ, आत्मा को शांति और ज्ञान से सवेरा पाओ।"</p>
      <div className="event-bar2">
        <a href="/Dates">
          <button>Journey Dates</button>
        </a>
      </div>
    </div>
    <div className="overlay-text">
      <span className="word">Maha</span>
      <span className="word">Kumbh</span>
      <span className="word">Tour</span>
      <span className="word">Packages</span>
      <span className="word">2025</span>
    </div>
    {/* New additional text section */}
    <div className="offer-text">1 FREE Ujjain Trip!</div>
    {/*Black Event Bar*/}
    {/* <div class="event-bar2">
  <a href="dates.html">
    <button>Journey Dates</button>
  </a>
</div>
    </div> */}
    <div className="Ashtavinayak-div">
    <p>
      <strong>Book the Ashtavinayak Tour!</strong>
    </p>
    <Link to="/Ashtavinayak">
      <button>Book Seat</button>
    </Link>
  </div>
    {/* Scrolling Event Bar */}
    <div className="event-bar">
      <div>Mahakumb Mela - 2025</div>
      <div>Ashtavinayak - 2025</div>
      <div>Kokan - 2025</div>
      <div>Goa - 2025</div>
    </div>
    {/*Whatsapp and calling button*/}
    {/* Floating WhatsApp and Call buttons */}
    <div className="floating-buttons">
      <a
        href="https://wa.me/914530054"
        target="_blank"
        className="whatsapp-button"
        title="Chat with us on WhatsApp"
      >
        <img src="./images/whatsapp.jpg" alt="WhatsApp" />
      </a>
      <a href="tel:+914530054" className="call-button" title="Call us">
        <img
          src="https://png.pngtree.com/png-clipart/20230320/original/pngtree-circle-phone-call-icon-in-black-color-png-image_8997757.png"
          alt="Call"
        />
      </a>
    </div>
    <div className="container">
      {/* AC Sleeper Package */}
      <div className="package-card">
        <img src="images/1.jpg" alt="AC Sleeper" />
        <h3>AC Sleeper</h3>
        <p>Comfortable AC sleeper bus for peaceful journey</p>
        <p style={{ color: "rgb(9, 54, 255)" }}>
          FREE! Breakfast, Water Bottle and 1 Tour Guide
        </p>
        <p className="price">Rs. 10,999</p>
        <button className="btn" onclick="openModal()">
          Book Now
        </button>
      </div>
      {/* Non-AC Sleeper Package */}
      <div className="package-card">
        <img src="images/2.jpg" alt="Non-AC Sleeper" />
        <h3>Non-AC Sleeper</h3>
        <p>Budget-friendly, Non-Air-conditioned sleeper option</p>
        <p style={{ color: "rgb(9, 54, 255)" }}>
          FREE! Breakfast, Water Bottle and 1 Tour Guide
        </p>
        <p className="price">Rs. 8,999</p>
        <button className="btn" onclick="openModal()">
          Book Now
        </button>
      </div>
      {/* AC Seater Package */}
      <div className="package-card">
        <img src="images/33.jpg" alt="AC Seater" />
        <h3>AC Seater</h3>
        <p>Air-conditioned seater for a relaxing journey</p>
        <p style={{ color: "rgb(9, 54, 255)" }}>
          FREE! Breakfast, Water Bottle and 1 Tour Guide
        </p>
        <p className="price">Rs. 7,999</p>
        <button className="btn" onclick="openModal()">
          Book Now
        </button>
      </div>
      {/* Non-AC Seater Package */}
      <div className="package-card">
        <img src="images/4.jpg" alt="Non-AC Seater" />
        <h3>Non-AC Seater</h3>
        <p>Non-Air-conditioned seater for those looking to save</p>
        <p style={{ color: "rgb(9, 54, 255)" }}>
          FREE! Breakfast, Water Bottle and 1 Tour Guide
        </p>
        <p className="price">Rs. 6,999</p>
        <button className="btn" onclick="openModal()">
          Book Now
        </button>
      </div>
    </div>
    {/* Modal for Enquiry Form */}
    <div id="enquiryModal" className="modal">
      <div className="modal-content">
        <span className="close" onclick="closeModal()">
          ×
        </span>
        <h2>Enquiry Form</h2>
        <form id="enquiryForm" onsubmit="sendToWhatsApp(event)">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required="" />
          <label htmlFor="contact">Contact No.:</label>
          <input type="text" id="contact" name="contact" required="" />
          <label htmlFor="departure">Date of Departure:</label>
          <input type="date" id="departure" name="departure" required="" />
          {/* New Return Date field */}
          <label htmlFor="returnDate">Return Date:</label>
          <input type="date" id="returnDate" name="returnDate" required="" />
          {/* New Pickup Location field */}
          <label htmlFor="pickupLocation">Pickup Location:</label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            required=""
          />
          <label htmlFor="people">No. of People:</label>
          <input type="number" id="people" name="people" required="" />
          <label htmlFor="package">Package You Are Interested In:</label>
          <select id="package" name="package" required="">
            <option value="AC Sleeper">AC Sleeper</option>
            <option value="Non-AC Sleeper">Non-AC Sleeper</option>
            <option value="AC Seater">AC Seater</option>
            <option value="Non-AC Seater">Non-AC Seater</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    {/* Footer */}
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src="./images/2.jpg"
            alt="Ashtavinayak Tour"
            className="footer-logo"
          />
          <p>
            We offer The Maha Kumbh Mela is a massive Hindu pilgrimage held
            every 12 years at four cities. Devotees bathe in sacred rivers to
            cleanse sins. The event includes grand processions, spiritual talks,
            and cultural activities. Millions gather to celebrate India’s rich
            spiritual heritage.
          </p>
        </div>
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>Ujjan</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>    
              <a href="/About">About Us</a>
            </li>
            <li>
              <a href="/TourPackages">Tour Packages</a>
            </li>
            <li>
              <a href="/Contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>
            Office No. 009, Wing-A, Downtown Rd, CityVista, Kharadi, Pune,
            Maharashtra 411014
          </p>
          <p>Phone: +91-914530054 </p>
          <p>
            Email:{" "}
            <a href="mailto:contact@worldtriplink.com">
              contact@worldtriplink.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</>

  )
}
export default Home;