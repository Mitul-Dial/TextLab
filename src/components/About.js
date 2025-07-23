import React from "react";

export default function About(props) {
  // The mode (dark/light) is now controlled by a parent component
  // and passed down via props. The internal useState and toggleMode
  // are no longer needed here, as the mode is managed globally.

  // Define colors based on the current mode
  const backgroundColor = props.mode === 'dark' ? '#212529' : 'white';
  const textColor = props.mode === 'dark' ? 'white' : 'black';
  const accordionItemBg = props.mode === 'dark' ? '#343a40' : 'white'; // Slightly different shade for items
  const accordionBodyBg = props.mode === 'dark' ? '#495057' : 'white'; // Darker shade for body content
  const accordionBorderColor = props.mode === 'dark' ? '#495057' : 'rgba(0,0,0,.125)';

  return (
    // Main container div, its background and text color change based on props.mode
    <div className="container" style={{
      backgroundColor: backgroundColor,
      color: textColor,
    }}>
      {/* Main heading for the About page */}
      <h1 className="my-3">About TextLab</h1>
      
      {/* Accordion component with inline styles for its elements */}
      <div className="accordion" id="accordionExample" style={{
        // The accordion itself doesn't need a background here, items will cover it
      }}>
        {/* First accordion item: Your All-in-One Text Utility */}
        <div className="accordion-item" style={{ // Apply style to the item itself
          backgroundColor: accordionItemBg,
          color: textColor,
          border: `1px solid ${accordionBorderColor}`
        }}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                // Apply !important to override Bootstrap's default button styles
                backgroundColor: `${accordionItemBg} !important`,
                color: `${textColor} !important`,
                // Note: Overriding Bootstrap's accordion arrow icon (which is a background-image with filter)
                // is extremely difficult with inline styles. It might remain default color.
              }}
            >
              {/* Title for the first dropdown */}
              <strong>Your All-in-One Text Utility</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            {/* Content for the first dropdown */}
            <div className="accordion-body" style={{
              backgroundColor: `${accordionBodyBg} !important`, // Darker shade for body
              color: `${textColor} !important`,
            }}>
              TextLab is a powerful and efficient tool designed to analyze and
              manipulate your text instantly. Whether you need to quickly count
              words and characters, format text to uppercase or lowercase, or
              clean up extra spaces, our platform provides a seamless solution
              for all your text-related needs.
            </div>
          </div>
        </div>

        {/* Second accordion item: Simple, Fast, and Free */}
        <div className="accordion-item" style={{ // Apply style to the item itself
          backgroundColor: accordionItemBg,
          color: textColor,
          border: `1px solid ${accordionBorderColor}`
        }}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: `${accordionItemBg} !important`,
                color: `${textColor} !important`,
              }}
            >
              {/* Title for the second dropdown */}
              <strong>Simple, Fast, and Free</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            {/* Content for the second dropdown */}
            <div className="accordion-body" style={{
              backgroundColor: `${accordionBodyBg} !important`,
              color: `${textColor} !important`,
            }}>
              Our mission is to provide a free and accessible tool for everyone.
              TextLab is a completely free character and word counter that gives
              you instant statistics for any text you input. It’s perfect for
              students, writers, and professionals who need to meet specific
              word or character limits for their work.
            </div>
          </div>
        </div>

        {/* Third accordion item: Browser-Agnostic and Compatible */}
        <div className="accordion-item" style={{ // Apply style to the item itself
          backgroundColor: accordionItemBg,
          color: textColor,
          border: `1px solid ${accordionBorderColor}`
        }}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {/* Title for the third dropdown */}
              <strong>Browser-Agnostic and Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            {/* Content for the third dropdown */}
            <div className="accordion-body" style={{
              backgroundColor: `${accordionBodyBg} !important`,
              color: `${textColor} !important`,
            }}>
              TextLab is built to work seamlessly on any modern web browser,
              including Chrome, Firefox, Safari, and Opera. Whether you are on a
              desktop, tablet, or mobile device, you can access and use our tool
              effortlessly. It's the perfect companion for counting characters
              in documents, emails, social media posts, and more.
            </div>
          </div>
        </div>
      </div>
      {/* Removed the local toggleMode button as mode is controlled by parent */}
    </div>
  );
}
