import React from "react";
import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for the PhysDaily app — a safe, educational tool.",
};

export default function TermsConditions() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="2026-03-18">
      <div className="legal-content">
        <p>
          These terms and conditions apply to the <strong>PhysDaily</strong> app (hereby referred to as &quot;Application&quot;) for mobile devices created by <strong>Ullas Kunder</strong> (hereby referred to as &quot;Service Provider&quot;).
        </p>

        <h2>📚 Educational Purpose</h2>
        <p>
          PhysDaily is a daily physics learning tool developed for students, science enthusiasts, and anyone curious about physics. By downloading or utilizing the Application, you are automatically agreeing to these terms.
        </p>

        <h2>🚫 Prohibited Uses</h2>
        <p>
          Unauthorized copying, modification of the Application, or any part of our trademarks is strictly prohibited. You are not permitted to extract the source code, translate the Application into other languages, or create derivative versions. All copyrights and intellectual property rights related to the Application remain the property of the Service Provider.
        </p>

        <h2>🔐 Data and Access</h2>
        <p>
          For the current version (MVP), PhysDaily does not require user accounts. Your progress (like daily streaks) is stored locally on your device. We recommend maintaining the security of your device and not modifying its official operating system (e.g., &quot;jailbreaking&quot; or &quot;rooting&quot;), as this could expose your device to security vulnerabilities.
        </p>

        <h2>🌍 Connectivity Requirements</h2>
        <p>
          PhysDaily requires an active internet connection to deliver each day&apos;s new physics challenge. We cannot be held responsible if the Application does not function correctly due to a lack of network access or if you have exhausted your data allowance.
        </p>

        <h2>📦 Third-Party Services</h2>
        <p>
          PhysDaily relies on secure third-party infrastructure (Google Firebase) to host daily content and ensure a safe experience. You can read their terms at <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">policies.google.com/terms</a>.
        </p>

        <h2>🔄 Updates and Termination</h2>
        <p>
          The Service Provider may update the Application to improve your learning experience or maintain compatibility with mobile systems. You are encouraged to accept these updates. We also reserve the right to cease providing the Application at any time. Upon termination, the rights granted to you will end, and you must cease using the Application.
        </p>

        <h2>📬 Contact Us</h2>
        <p>
          If you have any questions or suggestions about these Terms and Conditions, please contact the Service Provider (Ullas Kunder) at <a href="mailto:ullaskunder3@gmail.com">ullaskunder3@gmail.com</a>.
        </p>
      </div>
    </LegalPage>
  );
}
