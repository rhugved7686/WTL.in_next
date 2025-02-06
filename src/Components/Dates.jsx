import React from 'react'

export const Dates = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WTL Tourism</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* General styles */\n        body {\n            margin-top: -70px;\n            padding: 0;\n            height: 100vh;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            background-color: white;\n            position: relative;\n            flex-direction: column;\n        }\n\n        img {\n            max-width: 100%;\n            max-height: 100%;\n            object-fit: cover;\n        }\n\n        /* Card with Text (shifted downwards) */\n        .text-card {\n            position: absolute;\n            padding: 0px;\n            border-radius: 10px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            max-width: 100%;\n            text-align: center;\n            bottom: 10%;\n        }\n\n        .text-card p {\n            color: white;\n            font-size: 50px;\n            font-weight: bold;\n            transition: transform 0.5s ease;\n            display: inline-block;\n        }\n\n        p:hover {\n            color: chartreuse;\n            transform: scale(1);\n        }\n\n        /* Journey Details Section */\n        .journey-cards-container {\n            position: absolute;\n            top: 95%;\n            width: 100%;\n            padding: 0px;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 5px;\n            overflow-x: auto;\n        }\n\n        .journey-card {\n            width: 350px;\n            background-color: bisque;\n            padding: 10px;\n            border-radius: 5px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n\n        .journey-card img {\n            width: 100%;\n            height: 270px;\n            object-fit: cover;\n            border-radius: 5px;\n        }\n\n        .journey-card h3 {\n            font-size: 22px;\n            font-weight: bold;\n            margin-top: 10px;\n            color: black;\n        }\n\n        .journey-card h3:hover {\n            color: red;\n            transform: scale(1);\n        }\n\n        .journey-card p {\n            font-size: 18px;\n            color: #333;\n        }\n\n        /* Media Query for Tablet and Mobile */\n        @media (max-width: 768px) {\n            .journey-cards-container {\n                flex-direction: column;\n                gap: 20px;\n                align-items: center;\n            }\n\n            .journey-card {\n                width: 90%;\n            }\n\n            .journey-card img {\n                height: 300px;\n            }\n\n            .text-card {\n                top: 80%;\n                max-width: 90%;\n            }\n        }\n\n        @media (max-width: 550px) {\n            .journey-card {\n                width: 100%;\n            }\n\n            .journey-card img {\n                height: 150px;\n            }\n\n            /* Shift the text card further down for mobile */\n            .text-card {\n                top: 38%;\n                max-width: 95%;\n            }\n        }\n\n        /* For Heading Text */\n        b p {\n            text-align: center;\n            font-size: 40px;\n            color: red;\n            font-weight: bold;\n        }\n    "
    }}
  />
  <b>
    <p>The Important Snan Dates of Kumbh Mela at Prayagraj in 2025</p>
  </b>
  <div style={{ width: "100%" }}>
    <img src="images/kumbh.jpg" alt="Snan" width="100%" height="350px" />
  </div>
  {/* Card with Text (shifted downwards) */}
  <div className="text-card">
    <p>"महाकुंभ की पावन यात्रा का आनंद लें, अपनी तारीख अभी बुक करें।</p>
  </div>
  {/* Journey Details Section (displaying cards in a row) */}
  <div className="journey-cards-container">
    {/* Journey Card 1 */}
    <div className="journey-card">
      <img src="images/1.jpg" alt="2nd Trip" />
      <h3>1st Trip: 20th January 2025</h3>
      <h3> (Slot Full)</h3>
      <p>The first trip is now fully booked.</p>
    </div>
    {/* Journey Card 2 */}
    <div className="journey-card">
      <img src="images/2.jpg" alt="2nd Trip" />
      <h3>
        2nd Trip: 27th January - 29th January (Prayagraj) | 31st January
        (Return)
      </h3>
      <br />
      <br />
      <p>Join us for a trip to Prayagraj and return on 31st January.</p>
    </div>
    {/* Journey Card 3 */}
    <div className="journey-card">
      <img src="images/33.jpg" alt="3rd Trip" />
      <h3>
        3rd Trip: 1st February - 3rd February (Prayagraj) | 5th February
        (Return)
      </h3>
      <p>Travel to Prayagraj in February and return on the 5th.</p>
    </div>
    {/* Journey Card 4 */}
    <div className="journey-card">
      <img src="images/4.jpg" alt="4th Trip" />
      <h3>
        4th Trip: 10th February - 12th February (Prayagraj) | 14th February
        (Return)
      </h3>
      <p>Experience the Kumbh Mela on the 4th trip.</p>
    </div>
    {/* Journey Card 5 */}
    <div className="journey-card">
      <img src="images/Mkumbh.webp" alt="5th Trip" />
      <h3>
        5th Trip: 21st February - 23rd February (Prayagraj) | 25th February
        (Return)
      </h3>
      <p>The final trip to Prayagraj in February.</p>
    </div>
  </div>
</>

  )
}
