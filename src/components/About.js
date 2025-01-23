import React from 'react';
import './About.css'; // Import custom CSS file for About page

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Text Converter</h1>
      <p className="about-description">
        Welcome to the <strong>Text Converter</strong> application! This app is designed to help you quickly and easily convert and analyze text for different purposes. Whether you need to change the case, remove extra spaces, or perform other text-related operations, this app provides a simple and user-friendly interface to do so.
      </p>

      <h2 className="about-subtitle">Features</h2>
      <ul className="features-list">
        <li><strong>Text Case Conversion:</strong> Convert text to uppercase, lowercase, or title case.</li>
        <li><strong>Word and Character Count:</strong> Quickly check the number of words and characters in your text.</li>
        <li><strong>Extra Spaces Removal:</strong> Clean up your text by removing extra spaces between words or at the start and end of the text.</li>
        <li><strong>Dark Mode:</strong> Toggle between light and dark modes for a more comfortable reading experience.</li>
      </ul>

      <h2 className="about-subtitle">How to Use</h2>
      <p className="about-steps">
        1. Type or paste your text into the input box.<br />
        2. Choose the action you'd like to perform from the available options (e.g., change the case, count words, etc.).<br />
        3. The converted text will appear in real-time.<br />
        4. You can also copy the result to your clipboard and use it wherever you need!
      </p>

      <h2 className="about-subtitle">Why Use Text Converter?</h2>
      <p className="about-description">
        This tool is perfect for students, writers, content creators, and anyone who works with text. Whether you're preparing content for social media, writing an essay, or just cleaning up some text, our app helps you get the job done faster and more efficiently.
      </p>

      <p className="about-description">
        Thank you for using our Text Converter app! We hope it helps make your text editing tasks easier.
      </p>
    </div>
  );
};

export default About;
