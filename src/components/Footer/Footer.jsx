import React from 'react';
import { Data } from './footerData';
import '../../Styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section-1">
        {Data.sections.map((section) => (
          <div key={section.id}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link) => (
                link ? (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ) : null // Or render a placeholder if link is undefined
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="footer-section-2">
        <div className="copyright">
          <p>&copy; 2024 surajchaudhari03™</p>
        </div>
        <div className="social-icons">
          {Data.socialLinks.map((link) => (
            <a key={link.id} href={link?.url}>
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;