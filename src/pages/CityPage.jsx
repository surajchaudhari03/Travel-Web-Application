import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import BackgroundCaraousel from '../components/BackgroundCaraousel';
import TopPicks from '../components/Picks';
import Footer from '../components/Footer/Footer';
import ExperienceCard from '../components/ExperienceCard';
import '../Styles/citypage.css';

const CityPage = ({ cityName, backgroundImagesData, navigationData, topPicksData, citySectionsData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const topCards = topPicksData.map(([categoryIndex, cardIndex]) => {
    return citySectionsData[categoryIndex].sectionData[cardIndex];
  });


  return (
    <div >
      <Header
        backgroundImagesData={backgroundImagesData}
        navigationData={navigationData}
        citySectionsData={citySectionsData}
      />
      <div id='card-container'>
        
      <BackgroundCaraousel backgroundImagesData={backgroundImagesData} />
      <TopPicks
        headline={`Top Experiences in ${cityName}`}
        pickedData={topCards}
      />
      {citySectionsData &&
        citySectionsData.map(
          ({ id, idName, headline, description, sectionData }) => (
            <CitySection
              key={id}
              idName={idName}
              headline={headline}
              description={description}
              cardsData={sectionData}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

const CitySection = ({ idName, headline, description, cardsData }) => (
  <div id={idName} className="city-section-wrapper">
    <h2 style={{ textAlign: 'left' }}>
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
            description,
            about,
            image,
          }) => (
            <ExperienceCard
              key={id}
              city={city}
              about={about}
              description={description}
              image={image}
            />
          )
        )}
    </div>
  </div>
);

export default CityPage;
