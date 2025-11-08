import React, { useState } from "react";
import appleIcon from "../assets/apple.svg";
import googleIcon from "../assets/google.svg";
import xIcon from "../assets/x.svg";

const SignInButtons = () => {
  const [active, setActive] = useState(null);

  // 🔗 Список кнопок із посиланнями
  const buttons = [
    { id: "apple", icon: appleIcon, alt: "Apple", link: "https://appleid.apple.com/" },
    { id: "google", icon: googleIcon, alt: "Google", link: "https://accounts.google.com/" },
    { id: "x", icon: xIcon, alt: "X", link: "https://x.com/" },
  ];

  const handleClick = (link, id) => {
    setActive(id);
    // Відкрити посилання у новій вкладці
    window.open(link, "_blank");
  };

  return (
    <div className="button-container">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          className={`signin-btn ${active === btn.id ? "active" : ""}`}
          onClick={() => handleClick(btn.link, btn.id)}
          onMouseEnter={() => setActive(btn.id)}
          onMouseLeave={() => setActive(null)}
        >
          <img src={btn.icon} alt={btn.alt} />
        </button>
      ))}
    </div>
  );
};

export default SignInButtons;