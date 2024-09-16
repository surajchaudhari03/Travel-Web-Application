import React from 'react';
import CityPage from '../CityPage';

const NewYork = () => {
  return (
    <CityPage
      cityName="New York"
      backgroundImagesData={backgroundImagesData}
      navigationData={NewYorkNavigationData}
      topPicksData={NewYorkData}
      citySectionsData={AllNewYorkCityData}
    />
  );
};


// New York Caraousel Images

const backgroundImagesData = [
  {
    id: 1,
    url:
      'https://cdn-imgix-open.headout.com/flaps/city-specific/new-york/desktop/Broadway-week-desktop-4.png?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 2,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/new-york.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 3,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/cashback-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 4,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/ny-508-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 5,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/ny-attractions-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 6,
    url:
      'https://cdn-imgix-open.headout.com/flaps/non-city-specific/desktop/experience-desktop.png?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  }
];

// New York Navigation Data

const NewYorkNavigationData = [
  {
    id: "top-picks",
    name: 'Top Experiences'
  },
  {
    id: "broadway-show",
    name: 'Broadway Show Tickets'
  },
  {
    id: "city-walk",
    name: 'City Walks'
  },
  {
    id: "food",
    name: 'Food and Drinks'
  },
  {
    id: "nyc-tour",
    name: 'NYC Tours'
  },
  {
    id: "entertainment",
    name: 'Entertainment'
  },
  {
    id: "city-passes",
    name: "New York City Passes"
  },
  {
    id: "nyc101",
    name: "NYC 101"
  }
];

// All New York City Sections Data

const AllNewYorkCityData = [
  {
    id: 1,
    idName: "broadway-show",
    headline: 'Broadway Show Tickets',
    description:
      'Stay up to date on the season’s hottest shows and score amazing discounts and offers for the most popular entertainment attraction in the world.',
    sectionData: [
      {
        id: 1,
        about: 'BROADWAY MUSICALS',
        description: 'Aladdin',
        image:
          'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        about: 'BROADWAY MUSICALS',
        description: `The Phantom of the Opera`,
        image:
          'https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        about: 'BROADWAY SHOW TICKETS',
        description: `King Kong - Broadway Week Discount`,
        image:
          'https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        about: 'BROADWAY MUSICALS',
        description: `The Lion King`,
        image:
          'https://cdn-imgix.headout.com/tour/637/TOUR-IMAGE/0442ebf8-8ad3-4e1b-bb49-3b7dde81eb35-507-new-york-the-lion-king-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        about: 'BROADWAY MUSICALS',
        description: `Wicked`,
        image:
          'https://cdn-imgix.headout.com/tour/647/TOUR-IMAGE/35c36ce6-af74-4fdb-a14f-a2f947f6c713-5.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        about: 'BROADWAY MUSICALS',
        description: `Waitress`,
        image:
          'https://cdn-imgix.headout.com/tour/3559/TOUR-IMAGE/687350c0-17f9-424d-840a-4b02fad0a54e-2370-new-york-waitress-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        about: 'BROADWAY MUSICALS',
        description: `Anastasia`,
        image:
          'https://cdn-imgix.headout.com/tour/7573/TOUR-IMAGE/fa5af28b-c617-446d-a475-ced33c58c98d-4653-new-york-anastasia-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        image: null
      }
    ]
  },
  {
    id: 2,
    idName: "city-walk",
    headline: 'City Walks',
    description:
      'Discover what makes New York one of the most visited places in the world with these stunning NYC sightseeing tours. You will not only get to visit these popular landmarks, but also learn about the history and get to hear stories about the city’s past as well.',
    sectionData: [
      {
        id: 1,
        currentPrice: 45,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'CITY WALKS',
        description: 'New York TV and Movie Sites Tour',
        image:
          'https://cdn-imgix.headout.com/tour/961/image/0.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 53.65,
        lastPrice: 62,
        currency: '$',
        stars: 4.1,
        ratings: 1781,
        cashback: null,
        discount: 13,
        description: 'Sopranos Tour',
        about: `CITY WALKS`,
        image:
          'https://cdn-imgix.headout.com/tour/960/TOUR-IMAGE/6fcfdbcd-2b0d-4df7-9da0-6e14304479a6-737-new-york-sopranos-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '$',
        stars: 4.9,
        ratings: 18,
        cashback: null,
        discount: 12,
        about: 'CITY WALKS',
        description: `King Kong - Broadway Week Discount`,
        image:
          'https://cdn-imgix.headout.com/tour/954/image/3.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 50,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'CITY WALKS',
        description: `Holiday Lights and Movie Sights`,
        image:
          'https://cdn-imgix.headout.com/tour/959/TOUR-IMAGE/0c5840a5-f807-4259-992e-db584df6519e-736-new-york-holiday-lights-and-movie-sites-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 28,
        lastPrice: 35,
        currency: '$',
        stars: 4.8,
        ratings: 270,
        cashback: null,
        discount: 20,
        about: 'ARCHITECTURE',
        description: `NYC Street Art Tour`,
        image:
          'https://cdn-imgix.headout.com/tour/17177/TOUR-IMAGE/90d6573a-e021-4f15-b2c4-2dc4d674cb8a-9460-new-york-nyc-street-art-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 33.75,
        lastPrice: 45,
        currency: '$',
        stars: 4.5,
        ratings: 330,
        cashback: null,
        discount: 25,
        about: 'CITY WALKS',
        description: `Sunrise Yoga Walk`,
        image:
          'https://cdn-imgix.headout.com/tour/17189/TOUR-IMAGE/a8ce2e14-2a95-44a4-b150-223be1f156bb-9472-new-york-sunrise-yoga-walk-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 18,
        lastPrice: 21.77,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 17,
        about: 'CITY WALKS',
        description: `NYC Road Bike Rental`,
        image:
          'https://cdn-imgix.headout.com/tour/3986/image/nycroadbikerental-01edited.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        image: null
      }
    ]
  },
  {
    id: 3,
    idName: "food",
    headline: 'Food and Drinks',
    description:
      'Get a taste of New York’s truly global culture with these delicious food tours of New York. Whether you’re looking for the best New York pizza or fancy the best craft beer from the east coast, these food and culinary tours of New York will be perfect for you.',
    sectionData: [
      {
        id: 1,
        currentPrice: 61,
        lastPrice: 70,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'FOOD AND DRINKS',
        description: 'Tenements, Tales & Tastes',
        image:
          'https://cdn-imgix.headout.com/tour/4280/TOUR-IMAGE/ec8f7c1c-a3e9-4edb-b252-c85e55c05e2b-2767-new-york-tenements?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 60,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'FOOD AND DRINKS',
        description: `The Great Food Tour of New York`,
        image:
          'https://cdn-imgix.headout.com/tour/692/image/tourlandish--28.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 56,
        lastPrice: 64,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'FOOD AND DRINKS',
        description: `Brownstone Brooklyn Eats`,
        image:
          'https://cdn-imgix.headout.com/tour/4278/image/2151606-origedit.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 82,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: 10,
        about: 'FOOD AND DRINKS',
        description: `The Original Brooklyn Pizza`,
        image:
          'https://cdn-imgix.headout.com/tour/2873/image/1997-new-york-the-original-brooklyn-pizza-tour-03.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 50,
        lastPrice: null,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        about: 'FOOD AND DRINKS',
        description: `Chinatown Food Tour`,
        image:
          'https://cdn-imgix.headout.com/tour/630/image/500ChinatownFoodTour1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 72,
        lastPrice: 82,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'FOOD AND DRINKS',
        description: `NY Craft Cocktail Tour`,
        image:
          'https://cdn-imgix.headout.com/tour/4281/TOUR-IMAGE/0e29c9d4-bda2-42f7-9a53-410f94233f19-2768-new-york-ny-craft-cocktail-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 57,
        lastPrice: null,
        currency: '$',
        stars: 5.0,
        ratings: 1,
        cashback: null,
        about: 'NEW YORK CITY WALKING TOURS',
        description: 'Chelsea Market Food and Culture Walking Tour',
        image:
          'https://cdn-imgix.headout.com/tour/2906/TOUR-IMAGE/4414a92f-1570-4b10-b05d-deaa5737d7f8-2005-ChelseaFoodTour-1-2-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        image: null
      }
    ]
  },
  {
    id: 4,
    idName: "nyc-tour",
    headline: 'NYC Tours',
    description:
      'With a range of tours catering to different parts of the city, you get the chance to see some of the major attractions. Check out our list of New York Bus Tours to know more.',
    sectionData: [
      {
        id: 1,
        currentPrice: 33,
        lastPrice: 35,
        currency: '$',
        stars: 5.0,
        ratings: 3,
        cashback: null,
        discount: 5,
        about: 'NYC TOURS',
        description: 'The Tour - The Ride',
        image:
          'https://cdn-imgix.headout.com/tour/667/TOUR-IMAGE/f654eef0-7306-4ec1-8f69-acad8e28ee80-537-new-york-the-tour---the-ride-02.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 86,
        lastPrice: 89,
        currency: '$',
        stars: 4.9,
        ratings: 1587,
        cashback: null,
        discount: 3,
        highlight: `SAVE UP To 50%`,
        about: 'NEW YORK EXPLORER PASS',
        description: 'New York Explorer Pass - 3 Attractions',
        image:
          'https://cdn-imgix.headout.com/tour/2477/TOUR-IMAGE/1f7514ef-73b3-4a51-8510-3e5ba6528318-1739-new-york-nyc-explorer-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 134.4,
        lastPrice: 168,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 20,
        about: 'NYC TOURS',
        description: `New York in a Day`,
        image:
          'https://cdn-imgix.headout.com/tour/16150/TOUR-IMAGE/e00a5d3a-a3ec-4f7d-8fd8-de95beae9af5-8964-new-york-in-a-day-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 51,
        lastPrice: 54,
        currency: '$',
        stars: null,
        ratings: null,
        discount: 5,
        about: 'NYC TOURS',
        description: `The Downtown Experience - The Ride`,
        image:
          'https://cdn-imgix.headout.com/tour/14354/TOUR-IMAGE/bbe86169-096f-48a4-97e8-4c2262340874-7836-new-york-the-downtown-experience---the-ride-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 35,
        lastPrice: 38,
        currency: '$',
        stars: 4.4,
        ratings: 61,
        cashback: 10,
        discount: 7,
        about: 'ONE WORLD OBSERVATORY',
        description: `One World Observatory Priority Entrance Tickets`,
        image:
          'https://cdn-imgix.headout.com/tour/5568/TOUR-IMAGE/185a0227-2f26-4fb5-bd06-dfa5fede78a8-ny-attractions-one-world-observatory-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 124,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 986,
        cashback: null,
        discount: null,
        highlight: `SAVE UP TO $103`,
        about: 'THE NEW WORK PASS',
        description: `New York Unlimited Attraction Pass - 1 Day`,
        image:
          'https://cdn-imgix.headout.com/tour/1816/TOUR-IMAGE/5d6da19b-0a01-4609-8fc2-6919972d9dcd-1294-new-york-1-day-new-york-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 761,
        cashback: 5,
        discount: null,
        about: 'The SIGHTSEEING PASS',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Cruise`,
        image:
          'https://cdn-imgix.headout.com/tour/16543/TOUR-IMAGE/4a07f498-91fd-4bad-b329-8d0a0efda2be-9173-new-york-freestyle--cruise-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        image: null
      }
    ]
  },
  {
    id: 5,
    idName: "entertainment",
    headline: 'Entertainment',
    description:
      'Check out some of the hottest events happening in and around New York City. From tickets for a Knicks game at Madison Square Garden to a beautiful Broadway experience, these are some of the best events happening in New York at the moment.',
    sectionData: [
      {
        id: 1,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '$',
        stars: 4.9,
        ratings: 18,
        cashback: null,
        discount: 12,
        about: 'CITY WALKS',
        description: 'Sex and the City Tour',
        image:
          'https://cdn-imgix.headout.com/tour/954/image/3.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 49.14,
        lastPrice: 56,
        currency: '$',
        stars: null,
        ratings: null,
        cashback: null,
        discount: 12,
        about: 'CITY WALKS',
        description: `Gossip Girl Sites Tour`,
        image:
          'https://cdn-imgix.headout.com/tour/721/image/GossipGirls.PCP.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      }
    ]
  },
  {
    id: 6,
    idName: "city-passes",
    headline: 'New York City Passes',
    description:
      'Explore New York in a flexible and cost-effective manner with these city passes! Choose the New York Pass for unlimited access to attractions during a set number of days. For those who want to visit a set number of attractions, we recommend the New York Explorer Pass, which lets you pick the number of attractions to visit and then explore at your own pace and convenience!',
    sectionData: [
      {
        id: 1,
        currentPrice: 86,
        lastPrice: 89,
        currency: '$',
        stars: 4.9,
        ratings: 1587,
        cashback: null,
        highlight: `SAVE UP To 50%`,
        about: 'NEW YORK EXPLORER PASS',
        description: 'New York Explorer Pass - 3 Attractions',
        image:
          'https://cdn-imgix.headout.com/tour/2477/TOUR-IMAGE/1f7514ef-73b3-4a51-8510-3e5ba6528318-1739-new-york-nyc-explorer-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 119,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 828,
        cashback: null,
        highlight: `BEST SELLER`,
        about: 'NEW YORK EXPLORER PASS',
        description: `New York Explorer Pass - 4 Attractions`,
        image:
          'https://cdn-imgix.headout.com/tour/17250/TOUR-IMAGE/d8b181dc-7748-4329-a6b8-0a6911fd19f9-9513-new-york-4-attraction-new-york-explorer-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 134,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 809,
        cashback: null,
        highlight: `VALUE FOR MONEY`,
        discount: null,
        about: 'NEW YORK EXPLORER PASS',
        description: `New York Explorer Pass - 5 Attractions`,
        image:
          'https://cdn-imgix.headout.com/tour/17251/TOUR-IMAGE/d1cc2347-b395-4026-b6eb-d455261453d5-9514-new-york-5-attraction-new-york-explorer-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 124,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 986,
        cashback: null,
        about: 'NEW YORK PASS',
        description: `New York Unlimited Attraction Pass - 1 Day`,
        image:
          'https://cdn-imgix.headout.com/tour/1816/TOUR-IMAGE/5d6da19b-0a01-4609-8fc2-6919972d9dcd-1294-new-york-1-day-new-york-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 189,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 588,
        cashback: null,
        highlight: `SAVE UP TO $10`,
        about: 'NEW YORK PASS',
        description: `New York Unlimited Attraction Pass - 2 Days`,
        image:
          'https://cdn-imgix.headout.com/tour/17275/TOUR-IMAGE/fd9e371e-303c-4a34-a695-ef2089b54c0e-9534-new-york-2-day-new-york-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 159,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 881,
        cashback: null,
        highlight: `MUST VISIT`,
        discount: null,
        about: 'The SIGHTSEEING PASS',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Bus and Cruise`,
        image:
          'https://cdn-imgix.headout.com/tour/3534/TOUR-IMAGE/fc281323-cedc-4d4d-b931-eff48a0c03d6-2360-new-york-freestyle-new-york-city-pass--attractions---hop-on-hop-off-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 69,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 761,
        cashback: 5,
        discount: null,
        about: 'The SIGHTSEEING PASS',
        description: `FreeStyle Attraction Pass with Hop-On Hop-Off Cruise`,
        image:
          'https://cdn-imgix.headout.com/tour/16543/TOUR-IMAGE/4a07f498-91fd-4bad-b329-8d0a0efda2be-9173-new-york-freestyle--cruise-pass-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      }
    ]
  },
  {
    id: 7,
    idName: "nyc101",
    headline: 'NYC 101',
    description:
      'From museums that offer knowledge about art and history to high rise buildngs and structures, New York attractions have it all. Have a look at these products to know more.',
    sectionData: [
      {
        id: 1,
        currentPrice: 37,
        lastPrice: 39.2,
        currency: '$',
        stars: 4.9,
        ratings: 533,
        cashback: 10,
        about: 'TOP OF THE ROCK',
        description: 'Top of the Rock Observation Deck: Flexible Date Tickets',
        image:
          'https://cdn-imgix.headout.com/tour/751/TOUR-IMAGE/5a1a9e72-a128-4912-90d5-b2c78e83ee42-ny-attractions-top-of-the-rock-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 2,
        currentPrice: 32,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 311,
        cashback: null,
        discount: 20,
        highlight: `NEW ARRIVAL`,
        about: 'MUESEUMS',
        description: `Ripley's Believe It or Not with Admission to Relic`,
        image:
          'https://cdn-imgix.headout.com/tour/1283/TOUR-IMAGE/c73e4b94-16f2-4514-9cde-2e6a0097b46e-image-1-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 3,
        currentPrice: 21.5,
        lastPrice: 23,
        currency: '$',
        stars: 5.0,
        ratings: 331,
        cashback: null,
        discount: 6,
        about: 'MUSEUMS',
        description: `American Mueseum of Natural History`,
        image:
          'https://cdn-imgix.headout.com/tour/881/image/1-american-museum-of-natural-history-dinasouredit.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 4,
        currentPrice: 25,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 448,
        cashback: null,
        about: 'MUESUMS',
        highlight: `BEST SELLER`,
        description: `Skip the Line Tickets to Meuseum of Modern Art (MoMA)`,
        image:
          'https://cdn-imgix.headout.com/tour/729/TOUR-IMAGE/d796f45b-bc23-44ea-8a1f-533b03cdf3b2-598-new-york-museum-of-modern-art-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 5,
        currentPrice: 26,
        lastPrice: null,
        currency: '$',
        stars: 4.8,
        ratings: 660,
        cashback: null,
        about: 'MEUSEUMS',
        highlight: `BEST SELLER`,
        description: `9/11 Memorial & Meuseum Admission: Skip the Ticket Line`,
        image:
          'https://cdn-imgix.headout.com/tour/679/TOUR-IMAGE/73bed395-11c9-4fb8-85a5-5231279d4706-549-new-york-911-memorial-museum-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 6,
        currentPrice: 37,
        lastPrice: null,
        currency: '$',
        stars: 4.9,
        ratings: 752,
        cashback: 10,
        discount: null,
        about: 'EMPIRE STATE BUILDING',
        description: `Empire State Building Observatory Tickets`,
        image:
          'https://cdn-imgix.headout.com/tour/724/TOUR-IMAGE/42c90752-9142-4e81-97ea-f86bba64081b-593-new-york-skip-the-line-empire-state-building-observatory-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 7,
        currentPrice: 31,
        lastPrice: 38,
        currency: '$',
        stars: 5.0,
        ratings: 400,
        cashback: null,
        discount: 18,
        about: 'MEUSEUMS',
        description: `Madame Tussauds New York with VIP Fast Track Access`,
        image:
          'https://cdn-imgix.headout.com/tour/1279/TOUR-IMAGE/4ff22af8-2b2a-40a1-92aa-a0b74c1aad95-901-new-york-madame-tussauds-new-york--skip-the-line-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
      },
      {
        id: 8,
        showMore: true,
        currentPrice: null,
        lastPrice: null,
        currency: null,
        stars: null,
        ratings: null,
        cashback: null,
        discount: null,
        about: null,
        description: null,
        image: null
      }
    ]
  }
];

// New York Top Experiences Data

const NewYorkData = [
  [0, 0], // Broadway Show Tickets - Aladdin
  [1, 2], // King Kong - Broadway Week Discount
  [2, 1], 
  [3, 4], 
  [4, 0], 
];

export default NewYork;
