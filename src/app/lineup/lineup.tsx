"use client";

import React, { useState } from "react";
import "./lineup.css";

const LineUp = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleSubmit = () => {
    if (!isValidEmail) return;
    setSubmitted(true);
  };

  return (
    <div className="lineup-container">
      <div className="lineup-content">
        <h2 className="lineup-title">
          Be a <span className="logo">Blur</span><span className="logo-blur">r</span>
        </h2>
        <p className="lineup-description">
        Stay updated on our app launch and exclusive updates. Join our newsletter!
        </p>

        {!submitted ? (
          <div className="lineup-email-container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className={`lineup-email-input ${isValidEmail ? "valid" : "invalid"}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" && isValidEmail) handleSubmit();
              }}
            />
            <button
              className={`lineup-email-submit ${isValidEmail ? "active" : ""}`}
              onClick={handleSubmit}
              disabled={!isValidEmail}
            >
              Subscribe
            </button>
          </div>
        ) : (
          <p className="success-message">Thank you for subscribing! 🎉</p>
        )}
      </div>
    </div>
  );
};

export default LineUp;
