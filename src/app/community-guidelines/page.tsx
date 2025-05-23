"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./guidelines.css";

const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button className="guidelines-button" onClick={onClick}>
    {children}
  </button>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`guidelines-card ${className || ""}`}>{children}</div>
);

const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`guidelines-card-content ${className || ""}`}>{children}</div>
);

const CommunityGuidelines = () => {
  const router = useRouter();

  return (
    <div className="guidelines-container">
      <div className="guidelines-wrapper">
        <div className="guidelines-header">
          <h1 className="guidelines-heading">Blur Community Guidelines</h1>
          <Button onClick={() => router.push("/?fromTerms=true")}>Exit</Button>
        </div>

        <Card>
          <CardContent>
            <section>
              <p className="guidelines-text">
                Our mission is to provide a safe, respectful, and inclusive space for students to share, learn, and connect anonymously. These guidelines are here to help you understand what it means to be a part of the Blur community.
              </p>
            </section>

            <section>
              <h2 className="guidelines-section-title">1. Be Respectful</h2>
              <ul className="guidelines-list">
                <li>Engage in thoughtful and courteous dialogue—even when you disagree.</li>
                <li>Don’t post hate speech, personal attacks, or discriminatory content of any kind.</li>
                <li>Slurs, derogatory terms, or harassment based on identity, background, or beliefs are not tolerated.</li>
              </ul>
            </section>

            <section>
              <h2 className="guidelines-section-title">2. Protect Privacy</h2>
              <ul className="guidelines-list">
                <li>Do not post anyone’s personal information (real names, photos, contact info) without consent.</li>
                <li>Keep the space anonymous: avoid revealing your own identity or pressuring others to do so.</li>
              </ul>
            </section>

            <section>
              <h2 className="guidelines-section-title">3. No Harmful Content</h2>
              <ul className="guidelines-list">
                <li>No content that glorifies self-harm, suicide, or eating disorders.</li>
                <li>Do not threaten, encourage, or romanticize violence or dangerous behavior.</li>
                <li>Content that promotes illegal activity is strictly forbidden.</li>
              </ul>
              <p className="guidelines-text">
                Blur uses a combination of automated AI-based moderation and human review to detect and remove harmful or abusive content as quickly as possible.
              </p>
            </section>

            <section>
              <h2 className="guidelines-section-title">4. Keep It Constructive</h2>
              <ul className="guidelines-list">
                <li>Criticism should be constructive, not cruel.</li>
                <li>Content should aim to build dialogue, not shut it down.</li>
                <li>Ask yourself: “Would I say this out loud in front of peers?”</li>
              </ul>
            </section>

            <section>
              <h2 className="guidelines-section-title">5. No Spam or Self-Promotion</h2>
              <ul className="guidelines-list">
                <li>Avoid repetitive, irrelevant, or promotional posts.</li>
                <li>Don’t use Blur to advertise products, services, or personal projects unless explicitly approved.</li>
              </ul>
            </section>

            <section>
              <h2 className="guidelines-section-title">6. Reporting & Enforcement</h2>
              <ul className="guidelines-list">
                <li>Use the report button on any post or comment that violates these guidelines.</li>
                <li>Blur moderators review all reports and may issue warnings, remove content, or suspend accounts.</li>
                <li>Serious or repeat violations may result in permanent bans.</li>
              </ul>
            </section>

            <section>
              <h2 className="guidelines-section-title">7. Appeals & Feedback</h2>
              <p className="guidelines-text">
                If you believe a moderation decision was made in error, you can email <a href="mailto:support@blurapp.io" className="underline">support@blurapp.io</a>. We review appeals carefully and aim to maintain fairness and transparency.
              </p>
            </section>

            <section>
              <h2 className="guidelines-section-title">8. Keep It Real</h2>
              <p className="guidelines-text">
                Blur is what we make it. Your participation, care, and respect shape the space. Be kind, curious, and responsible.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
