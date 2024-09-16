import React from 'react';
import CityPage from '../CityPage';
import PuneImage from '../../Images/pune-city.webp';

const Pune = () => {
    return (
        <CityPage
            cityName="Pune"
            backgroundImagesData={backgroundImagesData}
            navigationData={PuneNavigationData}
            topPicksData={PuneData}
            citySectionsData={AllPuneCityData}
        />
    );
};

export default Pune;

const backgroundImagesData = [
    {
        id: 1,
        url: PuneImage
    },
    {
        id: 2,
        url:
            'https://img.freepik.com/premium-vector/pune-skyline-with-color-buildings-blue-sky-reflections-vector-illustration-business-travel-tourism-concept-with-historic-buildings-image-presentation-banner-placard-web-site_119523-4217.jpg'
    },
    {
        id: 3,
        url:
            'https://img.freepik.com/premium-photo/sunset-pune-cityscape-featuring-urban-architecture-amidst-twilight-skies_250484-22202.jpg'
    },
    {
        id: 4,
        url:
            'https://img.freepik.com/free-photo/high-angle-beautiful-city-sky_23-2149444940.jpg'
    },
    {
        id: 5,
        url:
            'https://img.freepik.com/free-vector/colorful-ahmedabad-skyline-illustration_23-2148617995.jpg'
    },
    {
        id: 6,
        url:
            'https://img.freepik.com/premium-vector/outline-pune-india-city-skyline-with-reflections-historic-buildings-isolated-white_119523-11738.jpg'
    }
];

// New York Navigation Data

const PuneNavigationData = [
    {
        id: "top-picks",
        name: 'Top Experiences'
    },
    {
        id: "historical-sites",
        name: 'Historical Sites'
    },
    {
        id: "religious-sites",
        name: 'Religious Sites'
    },
    {
        id: "food",
        name: 'Food & Drinks'
    },
    {
        id: "city-walk",
        name: 'City Walks'
    },
    {
        id: "hill-stations",
        name: 'Hill Stations'
    },
    {
        id: "forts",
        name: 'Forts'
    }
];

// All New York City Sections Data

const AllPuneCityData = [
    {
        id: 1,
        idName: "historical-sites",
        headline: "Historical Sites",
        description: "Explore Pune's rich history and architectural marvels with these popular heritage sites!",
        sectionData: [
            {
                id: 1,
                about: "Historical Sites",
                description: "Shaniwar Wada",
                image: "https://img.freepik.com/premium-vector/pune-skyline-with-color-buildings-blue-sky-reflections-vector-illustration-business-travel-tourism-concept-with-historic-buildings-image-presentation-banner-placard-web-site_119523-4217.jpg"
            },
            {
                id: 2,
                about: "Historical Sites",
                description: "Aga Khan Palace",
                image: "https://img.freepik.com/premium-vector/pune-skyline-with-color-buildings-blue-sky-reflections-vector-illustration-business-travel-tourism-concept-with-historic-buildings-image-presentation-banner-placard-web-site_119523-4217.jpg"
            },
            {
                id: 3,
                about: "Historical Sites",
                description: "Sinhagad Fort",
                image: "https://en.wikipedia.org/wiki/Sinhagad_Fort"
            },
            {
                id: 4,
                about: "Historical Sites",
                description: "Kasba Peth",
                image: "https://en.wikipedia.org/wiki/Kasba_Peth"
            },
            {
                id: 5,
                about: "Historical Sites",
                description: "Lal Mahal",
                image: "https://en.wikipedia.org/wiki/Lal_Mahal"
            },
            {
                id: 6,
                about: "Historical Sites",
                description: "Kelkar Museum",
                image: "https://en.wikipedia.org/wiki/Kelkar_Museum"
            },
            {
                id: 7,
                about: "Historical Sites",
                description: "Chaturshrungi Temple",
                image: "https://en.wikipedia.org/wiki/Chaturshrungi_Temple"
            },
            {
                id: 8,
                about: "Historical Sites",
                description: "Vetal Tekdi",
                image: "https://en.wikipedia.org/wiki/Vetal_Tekdi"
            }
        ]
    },
    {
        id: 2,
        idName: "religious-sites",
        headline: "Religious Sites",
        description: "Seek blessings and find peace at these prominent religious shrines in Pune",
        sectionData: [
            {
                id: 1,
                about: "Religious Sites",
                description: "Dagdusheth Halwai Ganapati Temple",
                image: "https://en.wikipedia.org/wiki/Dagdusheth_Halwai_Ganapati_Temple"
            },
            {
                id: 2,
                about: "Religious Sites",
                description: "Osho Ashram",
                image: "https://en.wikipedia.org/wiki/Osho_Ashram"
            },
            {
                id: 3,
                about: "Religious Sites",
                description: "ISKCON NVCC Temple",
                image: "https://iskconnvcc.org/"
            },
            {
                id: 4,
                about: "Religious Sites",
                description: "Pandavleni Caves",
                image: "https://en.wikipedia.org/wiki/Pandavleni_Caves"
            },
            {
                id: 5,
                about: "Religious Sites",
                description: "Pataleshwar Cave Temple",
                image: "https://en.wikipedia.org/wiki/Pataleshwar_Cave_Temple"
            },
            {
                id: 6,
                about: "Religious Sites",
                description: "Parvati Temple",
                image: "https://en.wikipedia.org/wiki/Parvati_Temple,_Pune"
            },
            {
                id: 7,
                about: "Religious Sites",
                description: "Ganesh Temple, Narayan Peth",
                image: "https://www.google.com/maps/place/Ganesh+Temple,+Narayan+Peth,+Pune,+Maharashtra/@18.519593,73.851997,15z/data=!4m5!3m4!1s0x3bc28708c5055999:0x35f2295032337207!8m2!3d18.519593!4d73.851997"
            },
            {
                id: 8,
                about: "Religious Sites",
                description: "Shreemant Dagdusheth Halwai Ganapati Temple",
                image: "https://en.wikipedia.org/wiki/Dagdusheth_Halwai_Ganapati_Temple"
            }
        ]
    },
    {
        id: 3,
        idName: "food",
        headline: "Food and Drinks",
        description: "Savor the flavors of Pune with these culinary delights",
        sectionData: [
            {
                id: 1,
                about: "Food and Drinks",
                description: "Vada Pav",
                image: "https://en.wikipedia.org/wiki/Vada_pav"
            },
            {
                id: 2,
                about: "Food and Drinks",
                description: "Misal Pav",
                image: "https://en.wikipedia.org/wiki/Misal_pav"
            },
            {
                id: 3,
                about: "Food and Drinks",
                description: "Puran Poli",
                image: "https://en.wikipedia.org/wiki/Puran_poli"
            },
            {
                id: 4,
                about: "Food and Drinks",
                description: "Thalipeeth",
                image: "https://en.wikipedia.org/wiki/Thalipeeth"
            },
            {
                id: 5,
                about: "Food and Drinks",
                description: "Shrikhand",
                image: "https://en.wikipedia.org/wiki/Shrikhand"
            },
            {
                id: 6,
                about: "Food and Drinks",
                description: "Kanda Pohe",
                image: "https://www.vegrecipesofindia.com/kanda-pohe-recipe/"
            },
            {
                id: 7,
                about: "Food and Drinks",
                description: "Sabudana Khichdi",
                image: "https://www.vegrecipesofindia.com/sabudana-khichdi-recipe/"
            },
            {
                id: 8,
                about: "Food and Drinks",
                description: "Baramati Tamboli",
                image: "https://www.google.com/search?q=baramati+tambol"
            }
        ]
    },
    {
        id: 4,
        idName: "city-walk",
        headline: "City Walks",
        description: "Explore Pune's streets and discover its hidden gems with these walking tours",
        sectionData: [
            {
                id: 1,
                about: "City Walks",
                description: "Pune Heritage Walk",
                image: "https://www.puneheritagefoundation.org/"
            },
            {
                id: 2,
                about: "City Walks",
                description: "Koregaon Park Food Walk",
                image: "https://www.tripadvisor.in/Attraction_Review-g293882-d190593-Reviews-Koregaon_Park-Pune_Maharashtra.html"
            },
            {
                id: 3,
                about: "City Walks",
                description: "FC Road Shopping Walk",
                image: "https://www.google.com/maps/place/FC+Road,+Pune,+Maharashtra+411001,+India/@18.5201578,73.8530427,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc28712127169ff:0x72260b2a6282822f!8m2!3d18.5201578!4d73.8530427"
            },
            {
                id: 4,
                about: "City Walks",
                description: "Deccan Gymkhana Walk",
                image: "https://www.google.com/maps/place/Deccan+Gymkhana,+Pune,+Maharashtra+411004,+India/@18.5182393,73.8505012,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc28712127169ff:0x72260b2a628"
            },
            {
                id: 5,
                about: "City Walks",
                description: "Pune Night Walk",
                image: "https://www.puneheritagefoundation.org/events/pune-night-walk/"
            },
            {
                id: 6,
                about: "City Walks",
                description: "Pune Old City Walk",
                image: "https://www.puneheritagefoundation.org/events/pune-old-city-walk/"
            },
            {
                id: 7,
                about: "City Walks",
                description: "Pune Art Walk",
                image: "https://www.puneheritagefoundation.org/events/pune-art-walk/"
            }
        ]
    },
    {
        id: 5,
        idName: "hill-stations",
        headline: "Pune Hill Stations",
        description: "Escape to the scenic hill stations near Pune for a relaxing getaway.",
        sectionData: [
            {
                id: 1,
                about: "PUNE HILL STATIONS",
                description: "Lonavala Hill Station",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lonavala_Hill_Station.jpg/1024px-Lonavala_Hill_Station.jpg"
            },
            {
                id: 2,
                about: "PUNE HILL STATIONS",
                description: "Khandala Hill Station",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Khandala_Hill_Station.jpg/1024px-Khandala_Hill_Station.jpg"
            },
            {
                id: 3,
                about: "PUNE HILL STATIONS",
                description: "Matheran Hill Station",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Matheran_Hill_Station.jpg/1024px-Matheran_Hill_Station.jpg"
            },
            {
                id: 4,
                about: "PUNE HILL STATIONS",
                description: "Mahabaleshwar Hill Station",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Mahabaleshwar_Hill_Station.jpg/1024px-Mahabaleshwar_Hill_Station.jpg"
            },
            {
                id: 5,
                about: "PUNE HILL STATIONS",
                description: "Panchgani Hill Station",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Panchgani_Hill_Station.jpg/1024px-Panchgani_Hill_Station.jpg"
            },
            {
                id: 6,
                about: "PUNE HILL STATIONS",
                description: "Satara Hill Station",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Satara_Hill_Station.jpg/1024px-Satara_Hill_Station.jpg"
            },
            {
                id: 7,
                about: "PUNE HILL STATIONS",
                description: "Wai Hill Station",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Wai_Hill_Station.jpg/1024px-Wai_Hill_Station.jpg"
            },
            {
                id: 8,
                about: "PUNE HILL STATIONS",
                description: "Bhandardara Hill Station",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bhandardara_Hill_Station.jpg/1024px-Bhandardara_Hill_Station.jpg"
            }
        ]
    },
    {
        id: 6,
        idName: "forts",
        headline: "Pune Forts",
        description: "Explore the rich history of Pune through its majestic forts.",
        sectionData: [
            {
                id: 1,
                about: "PUNE FORTS",
                description: "Sinhagad Fort",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sinhagad_Fort_Pune.jpg/1024px-Sinhagad_Fort_Pune.jpg"
            },
            {
                id: 2,
                about: "PUNE FORTS",
                description: "Purandar Fort",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Purandar_Fort_Pune.jpg/1024px-Purandar_Fort_Pune.jpg"
            },
            {
                id: 3,
                about: "PUNE FORTS",
                description: "Torna Fort",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Torna_Fort_Pune.jpg/1024px-Torna_Fort_Pune.jpg"
            },
            {
                id: 4,
                about: "PUNE FORTS",
                description: "Rajgad Fort",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Rajgad_Fort_Pune.jpg/1024px-Rajgad_Fort_Pune.jpg"
            },
            {
                id: 5,
                about: "PUNE FORTS",
                description: "Lohagad Fort",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lohagad_Fort_Pune.jpg/1024px-Lohagad_Fort_Pune.jpg"
            },
            {
                id: 6,
                about: "PUNE FORTS",
                description: "Visapur Fort",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Visapur_Fort_Pune.jpg/1024px-Visapur_Fort_Pune.jpg"
            },
            {
                id: 7,
                about: "PUNE FORTS",
                description: "Tikona Fort",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tikona_Fort_Pune.jpg/1024px-Tikona_Fort_Pune.jpg"
            },
            {
                id: 8,
                about: "PUNE FORTS",
                description: "Korigad Fort",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Korigad_Fort_Pune.jpg/1024px-Korigad_Fort_Pune.jpg"
            }
        ]
    }
]

// New York Top Experiences Data

const PuneData = [
    [0, 0], // Broadway Show Tickets - Aladdin
    [1, 2], // King Kong - Broadway Week Discount
    [2, 1],
    [3, 4],
    [4, 0],
];