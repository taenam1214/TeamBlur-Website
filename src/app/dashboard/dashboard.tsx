"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./dashboard.css";
import arrowDown from "../../assets/arrow.svg";

const Dashboard: React.FC = () => {
  const searchParams = useSearchParams();
  const [skipIntro, setSkipIntro] = useState(false);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fromPrivacyParam = searchParams.get("fromPrivacy");
    const fromTermsParam = searchParams.get("fromTerms");
    const fromGuidelinesParam = searchParams.get("fromGuidelines");


    if (fromPrivacyParam === "true" || fromTermsParam === "true" || fromGuidelinesParam === "true") {
      setSkipIntro(true);
      setStep(2);

      const url = new URL(window.location.href);
      url.searchParams.delete("fromPrivacy");
      url.searchParams.delete("fromTerms");
      url.searchParams.delete("fromGuidelines");
      window.history.replaceState({}, "", url.toString());
    }
  }, [searchParams]);

  const colors = [
    "#A467FF", "#FFAE94", "#9BE6BE", "#CA89F9", "#EBFFAA",
    "#FA75FA", "#FF9A76", "#A4FF76", "#76C7FF", "#FFD976"
  ];

  useEffect(() => {
    if (skipIntro) return;
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [skipIntro]);

  useEffect(() => {
    if (step < 2) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [step]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));
  };

  const handleJoinWaitlist = () => {
    if (isValidEmail) {
      (async () => {
        await fetch("/api/postEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      })();
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmail("");
    setIsValidEmail(false);
  };

  return (
    <section className="dashboard-container">
      <div
        className="blurr-logo"
        style={{ visibility: step >= 2 ? "visible" : "hidden", opacity: step >= 2 ? 1 : 0 }}
      >
        Blur<span className="blurred-r">r</span>
      </div>
      <div
        className="scroll-indicator"
        style={{
          visibility: step >= 2 ? "visible" : "hidden",
          opacity: step >= 2 ? 1 : 0,
        }}
      >
        <p>Scroll for more</p>
        <img src={arrowDown} alt="Scroll Down" className="scroll-arrow" />
      </div>

      {colors.map((color, index) => (
        <div
          key={index}
          className={`circle circle-${index}`}
          style={{ backgroundColor: color }}
        ></div>
      ))}

      {step === 0 && <h1 className="fade-in-out">Share anything anonymously</h1>}
      {step === 1 && (
        <h1 className="fade-in-out">
          Get Ready to 
          <span className="blurr-text-1"> Blur<span className="blurred-r">r</span></span>
        </h1>
      )}
      {step === 2 && (
        <div className="final-content">
        <h1>
          Get Ready to <span className="blurr-text-1"> Blur<span className="blurred-r">r</span></span>
        </h1>
        <h2>Join the Waitlist</h2>
        <div className="email-container">
          <input
            type="email"
            placeholder="Enter email address"
            className={`email-input ${!isValidEmail && email ? 'invalid' : ''}`}
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="waitlist-button"
            disabled={!isValidEmail}
            onClick={handleJoinWaitlist}
          >
            <span className="waitlist-text-desktop">Join waitlist</span>
            <span className="waitlist-text-mobile">Join</span>
          </button>
        </div>
        {/* Always render the error message element */}
        <p className="error-message">
          {(!isValidEmail && email) ? "Please enter a valid email address." : "\u00A0"}
        </p>
        {/* <div className="scroll-indicator">
        <p>Scroll for more</p>
        <img src={arrowDown} alt="Scroll Down" className="scroll-arrow" />
        </div> */}
      </div>
      
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1 className="modal-title">You&#39;re on the list! 🎉</h1>
            <p className="modal-email">
              We’ve received your email: <strong>{email}</strong>
            </p>
            <p className="modal-subtext">Stay tuned for updates about Blur!</p>
            <button className="modal-button" onClick={handleCloseModal}>
              Great!
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
