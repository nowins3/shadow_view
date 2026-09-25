import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import "../assets/css/Home.css";
import featuresVideo from "../assets/vids/feature-preview.mp4";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="home-main">
        <div className="homePromotion">
          <div className="promotion-content">
            <div className="quote-1">Now cometh the age of the Stars</div>
            <div className="quote-2">Research leads to better trades</div>
            <button className="home-btn-get-started">
              Get Started for Free
            </button>
          </div>
        </div>
        <div className="feature-advert">
          <div className="advert-quote-1">Where the world does market</div>
          <div className="advert-quote-2">
            Join 100 million traders and investors taking the future into their
            own hands.
          </div>
          <div>
            <video
              muted
              autoplay
              loop
              playsinline
              disableremoteplayback
              src={featuresVideo}
            ></video>
          </div>
          <button className="btn-explore">Explore Features</button>
        </div>
        <div className="home-body">
          <div className="major-markets-container">
            <h1>Major Markets</h1>
            <div className="major-markets-top">S&P 500</div>
            <div className="major-markets-bottom">Dow Jones</div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
