import React, { useState } from "react";

const Contact = () => {
  const [emailContent, setEmailContent] = useState("");

  const handleSubmit = async () => {
    if (!emailContent.trim()) {
      alert("Please enter a message.");
      return;
    }

    try {
      // Send the data to the backend
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: emailContent }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        setEmailContent(""); // Clear the input
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question in Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="Type your message here"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          className="contact-input"
        />
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
