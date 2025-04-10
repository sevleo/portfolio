import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2 className="section-title">Business Registration Details</h2>

        <div className="info-group">
          <h3 className="info-label">Business Name</h3>
          <p className="info-value">S. Leo Vision LLC</p>
        </div>

        <div className="info-group">
          <h3 className="info-label">Contact Information</h3>
          <p className="info-value">Name: Vsevolod Leonov</p>
          <p className="info-value">Phone: +1 (609) 255-6416</p>
          <p className="info-value">Email: contact@sleo.dev</p>
        </div>
        <div className="info-group">
          <h3 className="info-label">Registered Address</h3>
          <p className="info-value">30 N Gould St Ste N, Sheridan, WY 82801</p>
        </div>

        <div className="info-group">
          <h3 className="info-label">Registered Agent</h3>
          <p className="info-value">Northwest Registered Agent Service Inc</p>
          <p className="info-value">30 N Gould St Ste N, Sheridan, WY 82801</p>
        </div>

        <div className="info-group">
          <h3 className="info-label">Registration Details</h3>
          <p className="info-value">
            Registered with: Wyoming Secretary of State
          </p>
          <p className="info-value">Registration Date: December 19, 2024</p>
        </div>

        <div className="info-group">
          <h3 className="info-label">Social Media Management</h3>
          <a
            href="https://publora.com/"
            rel="dofollow"
            className="info-value external-link"
          >
            Publora - Smart Social Media Management Platform for Content Creators
          </a>
          <p className="info-value">
            Streamline your social media with this innovative AI-powered
            scheduler. Supporting Instagram, TikTok, YouTube, Facebook, and more
            platforms from one clean, distraction-free dashboard. Perfect for
            creators who value consistency and efficiency - schedule unlimited
            posts up to 3 months in advance with smart timing recommendations.
          </p>
        </div>

        <Link to="/portfolio" className="portfolio-link">
          View CV
        </Link>
      </div>
    </div>
  );
}
