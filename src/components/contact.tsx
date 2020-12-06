import React, { useState } from "react";
import { setTimeout } from "timers";

function Contact() {
  const [loading, setloading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  function sendData(e: any) {
    e.preventDefault();
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }, 3000);
  }

  return (
    // 
    <div></div>
  );
}

export default Contact;
