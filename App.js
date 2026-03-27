import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">InsightForge AI</div>
          <ul className="nav-menu">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Unlock AI Insights for Your Business</h1>
          <p>Analyze sales data, predict trends. No code. Free start.</p>
          <button className="cta-button">Get Started For Free</button>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div><h3>500+</h3><p>Businesses</p></div>
          <div><h3>₹50Cr+</h3><p>Revenue Tracked</p></div>
          <div><h3>99.9%</h3><p>Uptime</p></div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Smart Analytics</h3>
            <p>CSV upload → instant dashboards & forecasts.</p>
          </div>
          <div className="feature-card">
            <h3>Data Security </h3>
            <p>No storage without consent.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Integration</h3>
            <p>Excel/Sheets compatible. API ready.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Simple Pricing</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Starter</h3>
            <p className="price">₹0/mo</p>
            <ul>
              <li>5 reports/mo</li>
              <li>Basic predictions</li>
            </ul>
          </div>
          <div className="price-card popular">
            <span>Popular</span>
            <h3>Pro</h3>
            <p className="price">₹499/mo</p>
            <ul>
              <li>Unlimited reports</li>
              <li>Advanced AI</li>
            </ul>
            <button>Start Trial</button>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your needs..." value={formData.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <div className="footer-content">
          <p>&copy; 2026 AIInsight Hub | MCA Startup Project</p>
          <div><a href="#">Privacy</a> | <a href="#">Terms</a> | Kolkata, WB</div>
        </div>
      </footer>
    </div>
  );
}

export default App;