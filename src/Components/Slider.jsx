import React from "react";
import { Link } from "react-router-dom";
import "../Components/Slider.css"

function Slider() {
  return (
    <>
      <div className="top-image">
        <img
          src="images/Mahakumb.webp"
          alt="Kumbh Mela"
          style={{ width: "100vh", height: "80vh" }}
        />
        <div className="overlay-para">
          <p>
            "महा कुंभ में डुबकी लगाओ, आत्मा को शांति और ज्ञान से सवेरा पाओ।"
          </p>
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
        <div className="offer-text">1 FREE Ujjain Trip!</div>
        <div class="event-bar2">
          <a href="dates.html">
            <button>Journey Dates</button>
          </a>
        </div>
      </div>
      <div className="Ashtavinayak-div">
        <p>
          <strong>Book the Ashtavinayak Tour!</strong>
        </p>
        <Link to="/Ashtavinayak">
          <button>Book Seat</button>
        </Link>
      </div>
    </>
  );
}

export default Slider;
