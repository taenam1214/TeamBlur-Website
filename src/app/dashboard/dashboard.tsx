"use client";

import React, { useEffect, useState } from "react";
import "./dashboard.css";

const Dashboard: React.FC = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const colors = [
    "#A467FF", "#FFAE94", "#9BE6BE", "#CA89F9", "#EBFFAA",
    "#FA75FA", "#FF9A76", "#A4FF76", "#76C7FF", "#FFD976"
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => setStep(2), 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    document.body.style.overflow = step < 2 ? "hidden" : "auto";
  }, [step]);

  // Validate email format
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));
  };

  // Show modal and reset email after closing
  const handleJoinWaitlist = () => {
    if (isValidEmail) {
      // Call postEmail api
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

  // Close modal and reset input
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
            Get Ready to 
            <span className="blurr-text-1"> Blur<span className="blurred-r">r</span></span>
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
              Join waitlist
            </button>
          </div>
          {!isValidEmail && email && (
            <p className="error-message">Please enter a valid email address.</p>
          )}
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
