import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/top-cities.css';

const TopCities = () => {
  return (
    <section id='top-cities'>
      <div className="top-cities-wrapper">
        <h1>Top Cities</h1>
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
        <div className="top-cities-carousel-wrap">
          <CitySlider />
        </div>
        <hr
          style={{
            height: '1px',
            color: '#e7e7e7',
            borderTop: 'none',
            borderLeft: 'none'
          }}
        />
      </div>
      <hr className="section-divide-hr" />
    </section>
  );
};

const CitySlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <Right />,
    prevArrow: <Left />
  };

  return (
    <Slider {...settings}>
      {topCitiesData &&
        topCitiesData.map(({ id, city, url, description, route }) => (
          <Link
            to={{ pathname: `/${route}` }}
            key={id}
            className="link"
          >
            <CityCard city={city} url={url} description={description} />
          </Link>
        ))}
    </Slider>
  );
};


const CityCard = ({ city, url, description }) => {
  const urlStyle = `url(${url})`;

  return (
    <div className="city-card-wrapper">
      <div className="city-card">
        <div
          className="city-card-img"
          style={{
            backgroundImage: urlStyle
          }}
        />
        <div className="city-details">
          <div id="triangle" />
          <p>{city}</p>
          <div id="city-hidden">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const topCitiesData = [
  {
    id: 1,
    city: 'New York',
    route: "newyork",
    description: 'Take a bite of the Big Apple',
    url:
      'https://cdn-imgix.headout.com/cities/new-york/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 2,
    city: 'Milan',
    route: 'milan',
    description: 'Enjoy and have fun in the City',
    url:
      'https://cdn-imgix.headout.com/cities/milan/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 3,
    city: 'Las Vegas',
    route: 'las-vegas',
    description: "An offer you can't refuse",
    url:
      'https://cdn-imgix.headout.com/cities/las-vegas/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 4,
    city: 'Rome',
    route: 'rome',
    description: 'Roam the eternal city',
    url:
      'https://cdn-imgix.headout.com/cities/rome/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
];

export default TopCities;
