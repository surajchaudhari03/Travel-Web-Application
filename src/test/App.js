import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import TopPicks from '../Picks';
import Collections from '../Collections';
import Download from '../Download';
import Media from '../Media';
import Footer from '../footer';
import ExperienceCard from '../ExperienceCard';
import '../Styles/new-york.css';
import citiesData from './cities.json';

const CityPage = ({ history }) => {
  const [selectedCity, setSelectedCity] = useState('New York');
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const city = citiesData.find((city) => city.name === selectedCity);
    setCityData(city);
  }, [selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="city-page-wrapper">
      <select value={selectedCity} onChange={handleCityChange}>
        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <Header
        backgroundImagesData={cityData.backgroundImagesData}
        history={history}
        selectedCity={selectedCity}
        navigationData={cityData.navigationData}
      />
      <TopPicks
        headline={`Top Experiences in ${selectedCity}`}
        pickedData={cityData.pickedData}
      />
      <Collections collectionsData={cityData.collectionsData} />
      {cityData.sections &&
        cityData.sections.map(
          ({ id, headline, description, sectionData }) => (
            <CitySection
              key={id}
              headline={headline}
              description={description}
              cardsData={sectionData}
            />
          )
        )}
      <Download />
      <Media />
      <Footer />
    </div>
  );
};

const CitySection = ({ headline, description, cardsData }) => (
  <div className="city-section-wrapper">
    <h2
      style={{
        textAlign: 'left'
      }}
    >
      {headline}
    </h2>
    <hr
      style={{
        backgroundColor: '#ffbb58',
        width: '75px',
        height: '2px',
        border: 'none',
        marginTop: '0px',
        marginLeft: '0px',
        marginBottom: '10px'
      }}
    />
    <p
      style={{
        color: '#545454',
        fontSize: '15.3px',
        marginTop: '0px',
        textAlign: 'left',
        lineHeight: '20px'
      }}
    >
      {description}
    </p>
    <div className="travel-card-wrapper">
      {cardsData &&
        cardsData.map(
          ({
            id,
            city,
            url,
            description,
            currency,
            currentPrice,
            ratings,
            stars,
            discount,
            cashback,
            lastPrice,
            about,
            showMore,
            highlight
          }) => (
            <ExperienceCard
              key={id}
              city={city}
              about={about}
              url={url}
              description={description}
              currency={currency}
              price={currentPrice}
              ratings={ratings}
              stars={stars}
              discount={discount}
              cashback={cashback}
              lastPrice={lastPrice}
              showMore={showMore}
              highlight={highlight}
            />
          )
        )}
    </div>
  </div>
);

export default CityPage;