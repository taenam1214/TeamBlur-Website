import React, { Suspense } from "react";
import Dashboard from "./dashboard/dashboard";
import Features from "./features/features";
import UserFeedback from "./userFeedback/userFeedback";
import FAQ from "./faq/faq";
import Contact from "./contact/contact";

export default function HomePage() {
  return (
    <>
      <main>
        <section id="dashboard">
          <Dashboard />
        </section>

        <Suspense fallback={<div>Loading Features...</div>}>
          <section id="features">
            <Features />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading User Feedback...</div>}>
          <section id="userFeedback">
            <UserFeedback />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading FAQ...</div>}>
          <section id="faq">
            <FAQ />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading Contact...</div>}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
    </>
  );
}
