import React from 'react'

export const KumbhContact = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      background-size: cover;\n      color: #333;\n      background-color: white;\n    }\n\n    header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 20px;\n      background-color: beige;\n    }\n\n    header img {\n      width: 100px;\n    }\n\n    header h1 {\n      font-size: 1.5rem;\n      font-weight: bold;\n      text-align: center;\n      flex: 1;\n    }\n\n    nav {\n      display: flex;\n      gap: 20px;\n    }\n\n    nav a {\n      color: black;\n      text-decoration: none;\n      font-size: 1rem;\n      transition: color 0.3s ease;\n    }\n\n    nav a:hover {\n      color: #ff5722;\n    }\n\n    .main-content {\n      max-width: 800px;\n      margin: 20px auto;\n      padding: 20px;\n    }\n\n    form.contact-form {\n      background-color: #f9f9f9;\n      border-radius: 8px;\n      padding: 20px;\n      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    }\n\n    .form-group {\n      margin-bottom: 15px;\n    }\n\n    .form-group label {\n      display: block;\n      margin-bottom: 5px;\n      font-weight: bold;\n    }\n\n    .form-group input,\n    .form-group textarea {\n      width: 100%;\n      padding: 10px;\n      border: 1px solid #ccc;\n      border-radius: 5px;\n      font-size: 1rem;\n    }\n\n    button[type="submit"] {\n      background-color: #ff5722;\n      color: white;\n      border: none;\n      padding: 10px 20px;\n      border-radius: 5px;\n      font-size: 1rem;\n      cursor: pointer;\n      transition: background-color 0.3s ease;\n    }\n\n    button[type="submit"]:hover {\n      background-color: #e64a19;\n    }\n\n   /* General Footer Styling */\n.footer {\n  background-color: #2f2f2f;\n  color: #fff;\n  padding: 30px 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.footer-content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.footer-section {\n  flex: 1;\n  padding: 10px;\n  max-width: 23%;\n  margin: 15px;\n}\n\n.footer-section h3 {\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n  text-align: justify;\n}\n\n.footer-section ul {\n  list-style: none;\n  padding-left: 0;\n  text-align: justify;\n}\n\n.footer-section ul li {\n  margin: 5px 0;\n  text-align: justify;\n}\n\n.footer-section ul li a {\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n.footer-logo {\n  width: 270px;\n  height: auto;\n  margin-bottom: 15px;\n}\n\n.footer-section p {\n  font-size: 0.9em;\n  text-align: justify;\n}\n\n.footer-section a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.footer-section a:hover {\n  text-decoration: underline;\n}\n\n/* Responsive Styles */\n@media (max-width: 1024px) {\n  .footer-content {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .footer-section {\n    max-width: 100%;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .footer-logo {\n    width: 200px;\n  }\n}\n\n@media (max-width: 768px) {\n  .footer-section h3 {\n    font-size: 1em;\n  }\n\n  .footer-section ul li {\n    font-size: 0.9em;\n  }\n\n  .footer-section p {\n    font-size: 0.8em;\n  }\n\n  .footer-logo {\n    width: 180px;\n  }\n}\n\n    /* Responsive Styles */\n    @media (max-width: 768px) {\n      header {\n        flex-direction: column;\n        text-align: center;\n      }\n\n      header img {\n        margin-bottom: 10px;\n      }\n\n      nav {\n        flex-direction: column;\n        gap: 10px;\n      }\n\n      .main-content {\n        padding: 10px;\n      }\n\n      \n    }\n\n    @media (max-width: 450px) {\n      header h1 {\n        font-size: 1rem;\n      }\n\n      header img {\n        width: 80px;\n      }\n\n      nav a {\n        font-size: 0.9rem;\n      }\n\n      \n    }\n  '
    }}
  />
  <header>
    <img src="../images/wtl-logos.png" alt="Ganesha Logo" />
    <h1>Mahakumbh Mela</h1>
    <nav>
    <a href="/">Home</a>
      <a href="/About">About Us</a>
      <a href="/TourPackages">Tour Packages</a>
      <a href="/Contact">Contact</a>
    </nav>
  </header>
  <main className="main-content container mx-auto py-8">
    <h1 className="text-xl font-bold mb-2 text-center">Contact Us</h1>
    <form
      className="contact-form"
      onsubmit="event.preventDefault(); submitForm();"
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required=""
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required=""
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required=""
          placeholder="Enter the subject"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required=""
          placeholder="Enter your message"
          defaultValue={""}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </main>
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <img
          src="./images/2.jpg"
          alt="Ashtavinayak Tour"
          className="footer-logo"
        />
        <p>
          We offer The Maha Kumbh Mela is a massive Hindu pilgrimage held every
          12 years at four cities. Devotees bathe in sacred rivers to cleanse
          sins. The event includes grand processions, spiritual talks, and
          cultural activities. Millions gather to celebrate India’s rich
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
</>
  )
}
