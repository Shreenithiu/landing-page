
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Our Product</h1>
        <p>Discover amazing features and great benefits.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="landing-features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Explanation of Feature 1 and its benefits.</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Explanation of Feature 2 and its benefits.</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Explanation of Feature 3 and its benefits.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
