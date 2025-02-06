import React from 'react'

export const AshtavinayakTourPackages = () => {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bus and Car Package Details</title>
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-size: cover;\n            color: #333;\n            background-color: white;\n        }\n  \n        header {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 20px;\n            background-color: beige;\n        }\n  \n        header img {\n            width: 120px;\n        }\n  \n        header h1 {\n            font-size: 1.2rem;\n            font-weight: bold;\n            text-align: center;\n            flex: 1;\n        }\n  \n        nav {\n            display: flex;\n            gap: 20px;\n        }\n  \n        nav a {\n            color: black;\n            text-decoration: none;\n            font-size: 1rem;\n            transition: color 0.3s ease;\n        }\n  \n        nav a:hover {\n            color: #ff5722;\n            text-decoration: none;\n        }\n  \n        .main-content img {\n            width: 100%;\n            max-width: 400px;\n            height: auto;\n            margin: 0 auto;\n            display: block;\n        }\n  \n        .main-content p {\n            margin: 20px auto;\n            max-width: 800px;\n            text-align: justify;\n        }\n  \n        .pricing {\n            max-width: 800px;\n            margin: 10px auto;\n        }\n  \n       /* General Footer Styling */\n.footer {\n  background-color: #2f2f2f;\n  color: #fff;\n  padding: 30px 0;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.footer-content {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.footer-section {\n  flex: 1;\n  padding: 10px;\n  max-width: 23%;\n  margin: 15px;\n}\n\n.footer-section h3 {\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  color: red;\n  text-align: justify;\n}\n\n.footer-section ul {\n  list-style: none;\n  padding-left: 0;\n  text-align: justify;\n}\n\n.footer-section ul li {\n  margin: 5px 0;\n  text-align: justify;\n}\n\n.footer-section ul li a {\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n.footer-logo {\n  width: 270px;\n  height: auto;\n  margin-bottom: 15px;\n}\n\n.footer-section p {\n  font-size: 0.9em;\n  text-align: justify;\n}\n\n.footer-section a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.footer-section a:hover {\n  text-decoration: underline;\n}\n\n/* Responsive Styles */\n@media (max-width: 1024px) {\n  .footer-content {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .footer-section {\n    max-width: 100%;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .footer-logo {\n    width: 200px;\n  }\n}\n\n@media (max-width: 768px) {\n  .footer-section h3 {\n    font-size: 1em;\n  }\n\n  .footer-section ul li {\n    font-size: 0.9em;\n  }\n\n  .footer-section p {\n    font-size: 0.8em;\n  }\n\n  .footer-logo {\n    width: 180px;\n  }\n}\n        @media (max-width: 768px) {\n            header {\n                flex-direction: column;\n                text-align: center;\n            }\n  \n            header img {\n                margin-bottom: 10px;\n            }\n  \n            nav {\n                flex-direction: column;\n                gap: 10px;\n            }\n  \n            .main-content p {\n                padding: 0 15px;\n            }\n  \n            .pricing {\n                padding: 0 15px;\n            }\n  \n        }\n  \n        @media (max-width: 450px) {\n            header h1 {\n                font-size: 1rem;\n            }\n  \n            header img {\n                width: 80px;\n            }\n  \n            nav a {\n                font-size: 0.9rem;\n            }\n  \n        }\n    "
    }}
  />
  {/* Header */}
  <header>
    <img src="./images/wtl-logos.png" alt="Ganesha Logo" />
    <h1>Ashtavinayak Tour</h1>
    <nav>
    <a href="/Ashtavinayak">Home</a>
      <a href="./AboutAshtavinayak">About Us</a>
      <a href="./TourPackagesAshtavinayak">Tour Packages</a>
      <a href="./ContactAshtavinayak">Contact</a>
    </nav>
  </header>
  {/* Main Content */}
  <main className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold text-center mb-6">
      Tour Package Details
    </h1>
    {/* Packages Section */}
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/*AcSeater Bus Package */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <img
          src="./images/SeaterFamily.webp"
          alt="Budget Bus Package"
          className="rounded-lg w-full mb-4"
        />
        <h2 className="text-xl font-bold mb-2">AcSeater Bus Package</h2>
        <p className="text-gray-600 mb-4">
          Cost-effective option with basic amenities.
        </p>
        <h3 className="text-lg font-bold">Pricing</h3>
        <p className="text-gray-600">
          <strong>Price:</strong>starting ₹2999
          <br />
        </p>
      </div>
      {/* Hatchback Car Package */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <img
          src="./images/HatchbackFamily.jpeg"
          alt="Compact Car Package"
          className="rounded-lg w-full mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Hatchback Car Package</h2>
        <p className="text-gray-600 mb-4">
          Suitable for small groups of up to 4 people.
        </p>
        <h3 className="text-lg font-bold">Pricing</h3>
        <p className="text-gray-600">
          <strong>Price:</strong> 10rs/km
        </p>
      </div>
      {/* Sedan Car Package */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <img
          src="./images/sedanFamily.jpeg"
          alt="SUV Car Package"
          className="rounded-lg w-full mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Sedan Car Package</h2>
        <p className="text-gray-600 mb-4">
          Offers comfort for families or groups of up to 6 people.
        </p>
        <h3 className="text-lg font-bold">Pricing</h3>
        <p className="text-gray-600">
          <strong>Price :</strong> 11rs/km
        </p>
      </div>
      {/* SUV Car Package */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <img
          src="./images/ertiga car.jpeg"
          alt="SUV Car Package"
          className="rounded-lg w-full mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Ertiga Car Package</h2>
        <p className="text-gray-600 mb-4">
          Offers comfort for families or groups of up to 6 people.
        </p>
        <h3 className="text-lg font-bold">Pricing</h3>
        <p className="text-gray-600">
          <strong>Price :</strong> 17rs/km
        </p>
      </div>
      {/* MUV Car Package */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <img
          src="./images/muv family.jpeg"
          alt="SUV Car Package"
          className="rounded-lg w-full mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Innova Crysta Car Package</h2>
        <p className="text-gray-600 mb-4">
          Offers comfort for families or groups of up to 6 people.
        </p>
        <h3 className="text-lg font-bold">Pricing</h3>
        <p className="text-gray-600">
          <strong>Price :</strong> 20rs/km
        </p>
      </div>
    </section>
  </main>
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
          <li>Mayureshwar – Morgaon</li>
          <li>Chintamani – Theur</li>
          <li>Siddhivinayak – Siddhatek</li>
          <li>Mahaganapati – Ranjangaon</li>
          <li>Girijatmaj – Lenyadri</li>
          <li>Vigneshwar – Ozar</li>
          <li>Ballaleshwar – Pali</li>
          <li>Varadvinayak – Mahad</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
        <li>
            <a href="/Ashtavinayak">Home</a>
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
