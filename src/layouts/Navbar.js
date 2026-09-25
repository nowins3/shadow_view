import React from "react";
import "../assets/css/Navbar.css";
import UserLinks from "../components/navbar/UserLinks";
import Company from "../components/navbar/Company";
import Navigation from "../components/navbar/Navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".homePromotion",
          start: "bottom top",
          scrub: true,
        },
      })
      .to(".tv-navbar", {
        width: "500px",
        top: "15px",
        left: "calc(50% - 275px)",
        borderRadius: "40px",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        backgroundColor: "#00000050",
        duration: 1.2,
        ease: "power1.inOut",
      })
      .to(".tv-logo-text", {
        display: "none",
        duration: 1.2,
        ease: "power1.inOut",
      })
      .to(".tv-btn-get-started", {
        display: "none",
        duration: 1.2,
        ease: "power1.inOut",
      })
      .to(".tv-icon-button", {
        display: "none",
        duration: 1.2,
        ease: "power1.inOut",
      })
      .to(".tv-search-text", {
        display: "none",
        duration: 1.2,
        ease: "power1.inOut",
      })
      .to(".tv-search-container ", {
        width: "15px",
        padding: "10px 10px 10px 10px",
        duration: 1.2,
        ease: "power1.inOut",
      })
      .to(".tv-company-logo", {
        width: "3rem",
        height: "3rem",
        duration: 1.2,
        ease: "power1.inOut",
      })
      .to(".tv-nav-center", {
        marginLeft: "20px",
        maxWidth: "370px",
        duration: 1.2,
        ease: "power1.inOut",
      })
      .to(".tv-icon-user", {
        width: "1.5rem",
        height: "1.5rem",
        duration: 1.2,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <nav className="tv-navbar">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Company />
      <Navigation />
      <UserLinks />
    </nav>
  );
};

export default Navbar;
