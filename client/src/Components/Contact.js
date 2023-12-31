import React, { useState } from "react";
import './Stylesheets/Contact.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setSubject("");
    navigate("/");
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const data = { email, subject, message }; 

    const url = "/api/contact"; 

    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Contact__agentForm">
      <form className="Contact__AgentForm">
        <h3>Contact Us</h3>
        <label>Email</label>
        <input
          value={email}
          type="email"
          placeholder="Enter your email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Subject</label>
        <input
          value={subject}
          type="text"
          placeholder="Enter the subject of message"
          required
          onChange={(e) => setSubject(e.target.value)}
        />
        <br />
        <label>Message</label>
        <textarea
          value={message}
          cols="30"
          rows="5"
          placeholder="Type your message here"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />

        <button onClick={sendMessage} type="submit">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
