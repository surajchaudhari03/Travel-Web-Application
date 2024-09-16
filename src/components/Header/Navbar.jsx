import React, { useState } from 'react';
import '../../Styles/Header.css';

const Navbar = ({ navigationData }) => {
    const [activeTab, setActiveTab] = useState('');

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const navBarHeight = document.querySelector('.header').offsetHeight;

        if (section) {
            window.scrollTo({
                top: section.offsetTop - navBarHeight,
                behavior: 'smooth',
            });
            setActiveTab(sectionId);
        }
    };

    return (
        <nav className="navigation">
            <ul>
                {navigationData &&
                    navigationData.map(({ id, name }) => (
                        <li key={id} onClick={() => handleScrollToSection(id)} className={activeTab === id ? 'active' : ''}>
                            {name}
                        </li>

                    ))}
            </ul>
        </nav>
    );
};

export default Navbar;