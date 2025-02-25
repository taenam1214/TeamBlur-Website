"use client";

import "./features.css";
import madworksLogo from "../../assets/madworks.svg";
import main from "../../assets/main.svg";
import channel from "../../assets/channel.svg";

const Features: React.FC = () => {

  const colors = [
    "#A467FF", "#FFAE94", "#9BE6BE", "#CA89F9", "#EBFFAA",
    "#FA75FA", "#FF9A76", "#A4FF76", "#76C7FF", "#FFD976"
  ];

  const renderCircles = () => (
    colors.map((color, index) => (
      <div
        key={index}
        className={`circle circle-${index}`}
        style={{ backgroundColor: color }}
      ></div>
    ))
  );

  return (
    <section className="features-container">
      {/* Intro Section with white background */}
      <div className="features-intro">
        <img src={madworksLogo} alt="Madworks Logo" className="madworks-logo" />
        <p>
          <span className="highlight">Blur</span> is a social platform{" "}
          <span className="line-break">where college students can connect </span>
          <span className="line-break">
            <span className="highlight-gradient-l1">anonymously</span> and share
            <span className="highlight-gradient-l2"> trending content</span>
          </span>
        </p>
      </div>

      {/* Features Section with different background */}
      <div className="features-section">
        {/* Animated Circles for the entire features section */}
        <div className="circle-container">
          {renderCircles()}
        </div>

        <h2>
          <span className="header-font">What you can do with</span>{" "}
          <span className="blurr-text-2">
            Blur<span className="blurred-r">r</span>
          </span>
        </h2>

        {/* Feature 1 - Standard Layout */}
        <div className="feature">
          <img src={main} alt="Feature 1" className="feature-image" />
          <div className="feature-text">
            <h3>Get blurred and mingled!</h3>
            <p>
              Share your campus life anonymously and explore other campus students' lives
              across the states.
            </p>
          </div>
        </div>

        {/* Feature 2 - Reversed Layout */}
        <div className="feature feature-reversed">
          <img src={channel} alt="Feature 2" className="feature-image" />
          <div className="feature-text">
            <h3>Share similar interests!</h3>
            <p>
              Get the info and advice you need through topic-based channels. Whether it’s academics, social life, or career tips, join discussions that help you grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
