import React, { useState } from "react";
import './Account.css'

export default function UserAccount() {
  const [showAccount, setShowAccount] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleToggle = () => {
    setShowAccount(!showAccount);

    // Simulating delay before showing the profile
    setTimeout(() => {
      if (showAccount) {
        setName("Arnab Manna");
        setEmail("arnabmanna203@gmail.com");
      }
    }, 300);
  };

  return (
    <div>
      <button className="Account_profile" onClick={handleToggle}>
        Profile
      </button>
      <div
        className={`Profile ${showAccount ? "active animation" : ""}`}
      >
        <h2>User Account</h2>
        <p>Name: <span>{name}</span></p>
        <p>Email: <span>{email}</span></p>
      </div>
    </div>
  );
}
