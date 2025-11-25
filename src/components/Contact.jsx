// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <footer id="contact" className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-bebas text-4xl mb-4">Let's build something</h3>
        <p className="mb-6 text-sm">
          Interested in collaborating? Send a message — I respond quickly.
        </p>

        <a href="mailto:youremail@example.com" className="inline-block px-6 py-3 rounded-full nav-pill text-white font-medium">
          Email me
        </a>
      </div>
    </footer>
  );
}
