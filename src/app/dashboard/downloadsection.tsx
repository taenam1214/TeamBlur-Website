import React from "react";
import "./downloadSection.css";
import Image from "next/image";

const DownloadSection: React.FC = () => {
  return (
    <section className="download-section">
      <div className="download-left">
        <h1 className="download-heading">
        Be the first <br /> to Join&nbsp;
        <span className="blurr-word">
            <span className="blurr">
            Blu<span className="blurred-r">r</span>
            </span>
        </span>
        </h1>
        <a
          href="https://apps.apple.com/us/app/apple-store/id375380948"
          target="_blank"
          rel="noopener noreferrer"
          className="app-store-button"
        >
          <div className="app-store-logo">
            <span className="apple-icon"></span>
            <div className="store-text">
              <span className="small">Download on the</span>
              <span className="big">App Store</span>
            </div>
          </div>
        </a>
      </div>
      <div className="download-right">
        <Image 
          src="/blur-app-mockup.png" 
          alt="Blurr app preview" 
          className="phone-image" 
          width={500} 
          height={500} 
          priority
        />
      </div>
    </section>
  );
};

export default DownloadSection;