import React from "react";
import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Pin-Tube",
  description: "Privacy policy and data handling details for the Pin-Tube Chrome Extension.",
};

export default function PinTubePrivacyPolicy() {
  return (
    <LegalPage title="Pin-Tube Privacy Policy" lastUpdated="May 30, 2026">
      <p>
        Thank you for choosing to use Pin-Tube (&quot;the Extension&quot;). Our core purpose is to remove distractions from the YouTube homepage by hiding Shorts and tag recommendations, and to allow you to pin videos to the top of your homepage so you can easily resume watching them later.
      </p>
      <p>
        To achieve this, your privacy is our highest priority. This Privacy Policy explains how Pin-Tube handles your data and respects your privacy. By installing and using Pin-Tube, you agree to the terms outlined in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p><strong>Short Answer: We do not collect, transmit, or store any of your personal data on external servers.</strong></p>
      <p>
        Pin-Tube operates entirely on your local device. We do not use analytics, we do not track your browsing history, and we do not have a backend server that receives your data.
      </p>

      <h2>2. How Your Data is Stored (Local Storage Only)</h2>
      <p>
        To provide its core functionality, Pin-Tube requires saving certain information. This is done exclusively using your browser&apos;s local storage (<code>chrome.storage.local</code>).
      </p>
      <p>The data stored locally on your device includes:</p>
      <ul>
        <li><strong>Pinned Videos:</strong> The YouTube IDs, titles, thumbnails, channel names, and timestamps of the videos you explicitly choose to pin.</li>
        <li><strong>Preferences:</strong> Your toggle settings (e.g., whether you have chosen to hide YouTube Shorts or Tag chips).</li>
      </ul>
      <p>
        Because this data is stored locally on your machine, it is never transmitted to us or any third parties. If you uninstall the Extension, this local data is permanently deleted from your browser.
      </p>

      <h2>3. Permissions Justification</h2>
      <p>
        To function correctly, Pin-Tube requires specific browser permissions. Here is exactly how they are used:
      </p>
      <ul>
        <li><code>storage</code>: Used strictly to save your pinned videos and toggle preferences locally on your device.</li>
        <li><code>scripting</code> &amp; host permissions (<code>*://*.youtube.com/*</code>): Used to inject the &quot;Pin&quot; button into the YouTube video player, render the pinned videos shelf on your homepage, and hide distracting UI elements (like Shorts). This script runs entirely locally within your browser and does not transmit data outward.</li>
        <li><code>tabs</code>: Used solely to manage the Extension&apos;s custom dashboard tabs, preventing the Extension from opening duplicate &quot;Manage Pinned Videos&quot; tabs when you click the extension menu.</li>
      </ul>

      <h2>4. Third-Party Data Sharing</h2>
      <p>
        Because we do not collect any data, we do not sell, trade, or transfer your data to outside parties. Pin-Tube strictly complies with the Chrome Web Store Developer Program Policies regarding data usage.
      </p>

      <h2>5. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time if new features require changes to how local data is managed. Any updates will be reflected on this page with an updated &quot;Effective Date.&quot;
      </p>

      <h2>6. Contact Information</h2>
      <p>
        If you have any questions or concerns regarding this Privacy Policy or the Pin-Tube extension, please contact us at:
      </p>
      <ul>
        <li><strong>Developer:</strong> Ullas Kunder</li>
        <li><strong>Website:</strong> <a href="https://ullaskunder.com" target="_blank" rel="noopener noreferrer">https://ullaskunder.com</a></li>
        <li><strong>Email:</strong> <a href="mailto:ullaskunder3@gmail.com">ullaskunder3@gmail.com</a></li>
        <li><strong>Production Site:</strong> <a href="https://www.xforbes.com/pin-tube" target="_blank" rel="noopener noreferrer">https://www.xforbes.com/pin-tube</a></li>
      </ul>
    </LegalPage>
  );
}
