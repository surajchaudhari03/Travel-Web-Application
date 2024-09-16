import React from 'react';
import Slider from 'react-slick';
import ExperienceCard from './ExperienceCard';
import { Left } from './Arrows.js';
import { Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/top-picks.css';

const TopPicks = ({ headline, pickedData }) => {
  return (
    <section id='top-picks'>
      <div className="headout-picks-wrapper">
        <div className="headout-picks-nav">
          <div>
            <h1>{headline}</h1>
          </div>
        </div>
        <hr
          style={{
            backgroundColor: '#ffbb58',
            width: '75px',
            height: '2px',
            border: 'none',
            marginTop: '0px',
            marginLeft: '0px',
            marginBottom: '20px'
          }}
        />
        <div className="top-picked-carousel-wrap">
          <PickedSlider pickedData={pickedData} />
        </div>
      </div>
    </section>
  );
};

const PickedSlider = ({ pickedData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Right />,
    prevArrow: <Left />
  };

  return (
    <Slider {...settings}>
      {pickedData &&
        pickedData.map(
          ({
            id,
            city,
            image,
            description,
            about
          }) => (
            <ExperienceCard
              key={id}
              city={city}
              about={about}
              image={image}
              description={description}
            />
          )
        )}
    </Slider>
  );
};

export default TopPicks;