"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./privacy.css";

const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button className="privacy-button" onClick={onClick}>
    {children}
  </button>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`privacy-card ${className || ""}`}>{children}</div>
);

const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`privacy-card-content ${className || ""}`}>{children}</div>
);

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <div className="privacy-container">
      <div className="privacy-wrapper">
        <div className="privacy-header">
          <h1 className="privacy-heading">Blur Privacy Policy</h1>
          <Button onClick={() => router.push("/?fromPrivacy=true")}>Exit</Button>
        </div>

        <Card>
          <CardContent>
            <section>
              <p className="privacy-text"><strong>Effective Date:</strong> May 23, 2025</p>
              <p className="privacy-subtext">Your data. Your space. Your control. Always.</p>
            </section>

            <section>
              <h2 className="privacy-section-title">Getting Started: What Blur Is Not</h2>
              <ul className="privacy-list">
                <li>Blur does <strong>not</strong> sell or rent your personal data to advertisers or third parties.</li>
                <li>Your identity is never public by default; anonymity is a core principle of Blur.</li>
                <li>We are an independent platform and will only share your data when legally obligated (e.g., subpoenas) or to prevent imminent harm.</li>
              </ul>
            </section>

            <section>
              <h2 className="privacy-section-title">Account Setup: Verifying Student Status</h2>
              <ul className="privacy-list">
                <li>We require a <strong>valid .edu email address</strong> to sign up. You’ll receive a verification code to confirm your eligibility.</li>
              </ul>
            </section>

            <section>
              <h2 className="privacy-section-title">Eligibility</h2>
              <p className="privacy-text">Blur is intended solely for verified college students in the U.S. and its territories. Users must be at least 17 years of age.</p>
            </section>

            <section>
              <h2 className="privacy-section-title">What We Collect — and Why</h2>
              <ul className="privacy-list">
                <li><strong>Content You Create:</strong> Posts, comments, reactions, direct messages, flagged content, and deleted content (with timestamps).</li>
                <li><strong>Behavioral Metadata:</strong> Time of activity, type of activity, session length, and app features used.</li>
                <li><strong>Device Information:</strong> Device model, operating system version, and crash reports.</li>
                <li><strong>Network Information:</strong> IP address, mobile carrier, and connection type</li>
                {/* <li><strong>Location Data:</strong> If enabled, Blur may use GPS or IP-based geolocation to offer location-based features.</li> */}
                <li><strong>Cookies and Tracking Technologies:</strong> Used for authentication, analytics, and personalization. Manage preferences via device settings.</li>
                <li><strong>Log Data:</strong> Includes technical logs, errors, diagnostics, and usage history.</li>
              </ul>
            </section>

            <section>
              <h2 className="privacy-section-title">How We Use Your Information</h2>
              <ul className="privacy-list">
                <li>To provide core functionality like content posting, notifications, and messaging.</li>
                <li>To improve platform performance, user experience, and feature recommendations.</li>
                <li>To detect, prevent, and respond to security threats or policy violations.</li>
                <li>For internal analytics and aggregated reporting (not linked to personal identities).</li>
              </ul>
            </section>

            <section>
              <h2 className="privacy-section-title">How We Share Your Information</h2>
              <ul className="privacy-list">
                <li><strong>Vendors & Service Providers:</strong> Those helping us operate Blur (e.g., hosting, email) under strict confidentiality agreements.</li>
                <li><strong>Legal Compliance:</strong> When required by law or to protect user safety.</li>
                <li><strong>Business Changes:</strong> In the event of acquisition or merger, with notice and continued protection.</li>
                <li><strong>Aggregated/De-identified Data:</strong> For research or transparency, never personally identifiable.</li>
              </ul>
            </section>

            <section>
              <h2 className="privacy-section-title">Your Posts, Chats & Content</h2>
              <ul className="privacy-list">
                <li>Public posts are visible unless marked otherwise.</li>
                <li>Direct messages are encrypted and not accessible to staff, unless legally required.</li>
                <li>Deleted content is removed from public view and purged from backups within 30 days.</li>
              </ul>
            </section>

            <section>
              <h2 className="privacy-section-title">Deleting Your Data</h2>
              <ul className="privacy-list">
                <li>Delete posts anytime via the app.</li>
                <li>To delete your account, go to Profile Settings → Delete Account or email <a className="underline" href="mailto:info@blurapp.io">info@blurapp.io</a>.</li>
              </ul>
              <p className="privacy-text">Deleted data may temporarily remain in backups but will be fully removed within 30 days.</p>
            </section>

            <section>
              <h2 className="privacy-section-title">Data Retention</h2>
              <p className="privacy-text">We retain data only as long as needed for services, legal obligations, or system integrity. Inactive accounts may be anonymized after 12 months.</p>
            </section>

            <section>
              <h2 className="privacy-section-title">Where Your Data Lives</h2>
              <p className="privacy-text">Data is hosted primarily in the U.S. and may be processed in other countries with equivalent data protections. Using Blur implies consent to this.</p>
            </section>

            <section>
              <h2 className="privacy-section-title">Your Rights</h2>
              <ul className="privacy-list">
                <li>Request a copy of your data.</li>
                <li>Request corrections or deletion.</li>
                <li>Withdraw consent to certain uses.</li>
              </ul>
              <p className="privacy-text">Email <a className="underline" href="mailto:info@blurapp.io">info@blurapp.io</a>. We will respond within 7 business days.</p>
            </section>

            <section>
              <h2 className="privacy-section-title">Security</h2>
              <p className="privacy-text">We use encryption, firewalls, and secure protocols to safeguard your data. While we work hard to ensure safety, no platform is immune to risks—share responsibly.</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
