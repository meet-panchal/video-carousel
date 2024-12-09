import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import './footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(prevSection => (prevSection === section ? null : section));
  };

  const isSectionActive = (section: string) => activeSection === section;

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Shop Section */}
        <div className="footer-section">
          <button className="accordion-header" onClick={() => toggleSection('shop')}>
            Shop
            <span className={`chevron ${isSectionActive('shop') ? 'rotated' : ''}`}><FaAngleDown/></span>
          </button>
          <h3 className="footer-section-title">Shop</h3>
          <ul className={`accordion-content ${isSectionActive('shop') ? 'active' : ''}`}>
            <li>Seating</li>
            <li>Modules</li>
            <li>Tables</li>
            <li>Storage</li>
            <li>Accessories</li>
            <li>Outdoor</li>
            <li>Refurbished</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className="footer-section">
          <button className="accordion-header" onClick={() => toggleSection('explore')}>
            Explore
            <span className={`chevron ${isSectionActive('explore') ? 'rotated' : ''}`}><FaAngleDown/></span>
          </button>
          <h3 className="footer-section-title">Explore</h3>
          <ul className={`accordion-content ${isSectionActive('explore') ? 'active' : ''}`}>
            <li>Altus Collection</li>
            <li>Cello Collection</li>
            <li>Atmosphere Collection</li>
            <li>Neptune Collection</li>
            <li>Mistral Collection</li>
            <li>Free Swatches</li>
            <li>Blog – Simone’s Corner</li>
            <li>Our Locations</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <button className="accordion-header" onClick={() => toggleSection('company')}>
            Company
            <span className={`chevron ${isSectionActive('company') ? 'rotated' : ''}`}><FaAngleDown/></span>
          </button>
          <h3 className="footer-section-title">Company</h3>
          <ul className={`accordion-content ${isSectionActive('company') ? 'active' : ''}`}>
            <li>About Cozey</li>
            <li>Our Story</li>
            <li>Our Initiatives</li>
            <li>Our Approach</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <button className="accordion-header" onClick={() => toggleSection('support')}>
            Support
            <span className={`chevron ${isSectionActive('support') ? 'rotated' : ''}`}><FaAngleDown/></span>
          </button>
          <h3 className="footer-section-title">Support</h3>
          <ul className={`accordion-content ${isSectionActive('support') ? 'active' : ''}`}>
            <li>Track My Order</li>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Warranty</li>
            <li>Financing</li>
            <li>Reviews</li>
            <li>Assembly Guides</li>
            <li>Consultations</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <button className="accordion-header" onClick={() => toggleSection('follow')}>
            Follow Us
            <span className={`chevron ${isSectionActive('follow') ? 'rotated' : ''}`}><FaAngleDown/></span>
          </button>
          <h3 className="footer-section-title">Follow Us</h3>
          <ul className={`accordion-content ${isSectionActive('follow') ? 'active' : ''}`}>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>Facebook</li>
            <li>X (Twitter)</li>
            <li>Pinterest</li>
            <li>TikTok</li>
            <li>LinkedIn</li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
