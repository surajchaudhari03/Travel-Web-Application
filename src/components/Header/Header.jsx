import React, { useState, useEffect } from 'react';
import HeaderNav from './HeaderNav';


const Header = ({navigationData, citySectionsData}) => {
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearchChange = event => {
    setSearchItem(event.target.value);
  };

  return (
    <React.Fragment>
      <HeaderNav
        onChange={handleSearchChange}
        search={searchItem}
        navigationData={navigationData}
        allCityData={citySectionsData}
      />
    </React.Fragment>
  );
};

export default Header;