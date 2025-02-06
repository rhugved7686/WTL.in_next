import React from 'react'

export const Ashtavinayak = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ashtavinayak Tour</title>
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      body {\n        font-family: Arial, sans-serif;\n        margin: 0px;\n        padding: 0px;\n        background-size: cover;\n        color: #333;\n        background-color: white;\n      }\n      \n      header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: beige;\n  color: red;\n  flex-wrap: wrap; /* Allows wrapping for smaller screens */\n}\n\nheader img {\n  width: 100px; /* Adjust logo size for responsiveness */\n}\n\nheader h1 {\n  font-size: 1.5rem;\n  margin-left: 10px;\n  text-align: center;\n}\n\nnav {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\nnav a {\n  color: black;\n  text-decoration: none;\n  font-size: 1rem;\n  transition: color 0.3s ease;\n}\n\nnav a:hover {\n  color: #ff5722;\n  text-decoration: none;\n}\n\n/* Responsive Styles */\n@media (max-width: 768px) {\n  header {\n    flex-direction: column; /* Stack items vertically */\n    align-items: center; /* Center align items */\n    text-align: center;\n  }\n\n  header img {\n    width: 80px; /* Smaller logo for tablets */\n  }\n\n  header h1 {\n    font-size: 1.2rem; /* Reduce font size */\n    margin-left: 0; /* Center-align headline */\n    margin-top: 10px;\n  }\n\n  nav {\n    justify-content: center;\n    margin-top: 10px;\n  }\n\n  nav a {\n    font-size: 0.9rem; /* Slightly smaller links */\n  }\n}\n\n@media (max-width: 480px) {\n  header {\n    padding: 10px; /* Reduce padding on smaller devices */\n  }\n\n  header img {\n    width: 60px; /* Smaller logo for mobile */\n  }\n\n  header h1 {\n    font-size: 1rem; /* Further reduce headline font size */\n  }\n\n  nav {\n    flex-direction: column; /* Stack navigation links vertically */\n    gap: 10px; /* Reduce spacing between links */\n  }\n\n  nav a {\n    font-size: 0.85rem; /* Adjust font size for smaller screens */\n  }\n}\n\n\n      .first-img {\n        position: relative;\n        width: 100%;\n        height: 110vh;\n        overflow: hidden;\n      }\n\n      .first-img img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n\n       .booking-form {\n        position: absolute;\n        top: 1%;\n        bottom: 3%;\n        right: 5%;\n        background: rgba(255, 255, 255, 0.8);\n      \n        padding: 20px;\n        border-radius: 10px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        width: 350px;\n        z-index: 10;\n      }\n\n      .booking-form h3 {\n        top:1%;\n        bottom: 5%;\n        padding: 1px;\n        text-align: center;\n        color: darkblue;\n        margin-bottom: 10px;\n      }\n      .booking-form label {\n        display: block;\n        margin-bottom: 5px;\n        font-weight: bold;\n        color: black;\n      }\n      .booking-form input {\n        width: 100%;\n        padding: 5px;\n        margin-bottom: 10px;\n        border: 1px solid #ccc;\n        border-radius: 5px;\n        box-sizing: border-box;\n      }\n\n      .booking-form button {\n        width: 100%;\n        padding: 5px;\n        background-color: darkblue;\n        color: white;\n        border: none;\n        border-radius: 5px;\n        font-size: 1rem;\n        cursor: pointer;\n        margin-top: 5%;\n\n      }\n\n      .booking-form button:hover {\n        background-color: #0056b3;\n      }\n\n      /* Floating Icons Container */\n.floating-icons-container {\n  position: fixed;\n  bottom: 20px; /* Adjust positioning */\n  width: 100%; /* Take full width of the viewport */\n  display: flex;\n  justify-content: space-between; /* Align icons to left and right */\n  padding: 0 20px; /* Add padding for spacing */\n  z-index: 1000;\n}\n\n/* Individual Icon Styling */\n.floating-icons img,\n.floating-icons2 img {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.floating-icons img:hover,\n.floating-icons2 img:hover {\n  transform: scale(1.1);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n\n/* Responsive for Screens Below 450px */\n@media (max-width: 450px) {\n  .floating-icons-container {\n    bottom: 10px; /* Adjust positioning for smaller screens */\n    padding: 0 10px; /* Reduce padding for smaller screens */\n  }\n\n  .floating-icons img,\n  .floating-icons2 img {\n    width: 40px; /* Reduce icon size */\n    height: 40px;\n  }\n}\n\n\n.container {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.places {\n  margin-top: 5%;\n}\n\n.places h2 {\n  margin-bottom: 20px;\n  color: black;\n  background-color: rgba(255, 228, 196, 0.8); /* Adjusted for clarity */\n  border-radius: 5px;\n  font-weight: 900;\n}\n\n.places h2:hover {\n  color: darkblue;\n  transform: scale(1.2);\n}\n\n.circle-container {\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap; /* Ensure circles wrap to the next row on smaller screens */\n  margin: 50px 0;\n  gap: 20px; /* Add spacing between rows on small screens */\n}\n\n.line {\n  position: absolute;\n  height: 5px;\n  background-color: #ff5722;\n  width: 90%;\n  top: 50%;\n  left: 5%;\n  z-index: 0;\n}\n\n.circle {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid red;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n  transition: transform 0.3s ease;\n}\n\n.circle img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.circle:hover {\n  transform: scale(1.2);\n}\n\n.tooltip {\n  position: absolute;\n  bottom: 15px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: red;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-size: 0.60rem;\n  font-weight: bold;\n  opacity: 0; /* Hidden by default */\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  white-space: nowrap;\n}\n\n.circle:hover .tooltip {\n  opacity: 1; /* Show tooltip on hover */\n}\n\n/* Responsive Styles */\n@media (max-width: 768px) {\n  .circle-container {\n    justify-content: center;\n    gap: 15px; /* Adjust spacing for smaller screens */\n  }\n  .circle {\n    width: 100px;\n    height: 100px; /* Smaller circles for mobile */\n  }\n  .tooltip {\n    font-size: 0.5rem; /* Adjust tooltip font size */\n  }\n}\n\n@media (max-width: 450px) {\n  .circle-container {\n    flex-direction: column; /* Stack circles vertically on very small screens */\n  }\n  .line {\n    display: none; /* Hide the line for very small screens */\n  }\n  .circle {\n    width: 90px;\n    height: 90px; /* Further reduce circle size for mobile */\n  }\n  .tooltip {\n    font-size: 0.45rem; /* Further adjust tooltip font size */\n  }\n}\n      body {\n        font-family: Arial, sans-serif;\n        margin: 0px;\n        padding: 0px;\n        background-size: cover;\n        color: #333;\n        background-color: white;\n      }\n      \n      header {\n            position: relative;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 20px 40px;\n            background-color: beige;\n            color: red;\n            /* background: url('./images/wltheader.webp'); */\n        }\n      header img {\n        width: 120px;\n      }\n      header h1 {\n            font-size: 1.5rem;\n            margin-left: 10%;\n        /* color: red;\n        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n        margin-left: 20%;\n        text-align: center; */\n      }\n      nav {\n            display: flex;\n            gap: 20px;\n        }\n        nav a {\n            color: black;\n            text-decoration: none;\n            font-size: 1rem;\n            transition: color 0.3s ease;\n        }\n        nav a:hover {\n            color: #ff5722;\n            text-decoration: none;\n        }\n\n        .first-img {\n  position: relative;\n  width: 100%;\n  height: auto; /* Adjust height for responsiveness */\n  overflow: hidden;\n}\n\n.first-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.booking-form {\n  position: absolute;\n  top: 10%;\n  right: 5%;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  width: 350px;\n  z-index: 10;\n  max-height: calc(100% - 40px); /* Ensure form fits the screen */\n  overflow-y: auto; /* Scroll if content exceeds viewport */\n}\n\n.booking-form h3 {\n  text-align: center;\n  color: darkblue;\n  margin-bottom: 10px;\n}\n\n.booking-form label {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n  color: black;\n}\n\n.booking-form input,\n.booking-form select {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n\n.booking-form button {\n  width: 100%;\n  padding: 10px;\n  background-color: darkblue;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.booking-form button:hover {\n  background-color: #0056b3;\n}\n\n/* Responsive Styles */\n@media (max-width: 768px) {\n  .booking-form {\n    position: static;\n    margin: 20px auto;\n    width: 90%;\n    transform: translateY(0);\n    box-shadow: none; /* Remove shadow for mobile */\n  }\n\n  .first-img {\n    height: auto;\n  }\n\n  .first-img img {\n    height: auto;\n    object-fit: cover;\n  }\n}\n\n@media (max-width: 480px) {\n  .booking-form {\n    padding: 15px;\n    width: 90%;\n    margin: 10px auto;\n    max-height: calc(100vh - 20px); /* Ensure full visibility on smaller screens */\n    overflow-y: auto; /* Add scroll for small screens */\n  }\n\n  .booking-form input,\n  .booking-form select {\n    padding: 8px;\n  }\n\n  .booking-form button {\n    padding: 8px;\n    font-size: 0.9rem;\n  }\n\n  .booking-form h3 {\n    font-size: 1.2rem;\n  }\n}\n\n\n      /* Floating Icons Container */\n.floating-icons-container {\n  position: fixed;\n  bottom: 20px; /* Adjust positioning */\n  width: 100%; /* Take full width of the viewport */\n  display: flex;\n  justify-content: space-between; /* Align icons to left and right */\n  padding: 0 20px; /* Add padding for spacing */\n  z-index: 1000;\n}\n\n/* Individual Icon Styling */\n.floating-icons img,\n.floating-icons2 img {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.floating-icons img:hover,\n.floating-icons2 img:hover {\n  transform: scale(1.1);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n\n/* Responsive for Screens Below 450px */\n@media (max-width: 450px) {\n  .floating-icons-container {\n    bottom: 10px; /* Adjust positioning for smaller screens */\n    padding: 0 10px; /* Reduce padding for smaller screens */\n  }\n\n  .floating-icons img,\n  .floating-icons2 img {\n    width: 40px; /* Reduce icon size */\n    height: 40px;\n  }\n}\n\n\n.container {\n  width: 100%;\n  max-width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.places {\n  margin-top: 5%;\n}\n\n.places h2 {\n  margin-bottom: 20px;\n  color: black;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 5px;\n  font-weight: 900;\n}\n\n.places h2:hover {\n  color: darkblue;\n  transform: scale(1.2);\n}\n\n.circle-container {\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 50px 0;\n  flex-wrap: wrap; /* Ensures proper wrapping on smaller screens */\n}\n\n.line {\n  position: absolute;\n  height: 5px;\n  background-color: #ff5722;\n  width: 90%;\n  top: 50%;\n  left: 5%;\n  z-index: 0;\n}\n\n.circle {\n  width: 130px;\n  height: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid red;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background-color: white;\n  transition: transform 0.3s ease;\n  display: flex;\n  flex-direction: column; /* For proper text alignment in mobile */\n  align-items: center;\n}\n\n.circle img {\n  width: 60%;\n  height: 70%;\n  object-fit: cover;\n}\n\n.circle:hover {\n  transform: scale(1.2);\n}\n\n.tooltip {\n  position: absolute;\n  bottom: 20px; /* Tooltip shows below the circle */\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: red;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-size: 0.65rem;\n  opacity: 0; /* Hidden by default for larger screens */\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  white-space: nowrap;\n}\n\n.circle:hover .tooltip {\n  opacity: 1; /* Tooltip appears on hover for larger screens */\n}\n\n/* Responsive Styles */\n@media (max-width: 450px) {\n  .tooltip {\n    position: static; /* Position tooltip as a static element */\n    transform: none; /* No translation */\n    background-color: transparent; /* Remove background for mobile */\n    color: black; /* Make the text color black */\n    opacity: 1; /* Always show the text in mobile view */\n    padding: 0; /* Remove padding */\n    text-align: center;\n    margin-top: 10px; /* Add space between circle and text */\n    font-size: 0.7rem; /* Adjust font size for readability */\n  }\n  \n  .circle {\n    width: 100px;\n    height: 110px;\n    margin-bottom: 20px; /* Add spacing for better layout */\n  }\n\n  .circle img {\n    width: 70%;\n    height: 70%;\n  }\n\n  .circle-container {\n    flex-direction: column; /* Stack circles vertically */\n    gap: 15px; /* Add space between rows */\n  }\n}\n\n\n      .book-tour {\n  color: darkblue;\n  display: flex;\n  justify-content: center; /* Center-align horizontally */\n  text-align: center; /* Center-align text */\n  margin: 20px auto; /* Add vertical spacing and center horizontally */\n  padding: 10px; /* Add padding for spacing */\n  max-width: 90%; /* Limit the maximum width */\n}\n\n/* Responsive Font Sizes */\n.book-tour h1 {\n  font-size: 2rem; /* Default font size */\n  line-height: 1.5; /* Improve readability */\n}\n\n/* Tablet and smaller laptop screens */\n@media (max-width: 768px) {\n  .book-tour h1 {\n    font-size: 1.8rem; /* Slightly smaller font */\n  }\n}\n\n/* Mobile screens */\n@media (max-width: 450px) {\n  .book-tour h1 {\n    font-size: 1.5rem; /* Smaller font for mobile screens */\n    line-height: 1.4; /* Adjust line height for compact space */\n  }\n}\n\n      /* General Styles */\n.container2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n.section {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  margin-right: 10px;\n  flex-wrap: wrap; /* Ensure sections stack on smaller screens */\n}\n\n.section img {\n  width: 100%;\n  max-width: 400px;\n  height: auto;\n  margin: 0 20px;\n}\n\n.info {\n  max-width: 600px;\n  flex: 1;\n}\n\n\n\n\n      .book-tour {\n  color: darkblue;\n  display: flex;\n  justify-content: center; /* Center-align horizontally */\n  text-align: center; /* Center-align text */\n  margin: 20px auto; /* Add vertical spacing and center horizontally */\n  padding: 10px; /* Add padding for spacing */\n  max-width: 90%; /* Limit the maximum width */\n}\n\n/* Responsive Font Sizes */\n.book-tour h1 {\n  font-size: 2rem; /* Default font size */\n  line-height: 1.5; /* Improve readability */\n}\n\n/* Tablet and smaller laptop screens */\n@media (max-width: 768px) {\n  .book-tour h1 {\n    font-size: 1.8rem; /* Slightly smaller font */\n  }\n}\n\n/* Mobile screens */\n@media (max-width: 450px) {\n  .book-tour h1 {\n    font-size: 1.5rem; /* Smaller font for mobile screens */\n    line-height: 1.4; /* Adjust line height for compact space */\n  }\n}\n\n      /* General Styles */\n.container2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n.section {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  margin-right: 10px;\n  flex-wrap: wrap; /* Ensure sections stack on smaller screens */\n}\n\n.section img {\n  width: 100%;\n  max-width: 400px;\n  height: auto;\n  margin: 0 20px;\n}\n\n.info {\n  max-width: 600px;\n  flex: 1;\n}\n\n.info h3 {\n  text-align: center;\n  margin: 0;\n  color: #d35400;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.info h3:hover {\n  color: blue;\n  transform: translate(0.9rem);\n}\n\n.info p {\n  line-height: 2.1;\n  padding: 20px;\n  text-align: justify;\n  font-size: 1rem;\n}\n\n/* Responsive Styles */\n@media (max-width: 1200px) {\n  /* Laptop view adjustments */\n  .section img {\n    width: 40%;\n    height: auto;\n  }\n\n  .info {\n    max-width: 500px;\n  }\n}\n\n@media (max-width: 768px) {\n  /* Tablet and mobile view adjustments */\n  .container2 {\n    padding: 10px;\n  }\n\n  .section {\n    flex-direction: column; /* Stack content vertically */\n    text-align: center;\n  }\n\n  .section img {\n    width: 80%; /* Ensure images take up more space */\n    margin: 10px 0;\n  }\n\n  .info {\n    max-width: 100%;\n  }\n\n  .info h3 {\n    font-size: 1.2rem; /* Reduce font size on smaller screens */\n  }\n\n  .info p {\n    font-size: 0.9rem; /* Adjust text size for readability */\n  }\n}\n\n/* Mobile view */\n@media (max-width: 480px) {\n  .info h3 {\n    font-size: 1rem; /* Even smaller heading font for mobile */\n  }\n\n  .info p {\n    font-size: 0.85rem; /* Adjust paragraph font size */\n    padding: 10px;\n  }\n}\n\n       /* General Container Styling */\n.container3,\n.container4 {\n  margin-left: 20px;\n  margin-right: 40px;\n  margin-bottom: 50px;\n}\n\n.card {\n  position: relative;\n  width: 300px;\n  height: auto;\n  margin: 10px;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: beige;\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  border-radius: 8px;\n}\n\n.card h1 {\n  font-size: 25px;\n  color: red;\n  margin-top: 15px;\n  text-align: center;\n}\n\n.card p {\n  font-size: 15px;\n  text-align: justify;\n  margin: 5px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n/* Media Queries for Responsive Design */\n\n/* For screens smaller than 1024px (Tablets and smaller laptops) */\n@media (max-width: 1024px) {\n  .container3, .container4 {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .card {\n    width: 100%; /* Cards take full width on smaller screens */\n    margin: 15px 0; /* Space between cards */\n  }\n\n  .card img {\n    height: 180px; /* Adjust image height on smaller screens */\n  }\n\n  .card h1 {\n    font-size: 22px; /* Adjust font size for smaller screens */\n  }\n\n  .card p {\n    font-size: 14px; /* Adjust paragraph font size */\n  }\n\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; /* Center the cards */\n  }\n\n  .col-md-3 {\n    width: 50%; /* Two cards per row */\n  }\n}\n\n/* For screens smaller than 768px (Mobile Devices) */\n@media (max-width: 768px) {\n  .card {\n    width: 100%; /* Cards take full width on mobile */\n    margin: 20px 0; /* Space between cards */\n  }\n\n  .card img {\n    height: 150px; /* Adjust image height for mobile screens */\n  }\n\n  .card h1 {\n    font-size: 20px; /* Adjust font size for mobile */\n  }\n\n  .card p {\n    font-size: 13px; /* Adjust font size for mobile */\n  }\n\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; /* Center the cards */\n  }\n\n  .col-md-3 {\n    width: 100%; /* One card per row */\n  }\n}\n\n\n     /* General Footer Styling */\n.footer {\n  background-color: #2f2f2f;\n  color: #fff;\n  padding: 30px 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.footer-content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.footer-section {\n  flex: 1;\n  padding: 10px;\n  max-width: 23%;\n  margin: 15px;\n}\n\n.footer-section h3 {\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n  text-align: justify;\n}\n\n.footer-section ul {\n  list-style: none;\n  padding-left: 0;\n  text-align: justify;\n}\n\n.footer-section ul li {\n  margin: 5px 0;\n  text-align: justify;\n}\n\n.footer-section ul li a {\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n.footer-logo {\n  width: 270px;\n  height: auto;\n  margin-bottom: 15px;\n}\n\n.footer-section p {\n  font-size: 0.9em;\n  text-align: justify;\n}\n\n.footer-section a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.footer-section a:hover {\n  text-decoration: underline;\n}\n\n/* Responsive Styles */\n@media (max-width: 1024px) {\n  .footer-content {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .footer-section {\n    max-width: 100%;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .footer-logo {\n    width: 200px;\n  }\n}\n\n@media (max-width: 768px) {\n  .footer-section h3 {\n    font-size: 1em;\n  }\n\n  .footer-section ul li {\n    font-size: 0.9em;\n  }\n\n  .footer-section p {\n    font-size: 0.8em;\n  }\n\n  .footer-logo {\n    width: 180px;\n  }\n}\n\n\n     \n    "
    }}
  />
  <header>
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <img src="./images/wtl-logos.png" alt="Ganesha Logo" />
      {/* <h1>अष्टविनायक यात्रा</h1> */}
    </div>
    <h1 style={{ fontWeight: 800 }}>Ashtavinayak Tour</h1>
    <nav>
      <a href="/Ashtavinayak">Home</a>
      <a href="./AboutAshtavinayak">About Us</a>
      <a href="./TourPackagesAshtavinayak">Tour Packages</a>
      <a href="./ContactAshtavinayak">Contact</a>
    </nav>
  </header>
  <div className="first-img">
    <img src="./images/Background_img.jpg" alt="Ganesha Logo" />
    <div className="booking-form">
      <h3>Book Your Tour</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" required="" />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        placeholder="Enter your phone number"
        required=""
      />
      <label htmlFor="departure">Date of Departure:</label>
      <input type="date" id="departure" name="departure" required="" />
      <label htmlFor="returnDate">Return Date:</label>
      <input type="date" id="returnDate" name="returnDate" required="" />
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
      <button type="button" onclick="submitForm()">
        Submit
      </button>
    </div>
  </div>
  {/* Floating Icons */}
  <div className="floating-icons-container">
    <div className="floating-icons">
      <a
        href="https://wa.me/914530054"
        target="_blank"
        className="whatsapp-button"
        title="Chat with us on WhatsApp"
      >
        <img src="./images/whatsapp.jpg" alt="WhatsApp" />
      </a>
    </div>
    <div className="floating-icons2">
      <a href="tel:+914530054" className="call-button" title="Call us">
        <img src="./images/phoneBlack.png" alt="Phone" />
      </a>
    </div>
  </div>
  <div className="container">
    <div className="places">
      <h2>Explore All 8 Spiritual Places</h2>
      <div className="circle-container">
        <div className="line" />
        <div className="circle">
          <img src="./images/ImgA.jpeg" alt="Place 1" />
          <div className="tooltip">Shri Mayureshwar</div>
        </div>
        <div className="circle">
          <img src="./images/imgB.jpeg" alt="Place 2" />
          <div className="tooltip">Shri Siddhivinayak </div>
        </div>
        <div className="circle">
          <img src="./images/imgC.jpeg" alt="Place 3" />
          <div className="tooltip">Shri Ballaleshwar </div>
        </div>
        <div className="circle">
          <img src="./images/imgD.jpeg" alt="Place 4" />
          <div className="tooltip">Shri Varadvinayak </div>
        </div>
        <div className="circle">
          <img src="./images/imgE.jpeg" alt="Place 5" />
          <div className="tooltip">Shri Chintamani </div>
        </div>
        <div className="circle">
          <img src="./images/imgF.jpeg" alt="Place 6" />
          <div className="tooltip">Shri Girijatmaj </div>
        </div>
        <div className="circle">
          <img src="./images/imgG.jpeg" alt="Place 7" />
          <div className="tooltip">Shri Vigneshwar </div>
        </div>
        <div className="circle">
          <img src="./images/imgH.jpeg" alt="Place 8" />
          <div className="tooltip">Shri Mahaganpati </div>
        </div>
      </div>
    </div>
  </div>
  <div className="book-tour">
    <h1>"अष्टविनायक यात्रा: श्रद्धा के आठ चरण, गणपति के संग पावन सफर!"</h1>
  </div>
  <div>
    <div className="container2">
      {/* First Section */}
      <div className="section">
        <img
          src="./images/ashtavinayak-morgaon-mayureshwar-ganpati-temple.jpeg"
          alt="Shri Mayureshwar"
        />
        <div className="info">
          <h3>Shri Mayureshwar - Morgaon</h3>
          <p>
            Shri Mayureshwar Ganpati is located in Morgaon and is considered the
            starting point of the Ashtavinayak pilgrimage. The idol is believed
            to be self-manifested and is adorned with a cobra hood. It
            represents prosperity and wisdom. The temple is surrounded by a
            beautiful courtyard and intricate carvings.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="info">
          <h3>Shri Siddhivinayak - Siddhatek</h3>
          <p>
            Shri Siddhivinayak Ganpati is situated at Siddhatek and is believed
            to grant success to devotees' endeavors. The idol is unique, with
            the trunk pointing towards the right. It is set on a hillock with a
            scenic river nearby. It is said that Lord Vishnu worshipped this
            Ganpati to defeat the demons Madhu and Kaitabha.
          </p>
        </div>
        <img
          src="./images/Shri Siddhivinayak - Siddhatek.webp"
          alt="Shri Siddhivinayak"
        />
      </div>
      {/* Second Section */}
      <div className="section">
        <img
          src="./images/Ballaleshwar-Pali-Ganpati-Temple.jpg"
          alt="Shri Ballaleshwar"
        />
        <div className="info">
          <h3>Shri Ballaleshwar - Pali</h3>
          <p>
            Shri Ballaleshwar Ganpati is the only temple named after a devotee,
            Ballal. Located in Pali, it is known for its historic significance
            and serene environment. The temple faces east, ensuring the rays of
            the sun illuminate the idol during sunrise.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="info">
          <h3>Shri Varadvinayak - Mahad</h3>
          <p>
            Shri Varadvinayak Ganpati is located in Mahad and is believed to
            grant boons and wishes. The idol was found in a nearby lake and
            enshrined in the temple. It is known for its simplicity and beauty.
            Devotees are allowed to directly touch and worship the idol, which
            is rare in Hindu temples.
          </p>
        </div>
        <img
          src="./images/varadavinayak-temple-7.jpg"
          alt="Shri Varadvinayak"
        />
      </div>
      {/* Repeat for remaining Ashtavinayak Ganpatis */}
      {/* Add additional sections here for Chintamani, Girijatmaj, Vigneshwar, Mahaganpati */}
      <div className="section">
        <img
          src="./images/chintamani-temple-theur-3.jpg"
          alt="Shri Varadvinayak"
        />
        <div className="info">
          <h3>Shri Chintamani - Theur</h3>
          <p>
            Shri Chintamani Temple in Theur, Maharashtra, is one of the revered
            Ashtavinayak temples dedicated to Lord Ganesha. The temple is named
            after the Chintamani jewel, symbolizing the removal of worries and
            granting peace of mind. Lord Ganesha here is believed to have
            retrieved the jewel for Sage Kapila and restored his tranquility.
            The temple has a rich Peshwa-era history, with Madhavrao Peshwa
            seeking divine blessings here. The idol is adorned with precious
            ornaments, creating a serene and spiritual ambiance. Devotees visit
            to seek Lord Ganesha's blessings for mental peace and wisdom.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="info">
          <h3>Shri Girijatmaj - Lenyadri</h3>
          <p>
            Shri Girijatmaj Temple, located in the caves of Lenyadri,
            Maharashtra, is dedicated to Lord Ganesha, worshipped as the son of
            Goddess Parvati (Girija). This unique Ashtavinayak temple is set
            within ancient Buddhist caves, adding historical significance.
            Devotees climb 307 steps to reach the serene hilltop temple. It
            symbolizes the divine bond between mother and child, attracting
            pilgrims seeking blessings for family and strength.
          </p>
        </div>
        <img
          src="./images/Shri Girijatmaj - Lenyadri.jpg"
          alt="Shri Varadvinayak"
        />
      </div>
      <div className="section">
        <img src="./images/shri_vighneshwarNew.jpeg" alt="Shri Varadvinayak" />
        <div className="info">
          <h3>Shri Vigneshwar - Ozar</h3>
          <p>
            Shri Vigneshwar Temple, located in Ozar, Maharashtra, is dedicated
            to Lord Ganesha as the remover of obstacles (Vighnaharta). The
            temple is famous for its exquisite stone carvings, gold-plated dome,
            and a deepmoat around it. Legend states that Lord Ganesha defeated
            the demon Vighnasur here, symbolizing victory over challenges. The
            temple offers a serene and sacred atmosphere, attracting devotees
            seeking success and protection. It is one of the most prominent
            Ashtavinayak temples.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="info">
          <h3> Shri Mahaganpati - Ranjangaon</h3>
          <p>
            Shri Mahaganpati Temple in Ranjangaon is dedicated to Lord Ganesha
            in his supreme and powerful form. It is believed that Lord Shiva
            worshipped Ganesha here before defeating the demon Tripurasura. The
            temple features Peshwa-era architecture and an idol symbolizing
            strength and victory. Devotees visit for blessings of success,
            prosperity, and removal of obstacles.
          </p>
        </div>
        <img
          src="./images/ranjangaon-ganpati-temple.jpg"
          alt="Shri Varadvinayak"
        />
      </div>
    </div>
  </div>
  <div className="container4">
    <h2 className="text-center mt-4">Car Packages</h2>
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <img src="./images/HatchbackCar.webp" alt="AC Bus Tour" />
          <h1 className="card-title text-center mt-2">Hatchback Car</h1>
          <p className="card-text">
            Enjoy a comfortable pilgrimage to the 8 sacred Ganesh temples in an
            air-conditioned bus with luxury seating, refreshments, and a
            knowledgeable guide throughout the journey.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>Price: 10rs/km</strong>
          </p>
          <div style={{ textAlign: "center" }}>
            <a href="./car-packages/Cab1.html">
              <button type="button" className="btn btn-danger">
                View Details
              </button>
            </a>
            <a href="#">
              <button type="button" className="btn btn-primary">
                Book Now
              </button>
            </a>
          </div>{" "}
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src="./images/SedanCar.jpeg" alt="Non-AC Bus Tour" />
          <h1 className="card-title">Sedan Car</h1>
          <p className="card-text">
            Travel with a larger group in a non-AC bus, visiting all 8 Ganesh
            temples. This budget-friendly option ensures a comfortable journey
            with ample space and scenic views along the way.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>Price: 11rs/km</strong>
          </p>
          <div style={{ textAlign: "center" }}>
            <a href="./car-packages/cab2.html">
              <button type="button" className="btn btn-danger">
                View Details
              </button>
            </a>
            <a href="#">
              <button type="button" className="btn btn-primary">
                Book Now
              </button>
            </a>
          </div>{" "}
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src="./images/ertiga car.jpeg" alt="AC Car Tour" />
          <h1 className="card-title">Ertiga</h1>
          <p className="card-text">
            For a more private experience, opt for the air-conditioned car
            package. Visit the 8 sacred Ganesh temples in comfort with your own
            personal driver and flexible schedule.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>Price: 17rs/km</strong>
          </p>
          <div style={{ textAlign: "center" }}>
            <a href="./car-packages/cab3.html">
              <button type="button" className="btn btn-danger">
                View Details
              </button>
            </a>
            <a href="#">
              <button type="button" className="btn btn-primary">
                Book Now
              </button>
            </a>
          </div>{" "}
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src="./images/innova crysta.jpeg" alt="Non-AC Car Tour" />
          <h1 className="card-title">Innova Crysta</h1>
          <p className="card-text">
            For a more private experience, opt for the air-conditioned car
            package. Visit the 8 sacred Ganesh temples in comfort with your own
            personal driver and flexible schedule.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>Price: 20rs/km</strong>
          </p>
          <div style={{ textAlign: "center" }}>
            <a href="./car-packages/cab4.html">
              <button type="button" className="btn btn-danger">
                View Details
              </button>
            </a>
            <a href="#">
              <button type="button" className="btn btn-primary">
                Book Now
              </button>
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  </div>
  <div className="container3">
    <h2 className="text-center mt-4">Bus Packages</h2>
    <div className="row justify-content-center">
      {" "}
      {/* Center the content */}
      <div className="col-md-4">
        {" "}
        {/* Adjust column width */}
        <div className="card mx-auto">
          {" "}
          {/* mx-auto centers the card */}
          <img src="./images/travelsNonAc.jpeg" alt="AC Car Tour" />
          <h1 className="card-title">AC seater</h1>
          <p className="card-text">
            For a more private experience, opt for the air-conditioned car
            package. Visit the 8 sacred Ganesh temples in comfort with your own
            personal driver and flexible schedule.
          </p>
          <p style={{ color: "darkblue" }}>Including all amenities</p>
          <p style={{ textAlign: "center" }}>
            <strong>Price: starting 2999</strong>
          </p>
          <div style={{ textAlign: "center" }}>
            <a href="./bus-packages/AcSeater.html">
              <button type="button" className="btn btn-danger">
                View Details
              </button>
            </a>
            <a href="#">
              <button type="button" className="btn btn-primary">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap JS and dependencies */}
  {/* Footer */}
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <img
          src="./images/wltheader.webp"
          alt="Ashtavinayak Tour"
          className="footer-logo"
        />
        <p>
          We offer Ashtavinayak Tour or Yatra that covers the eight ancient holy
          temples of Ganesha which are situated around Pune: Mayureshwar at
          Morgaon, Siddhivinayak at Siddhatek, Ballaleshwar at Pali,
          Varadavinayak at Mahad, Chintamani Temple at Theur, Girijatmaj at
          Lenyadri, Vighnahar at Ozar, and Mahaganpati at Ranjangaon.
        </p>
      </div>
      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li>Mayureshwar - Morgaon</li>
          <li>Chintamani - Theur</li>
          <li>Siddhivinayak - Siddhatek</li>
          <li>Mahaganapati - Ranjangaon</li>
          <li>Girijatmaj - Lenyadri</li>
          <li>Vigneshwar - Ozar</li>
          <li>Ballaleshwar - Pali</li>
          <li>Varadvinayak - Mahad</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="./AboutAshtavinayak">About Us</a>
          </li>
          <li>
            <a href="./TourPackagesAshtavinayak">Tour Packages</a>
          </li>
          <li>
            <a href="./ContactAshtavinayak">Contact Us</a>
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
</>
  )
}
