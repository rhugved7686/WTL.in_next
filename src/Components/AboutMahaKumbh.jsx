import React from 'react'

export const AboutMahaKumbh = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      body {\n          font-family: Arial, sans-serif;\n          margin: 0;\n          padding: 0;\n          background-size: cover;\n          color: #333;\n          background-color: white;\n      }\n\n      header {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          padding: 20px;\n          background-color: beige;\n      }\n\n      header img {\n          width: 100px;\n      }\n\n      header h1 {\n          font-size: 1.2rem;\n          font-weight: bold;\n          text-align: center;\n          flex: 1;\n      }\n\n      nav {\n          display: flex;\n          gap: 20px;\n      }\n\n      nav a {\n          color: black;\n          text-decoration: none;\n          font-size: 1rem;\n          transition: color 0.3s ease;\n      }\n\n      nav a:hover {\n          color: #ff5722;\n          text-decoration: none;\n      }\n\n      .main-content img {\n          width: 100%;\n          max-width: 400px;\n          height: auto;\n          margin: 0 auto;\n          display: block;\n      }\n\n      .main-content p {\n          margin: 20px auto;\n          max-width: 800px;\n          text-align: justify;\n      }\n\n      .pricing {\n          max-width: 800px;\n          margin: 10px auto;\n      }\n\n      /* General Footer Styling */\n.footer {\n  background-color: #2f2f2f;\n  color: #fff;\n  padding: 30px 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.footer-content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.footer-section {\n  flex: 1;\n  padding: 10px;\n  max-width: 23%;\n  margin: 15px;\n}\n\n.footer-section h3 {\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n  text-align: justify;\n}\n\n.footer-section ul {\n  list-style: none;\n  padding-left: 0;\n  text-align: justify;\n}\n\n.footer-section ul li {\n  margin: 5px 0;\n  text-align: justify;\n}\n\n.footer-section ul li a {\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n.footer-logo {\n  width: 270px;\n  height: auto;\n  margin-bottom: 15px;\n}\n\n.footer-section p {\n  font-size: 0.9em;\n  text-align: justify;\n}\n\n.footer-section a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.footer-section a:hover {\n  text-decoration: underline;\n}\n\n/* Responsive Styles */\n@media (max-width: 1024px) {\n  .footer-content {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .footer-section {\n    max-width: 100%;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .footer-logo {\n    width: 200px;\n  }\n}\n\n@media (max-width: 768px) {\n  .footer-section h3 {\n    font-size: 1em;\n  }\n\n  .footer-section ul li {\n    font-size: 0.9em;\n  }\n\n  .footer-section p {\n    font-size: 0.8em;\n  }\n\n  .footer-logo {\n    width: 180px;\n  }\n}\n\n      @media (max-width: 768px) {\n          header {\n              flex-direction: column;\n              text-align: center;\n          }\n\n          header img {\n              margin-bottom: 10px;\n          }\n\n          nav {\n              flex-direction: column;\n              gap: 10px;\n          }\n\n          .main-content p {\n              padding: 0 15px;\n          }\n\n          .pricing {\n              padding: 0 15px;\n          }\n\n        \n      }\n\n      @media (max-width: 450px) {\n          header h1 {\n              font-size: 1rem;\n          }\n\n          header img {\n              width: 80px;\n          }\n\n          nav a {\n              font-size: 0.9rem;\n          }\n\n         \n      }\n  "
    }}
  />
  <header>
    <img src="./images/wtl-logos.png" alt="Ganesha Logo" />
    <h1>Mahakumbh Mela</h1>
    <nav>
    <a href="/">Home</a>
      <a href="/">About Us</a>
      <a href="/TourPackages">Tour Packages</a>
      <a href="/Contact">Contact</a>
    </nav>
  </header>
  <main className="main-content container mx-auto py-8">
    <h1
      className="text-2xl font-bold text-center mb-6"
      style={{ textAlign: "center" }}
    >
      About Us -
    </h1>
    <img src="./images/kumbh.jpg" />
    <div className="pricing">
      <h3 className="text-lg font-bold mb-2">About Mahakumbh Mela</h3>
      <p>
        Welcome to our Maha Kumbh Mela tour! We offer a unique and enriching
        experience for pilgrims and travelers to explore the world-renowned
        spiritual gathering. Our guided tours take you through the sacred
        rituals, vibrant processions, and deep cultural traditions of the Kumbh
        Mela. Whether you're here to take a holy dip in the sacred rivers,
        participate in spiritual discourses, or witness the colorful pageantry
        of saints and ascetics, we ensure you have a memorable journey. Our
        experienced guides provide insights into the history and significance of
        this ancient festival. We also help you explore the local culture, food,
        and fairs that make the Kumbh Mela a once-in-a-lifetime experience. Join
        us for an unforgettable adventure that will deepen your spiritual
        understanding and connect you with India's rich heritage.
      </p>
    </div>
  </main>
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
