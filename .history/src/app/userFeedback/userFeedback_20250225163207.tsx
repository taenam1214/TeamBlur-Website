"use client";

import React, { useRef, useState } from "react";
import "./userFeedback.css";
import Image from "next/image";

// Import SVGs
import WisconsinLogo from "../../assets/wisconsin.svg";
import WashingtonLogo from "../../assets/washington.svg";
import BerkeleyLogo from "../../assets/berkeley.svg";
import MichiganLogo from "../../assets/michigan.svg";
import QuoteLogo from "../../assets/quote.svg";

const feedbacks = [
  {
    text: "The most unique aspect is the posts 🔥 that come from other schools. It’s exciting to see what’s trending beyond my own campus! 🌍",
    avatar: WisconsinLogo,
    userLine1: "Anonymous student from",
    userLine2: "University of Wisconsin",
  },
  {
    text: "I really like how it creates an open space where students can freely ask questions and talk about anything they want.",
    avatar: WashingtonLogo,
    userLine1: "Anonymous student from",
    userLine2: "University of Washington",
  },
  {
    text: "I love the UI flow ❤️ Unlike other anonymous apps, this one actually feels like a real community rather than just random posts!",
    avatar: BerkeleyLogo,
    userLine1: "Anonymous student from",
    userLine2: "UC Berkeley",
  },
  {
    text: "I like how students can connect easily with other schools. It enhances my experience and provides a unique student culture.",
    avatar: michiganLogo,
    userLine1: "Anonymous student from",
    userLine2: "University of Michigan",
  },
];

const UserFeedback: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="user-feedback-container">
      <h2 className="user-feedback-header"><span className="header-font">Hear from our early users!</span></h2>
      <div
        ref={scrollerRef}
        className="feedback-scroller"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ animationPlayState: isPaused ? "paused" : "running" }} // Pause animation on hover
      >
        {/* Tripling the feedbacks ensures a smooth loop */}
        {[...feedbacks, ...feedbacks, ...feedbacks].map((feedback, index) => (
          <div className="feedback-card" key={index}>
            <Image 
              src={quoteLogo} 
              alt="Quote" 
              className="feedback-quote" 
              width={24} 
              height={18} 
            />
            <p className="feedback-text"><span className="header-font">{feedback.text}</span></p>
            <div className="feedback-user">
              <Image 
                src={feedback.avatar} 
                alt="User avatar" 
                className="feedback-avatar" 
                width={50} 
                height={50} 
              />
              <div className="feedback-user-text">
                <span><span className="header-font">{feedback.userLine1}</span></span>
                <span className="feedback-user-school"><span className="header-font">{feedback.userLine2}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserFeedback;
