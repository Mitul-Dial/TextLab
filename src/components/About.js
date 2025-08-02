import React, { useState } from "react";

export default function About(props) {
  const [activeItem, setActiveItem] = useState(0);

  const toggleAccordion = (index) => {
    setActiveItem(activeItem === index ? -1 : index);
  };

  const accordionData = [
    {
      title: "Your All-in-One Text Utility",
      icon: "fas fa-magic",
      content:
        "TextLab is a powerful and efficient tool designed to analyze and manipulate your text instantly. Whether you need to quickly count words and characters, format text to uppercase or lowercase, or clean up extra spaces, our platform provides a seamless solution for all your text-related needs.",
    },
    {
      title: "Simple, Fast, and Free",
      icon: "fas fa-heart",
      content:
        "Our mission is to provide a free and accessible tool for everyone. TextLab is a completely free character and word counter that gives you instant statistics for any text you input. It's perfect for students, writers, and professionals who need to meet specific word or character limits for their work.",
    },
    {
      title: "Browser-Agnostic and Compatible",
      icon: "fas fa-globe",
      content:
        "TextLab is built to work seamlessly on any modern web browser, including Chrome, Firefox, Safari, and Opera. Whether you are on a desktop, tablet, or mobile device, you can access and use our tool effortlessly. It's the perfect companion for counting characters in documents, emails, social media posts, and more.",
    },
    {
      title: "Advanced Text Processing",
      icon: "fas fa-cogs",
      content:
        "Beyond basic text manipulation, TextLab offers advanced features like email and URL extraction, word frequency analysis, find and replace functionality, and duplicate line removal. Our tool helps you process and analyze text in ways that save time and increase productivity.",
    },
    {
      title: "Privacy-Focused Design",
      icon: "fas fa-shield-alt",
      content:
        "Your privacy is our priority. All text processing happens locally in your browser - we never store, transmit, or have access to your text content. Your data stays completely private and secure while you work with our tools.",
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">
        <i className="fas fa-info-circle" style={{ marginRight: "1rem" }}></i>
        About TextLab
      </h1>

      <div className="accordion">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${activeItem === index ? "active" : ""}`}
          >
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <i
                  className={item.icon}
                  style={{ color: "var(--primary-color)" }}
                ></i>
                <strong>{item.title}</strong>
              </div>
              <i className={`accordion-icon fas fa-chevron-down`}></i>
            </button>
            {activeItem === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: "2rem", textAlign: "center" }}>
        <h3 style={{ marginBottom: "1rem", color: "var(--primary-color)" }}>
          <i className="fas fa-rocket" style={{ marginRight: "0.5rem" }}></i>
          Ready to Get Started?
        </h3>
        <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
          Start transforming your text with our powerful, easy-to-use tools. No
          signup required, completely free to use.
        </p>
        <a
          href="/"
          className="btn btn-primary"
          style={{ textDecoration: "none" }}
        >
          <i className="fas fa-play"></i>
          Try TextLab Now
        </a>
      </div>
    </div>
  );
}
