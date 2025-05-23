"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./terms.css";

const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button className="terms-button" onClick={onClick}>
    {children}
  </button>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`terms-card ${className || ""}`}>{children}</div>
);

const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`terms-card-content ${className || ""}`}>{children}</div>
);

const TermsAndGuidelines = () => {
  const router = useRouter();

  return (
    <div className="terms-container">
      <div className="terms-wrapper">
        <div className="terms-header">
          <h1 className="terms-heading">Blur Terms of Service & Community Guidelines</h1>
          <Button onClick={() => router.push("/?fromTerms=true")}>Exit</Button>
        </div>

        <Card>
          <CardContent>
            <section>
              <h2 className="terms-section-title">Effective Date</h2>
              <p className="terms-text">These Terms are effective as of May 23, 2025. By accessing or using Blur, you agree to be bound by these Terms and our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="terms-section-title">Eligibility</h2>
              <p className="terms-text">Blur is a community for college students. You must be at least 17 years old and have a valid .edu email address to register and use our services.</p>
            </section>

            <section>
              <h2 className="terms-section-title">User Responsibilities</h2>
              <ul className="terms-list">
                <li>Maintain the confidentiality of your account credentials.</li>
                <li>Use Blur only for lawful, respectful, and non-commercial purposes.</li>
                <li>Report harmful, abusive, or inappropriate content.</li>
                <li>Comply with all applicable laws and regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="terms-section-title">Prohibited Conduct</h2>
              <ul className="terms-list">
                <li>Harassment, bullying, or threatening others.</li>
                <li>Posting hate speech, violent content, or illegal activity.</li>
                <li>Impersonating others or spreading misinformation.</li>
                <li>Using automation or scraping Blur’s services.</li>
              </ul>
            </section>

            <section>
              <h2 className="terms-section-title">Content Ownership</h2>
              <p className="terms-text">You retain ownership of the content you create. By posting on Blur, you grant us a limited license to display and distribute your content on the platform. This license ends when you delete your content or account.</p>
            </section>

            <section>
              <h2 className="terms-section-title">Account Suspension or Termination</h2>
              <p className="terms-text">We reserve the right to suspend or terminate accounts that violate our Terms, Community Guidelines, or applicable laws. Appeals may be submitted to <a href="mailto:support@blurapp.io" className="underline">support@blurapp.io</a>.</p>
            </section>

            <section>
              <h2 className="terms-section-title">Disclaimers</h2>
              <p className="terms-text">Blur is provided “as is.” We make no guarantees of availability or accuracy. Your use is at your own risk. Content posted by users does not reflect Blur’s views.</p>
            </section>

            <section>
              <h2 className="terms-section-title">Community Guidelines</h2>
              <p className="terms-text">Blur thrives on respectful, inclusive, and student-first conversations. To help keep our space safe and valuable:</p>
              <ul className="terms-list">
                <li>Be respectful: no hate speech, discrimination, or slurs.</li>
                <li>Be constructive: disagree without hostility or personal attacks.</li>
                <li>Keep it legal: no illegal content or behavior.</li>
                <li>Protect privacy: don’t share personal information (yours or others’).</li>
                <li>Report issues: use in-app tools or contact us directly.</li>
              </ul>
              <p className="terms-text">Violations may result in warnings, content removal, or bans depending on severity and frequency.</p>
            </section>

            <section>
              <h2 className="terms-section-title">Modifications</h2>
              <p className="terms-text">We may update these Terms and Guidelines occasionally. Changes will be posted in-app and on our website. Continued use after changes means you accept them.</p>
            </section>

            <section>
              <h2 className="terms-section-title">Contact Us</h2>
              <p className="terms-text">If you have questions or need support, email <a href="mailto:support@blurapp.io" className="underline">support@blurapp.io</a>.</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndGuidelines;
