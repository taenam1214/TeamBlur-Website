"use client";

import React, { useState } from "react";
import "./faq.css";

const faqData = [
  {
    question: "What is Blur?",
    answer: "Blur is an anonymous app where college students can connect, share, and engage with their campus community and beyond. Whether you want to ask for advice, share funny stories, or discuss campus events, Blur provides a space where students can freely express themselves.",
  },
  {
    question: "Who can join Blur?",
    answer: "Only verified college students can sign up for Blur. We require a .edu email address (or equivalent) to ensure that our community remains safe and exclusive to students.",
  },
  {
    question: "Is Blur really anonymous?",
    answer: "Yes! Your identity is protected, and you can post, comment, and interact without revealing who you are. However, we have moderation measures in place to maintain a safe and respectful environment.",
  },
  {
    question: "When will Blur launch?",
    answer: "We’re working hard to launch soon! Stay tuned and join the waitlist for updates. Early access is planned for May, with the official launch expected in August. Some users may get access earlier before the full release. 🚀",
  },
  {
    question: "What kind of content can I share on Blur?",
    answer: "Share anything from campus life updates and advice to memes, events, and student opportunities! Just keep it respectful, positive, and aligned with our community guidelines.",
  },
  {
    question: "How does Blur maintain a safe space?",
    answer: "We take safety seriously at Blur, with strict moderation to remove harmful content, user reporting features to flag inappropriate posts, and clear community guidelines to foster a respectful environment!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <h2 className="faq-title"><span className="header-font">Frequently Asked Questions</span></h2>
      <div className="faq-container">
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
