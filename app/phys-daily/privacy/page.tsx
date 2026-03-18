import React from "react";
import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the PhysDaily app — a safe, educational tool.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="2026-03-18">
      <div className="legal-content">
        <p>
          At <strong>PhysDaily</strong>, we are committed to providing a safe, educational, and focused learning environment for physics enthusiasts of all ages. This Privacy Policy outlines how we handle data and maintain your privacy.
        </p>

        <h2>🛡️ Built for Privacy (No Sign-in)</h2>
        <p>
          We believe in direct learning without friction. For the current version (MVP) of the Application:
        </p>
        <ul>
          <li><strong>No User Accounts:</strong> You do not need to create an account, provide an email, or sign in to play.</li>
          <li><strong>No Personal Data:</strong> We do not collect, request, or store your name, age, address, or any other personally identifiable information (PII).</li>
          <li><strong>Local Store:</strong> Your game progress (like daily streaks) is stored purely on your device&apos;s local storage. This data never leaves your phone.</li>
        </ul>

        <h2>🔋 Minimal Permissions</h2>
        <p>
          PhysDaily is designed with a &quot;Least Privilege&quot; approach. We do not require access to your camera, microphone, contacts, or precise GPS location. The only requirement is an active internet connection to download each day&apos;s new physics challenge.
        </p>

        <h2>🛰️ Third-Party Services</h2>
        <p>
          To deliver daily content and keep the app secure, we use <strong>Google Firebase</strong> (Firestore and App Check). While these services help run the app, we have configured them to minimize data overhead. They process limited technical data (such as IP addresses and device models) solely for:
        </p>
        <ul>
          <li>Delivering the daily physics question and answer.</li>
          <li>Protecting the app from automated bot access (security).</li>
          <li>Basic technical logs to ensure app stability.</li>
        </ul>
        <p>
          You can read more about Google&apos;s practices at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
        </p>

        <h2>👨‍👩‍👧‍👦 Children&apos;s Privacy (Families Policy)</h2>
        <p>
          PhysDaily is an educational tool designed to be safe for all ages. We strictly comply with children&apos;s privacy regulations:
        </p>
        <ul>
          <li>We do not knowingly collect or request any personal information from children under 13.</li>
          <li>The app is <strong>Ad-Free</strong> (MVP), ensuring children are not exposed to third-party marketing or tracking during their learning experience.</li>
          <li>There is no &quot;social&quot; feature or chat that allows interaction between users.</li>
        </ul>

        <h2>📩 Contact Us</h2>
        <p>
          If you have any questions or suggestions about our privacy practices, please contact the Service Provider (Ullas Kunder) at <a href="mailto:ullaskunder3@gmail.com">ullaskunder3@gmail.com</a>.
        </p>
      </div>
    </LegalPage>
  );
}
