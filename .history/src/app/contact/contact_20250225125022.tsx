"use client";

import React, { useState } from "react";
import "./contact.css";
import Image from "next/image";
import LinkedInIcon from "../../assets/linkedin.svg";
import InstagramIcon from "../../assets/ig.svg";
import XIcon from "../../assets/x.svg";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const colors = [
    "#A467FF", "#FFAE94", "#9BE6BE", "#CA89F9", "#EBFFAA",
    "#FA75FA", "#FF9A76", "#A4FF76", "#76C7FF", "#FFD976"
  ];

  // Render Circles with existing class names
  const renderCircles = () => (
    colors.map((color, index) => (
      <div
        key={index}
        className={`contact-circle-wrapper circle-${index}`} /* Existing class names */
        style={{ backgroundColor: color }}
      ></div>
    ))
  );

  // Email Validation
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
    <div className="contact-section">
      {/* Scoped Circle Container */}
      <div className="contact-circle-container">
        {renderCircles()}
      </div>

      <div className="content">
        <h1>
          Join <span className="blurr-text">Blur<span className="blurred-r">r</span></span>
        </h1>
        <p className="app-update-text">Stay updated on our app launch and exclusive updates</p>
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

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1 className="modal-title">You&#39;re on the list! 🎉</h1>
            <p className="modal-email">
              We&#39;ve received your email: <strong>{email}</strong>
            </p>
            <p className="modal-subtext">Stay tuned for updates about Blur!</p>
            <button className="modal-button" onClick={handleCloseModal}>
              Great!
            </button>
          </div>
        </div>
      )}

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="left-section">
          <h2>Do you have more </h2>
          <h2>Questions?</h2>
          <h2>Contact Us!</h2>
        </div>

        <div className="right-section">
          <div className="contact-info">
            <p>Email: blahblah@blur.com</p>
            <p>Phone: (608)-622-0120</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/getblurred" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/get.blurred/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="https://x.com/get_blurred" target="_blank" rel="noopener noreferrer">
                <img src={XIcon} alt="X" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-wrapper">
        <div className="copyright-line"></div>
        <div className="copyright-text">© 2025 Blur, Inc. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Contact;
