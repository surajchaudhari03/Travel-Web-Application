import React from 'react';
// import { Data } from './footerData';
import '../../Styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section-1">
        {Data.sections.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map(({ link, index }) => (
                link ? (
                  <li key={index}>
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
          {Data.socialLinks.map((link, index) => (
            <a key={index} href={link?.url}>
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;


const Data = {
  sections: [
    {
      title: 'Company',
      links: [
        {  url: "#", text: "About"},
        {  url: "#", text: "Careers"},
        {  url: "#", text: "Brand Center",},
        {  url: "#", text: "Blog"},
      ],
    },
    {
      title: "Help Center",
      links: [
        {  url: "#", text: "Discord Server",},
        {  url: "#", text: "Twitter"},
        {  url: "#", text: "Facebook"},
        {  url: "#", text: "Contact Us"},
      ],
    },
    {
      title: 'Legal',
      links: [
        {  url: "#", text: "Privacy Policy"},
        {  url: "#", text: "Licensing"},
        {  url: "#", text: "Terms & Conditions"}
      ],
    },
    {
      title: "Download",
      links: [
        {  url: "#", text: "iOS"},
        {  url: "#", text: "Android"},
        {  url: "#", text: "Windows"},
        {  url: "#", text: "MacOS"},
      ],
    }
  ],
  socialLinks: [
    { url: "#", icon: "fab fa-github" },
    { url: "#", icon: "fab fa-linkedin" },
    { url: "#", icon: "fab fa-instagram" }
  ],
};