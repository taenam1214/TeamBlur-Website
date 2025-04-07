"use client";

import Image from "next/image";
import "./features.css";
import madworksLogo from "../../assets/madworks.png";
import main from "../../assets/main.png";
import channel from "../../assets/channel.png";


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
        <Image src={madworksLogo} alt="Madworks Logo" className="madworks-logo" width={235} height={40} />
        <p>
          <span className="highlight">Blur</span> is a social platform{" "}
          <span className="line-break">where college students can connect </span>
          <span className="line-break">
            <span className="highlight-gradient-l1">anonymously</span> and share
            <span className="highlight-gradient-l2"> trending content</span>
          </span>
        </p>
      </div>
      <div className="features-section-wrapper">
        {/* Features Section with different background */}
        <div className="features-section">
          {/* Animated Circles for the entire features section */}
          <div className="circle-container">
            {renderCircles()}
          </div>

          <div className="features-header">
            <h2>
              <span className="header-font">What you can do with</span>{" "}
              <span className="blurr-text-2">
                Blur<span className="blurred-r">r</span>
              </span>
            </h2>
          </div>

          {/* Feature 1 - Standard Layout */}
          <div className="feature">
            <Image src={main} alt="Feature 1" className="feature-image-main" width={520} height={780} />
            <div className="feature-text">
              <h3>Join your campus conversations!</h3>
              <p>
                Share your campus life anonymously and explore other campus students&apos; lives
                across the states.
              </p>
            </div>
          </div>

          {/* Feature 2 - Reversed Layout */}
          <div className="feature feature-reversed">
          <Image src={channel} alt="Feature 2" className="feature-image-channel" width={418} height={780} />
            <div className="feature-text">
              <h3>Share similar interests!</h3>
              <p>
                Get the info and advice you need through topic-based channels. Whether it&apos;s academics, social life, or career tips, join discussions that help you grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;