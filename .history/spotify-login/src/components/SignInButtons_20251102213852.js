import React, { useState } from "react";
import appleIcon from "../assets/apple.svg";
import googleIcon from "../assets/google.svg";
import xIcon from "../assets/x.svg";

const SignInButtons = () => {
  const [active, setActive] = useState(null);

  const buttons = [
    { id: "apple", src: appleIcon, alt: "Apple" },
    { id: "google", src: googleIcon, alt: "Google" },
    { id: "x", src: xIcon, alt: "X" },
  ];

  const onMouseEnter = (id) => setActive(id);
  const onMouseLeave = () => setActive(null);

  return (
    <div className="btn-wrap">
      <div className="btn-pill">
        {buttons.map((b) => (
          <button
            key={b.id}
            className={`signin-btn ${active === b.id ? "active" : ""}`}
            onMouseEnter={() => onMouseEnter(b.id)}
            onMouseLeave={onMouseLeave}
            aria-label={`sign in with ${b.alt}`}
          >
            <img src={b.src} alt={b.alt} className="btn-icon" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SignInButtons;