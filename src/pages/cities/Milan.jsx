import React from 'react';
import CityPage from '../CityPage';

const Milan = () => {
    return (
        <CityPage
            cityName="Milan"
            backgroundImagesData={backgroundImagesData}
            navigationData={MilanNavigationData}
            topPicksData={MilanTopPicks}
            citySectionsData={AllMilanCityData}
        />
    );
};

const backgroundImagesData = [
    {
        id: 1,
        url: "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/duomo_di_milano.jpg"
    },
    {
        id: 2,
        url: "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/galleria_vittorio_emanuele_ii.jpg"
    },
    {
        id: 3,
        url: "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/last_supper.jpg"
    },
    {
        id: 4,
        url: "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/scala_theatre.jpg"
    },
    {
        id: 5,
        url: "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/navigli_canals.jpg"
    },
    {
        id: 6,
        url: "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/shopping_in_milan.jpg"
    }
];

const MilanNavigationData = [
    {
        id: "top-picks",
        name: "Top Experiences"
    },
    {
        id: "landmarks",
        name: "Iconic Landmarks"
    },
    {
        id: "art",
        name: "Art & Culture"
    },
    {
        id: "fashion",
        name: "Fashion & Shopping"
    },
    {
        id: "food",
        name: "Food & Drinks"
    }
];

const AllMilanCityData = [
    {
        id: 1,
        idName: "landmarks",
        headline: "Iconic Landmarks",
        description:
            "Explore the iconic landmarks and historical sites that define Milan's vibrant culture.",
        sectionData: [
            {
                id: 1,
                about: "Milan Cathedral (Duomo)",
                description:
                    "A Gothic masterpiece, one of the largest cathedrals in the world.",
                image:
                    "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/duomo_di_milano.jpg",
                location: "Piazza del Duomo"
            },
            {
                id: 2,
                about: "Galleria Vittorio Emanuele II",
                description:
                    "A stunning glass-covered shopping arcade, one of the most famous in Europe.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qBZow-1pI-nOPOzcl1SBX4T0FhzHGGB7L935o5Awmtg5ttfQW1Nij5-CaPT-",
                location: "Galleria Vittorio Emanuele II"
            },
            {
                id: 3,
                about: "The Last Supper",
                description:
                    "Leonardo da Vinci's iconic masterpiece, located in the Convent of Santa Maria delle Grazie.",
                image:
                    "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/last_supper.jpg",
                location: "Convent of Santa Maria delle Grazie"
            },
            {
                id: 4,
                about: "La Scala Theatre",
                description:
                    "A world-renowned opera house, known for its stunning architecture and performances.",
                image:
                    "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/scala_theatre.jpg",
                location: "Piazza della Scala"
            },
            {
                id: 5,
                about: "Sforza Castle",
                description:
                    "A historic castle that now houses museums and art galleries.",
                image:
                    "[Image of Sforza Castle, Milan]",
                location: "Castello Sforzesco"
            },
            {
                id: 6,
                about: "Navigli Canals",
                description:
                    "A network of canals lined with bars, restaurants, and shops.",
                image:
                    "https://www.milanocitta.it/sites/default/files/styles/large/public/2023/10/navigli_canals.jpg",
                location: "Navigli"
            },
            {
                id: 7,
                about: "Santa Maria delle Grazie Church",
                description:
                    "A Renaissance church known for housing Leonardo da Vinci's The Last Supper.",
                image:
                    "[Image of Santa Maria delle Grazie Church, Milan]",
                location: "Santa Maria delle Grazie"
            },
            {
                id: 8,
                showMore: true
            }
        ]
    },
    {
        id: 2,
        idName: "art",
        headline: "Art & Culture",
        description:
            "Immerse yourself in Milan's rich cultural heritage and artistic treasures.",
        sectionData: [
            {
                id: 1,
                about: "Pinacoteca di Brera",
                description:
                    "A museum showcasing a vast collection of Italian and European art.",
                image:
                    "[Image of Pinacoteca di Brera, Milan]",
                location: "Brera District"
            },
            {
                id: 2,
                about: "Museo Poldi Pezzoli",
                description:
                    "A museum housed in a historic palace, showcasing a collection of art, furniture, and decorative objects.",
                image:
                    "[Image of Museo Poldi Pezzoli, Milan]",
                location: "Brera District"
            },
            {
                id: 3,
                about: "Museo del Novecento",
                description:
                    "A museum dedicated to 20th-century Italian and international art.",
                image:
                    "[Image of Museo del Novecento, Milan]",
                location: "Piazza del Duomo"
            },
            {
                id: 4,
                about: "Teatro alla Scala Museum",
                description:
                    "A museum dedicated to the history of the La Scala Theatre.",
                image:
                    "[Image of Teatro alla Scala Museum, Milan]",
                location: "Piazza della Scala"
            },
            {
                id: 5,
                about: "Leonardo da Vinci Science and Technology Museum",
                description:
                    "A museum dedicated to the works of Leonardo da Vinci.",
                image:
                    "[Image of Leonardo da Vinci Science and Technology Museum, Milan]",
                location: "Porta Garibaldi"
            },
            {
                id: 6,
                about: "Fashion Week",
                description:
                    "Experience the world of fashion at Milan Fashion Week, one of the most prestigious fashion events in the world.",
                image:
                    "[Image of Milan Fashion Week]",
                location: "Various locations"
            },
            {
                id: 7,
                about: "Design District",
                description:
                    "Explore Milan's design district, home to numerous design studios and showrooms.",
                image:
                    "[Image of Design District, Milan]",
                location: "Tortona District"
            },
            {
                id: 8,
                showMore: true
            }
        ]
    },
    {
        id: 3,
        idName: "fashion",
        headline: "Fashion & Shopping",
        description: "Indulge in Milan's world-class fashion scene and explore its vibrant shopping districts.",
        sectionData: [
            {
                id: 1,
                about: "Quadrilatero della Moda",
                description: "The fashion district of Milan, home to luxury brands like Prada, Gucci, and Armani.",
                image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ22YO9R_IcoXUzJbLJ0RqOueKZZftB-G7-Mht8FhEA9Jy8rKSIVTmemhis-tmh",
                location: "Quadrilatero della Moda"
            },
            {
                id: 2,
                about: "Galleria Vittorio Emanuele II",
                description:
                    "A stunning shopping arcade with high-end boutiques and luxury brands.",
                image:
                    " ",
                location: "Galleria Vittorio Emanuele II"
            },
            {
                id: 3,
                about: "Via Montenapoleone",
                description:
                    "A street lined with luxury fashion stores and boutiques.",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67VYbYAr91w5Qpdkn8bmHErXtdYJ2Ojam6hxanLwPK4AOMNdhTg5WxnlhboHl",
                location: "Via Montenapoleone"
            },
            {
                id: 4,
                about: "Outlet Shopping",
                description:
                    "Find great deals on designer brands at Milan's outlet shopping malls.",
                image:
                    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYaiX8FGjGBjfkJG-jUwtl_3SCzQIywv2UYpSj7M7RZA_psS1R10tmny_czZjW",
                location: "Various locations"
            },
            {
                id: 5,
                about: "Vintage Shopping",
                description:
                    "Discover unique vintage finds in Milan's vintage shops.",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwi7yiNuKrMRV5Nye16LFmonnXBB3vY7qIfrTpF5PU8Vc9ti7ChtN053RfZ_f",
                location: "Various locations"
            },
            {
                id: 6,
                about: "Designer Outlets",
                description:
                    "Shop for designer brands at discounted prices at Milan's designer outlets.",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbqCiSmompQxHjsop06fdbgiuATmxCYRYo3GJj7glCEC9qlLx0sZWHuaOUMMg",
                location: "Various locations"
            },
            {
                id: 7,
                about: "Local Markets",
                description:
                    "Explore Milan's local markets for fresh produce, souvenirs, and unique finds.",
                image:
                    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5GeRQlaLkihR5Y-_T4QDi0-Cvltoonly0MKW1WHjvgl50UVFbcpXDAdTW41Fo",
                location: "Various locations"
            },
            {
                id: 8,
                showMore: true
            }
        ]
    },
    {
        id: 4,
        idName: "food",
        headline: "Food & Drinks",
        description:
            "Indulge in Milan's delicious cuisine and experience its vibrant food scene.",
        sectionData: [
            {
                id: 1,
                about: "Risotto Milanese",
                description:
                    "A creamy risotto made with saffron and bone marrow.",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBVdLAwGHbJqEgez8GzzT2CsANa-2fhD0iTFfx75ZP5ePvVQuZR4ahcRD6jwI",
                location: "Various locations"
            },
            {
                id: 2,
                about: "Ossobuco",
                description:
                    "A classic Milanese dish featuring braised veal shank.",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9njgNPkLJ4694PArptHNGgmOkmT_a0b3X5NSIwbcQHv6cATOunBKumX9BCRZ",
                location: "Various locations"
            },
            {
                id: 3,
                about: "Panettone",
                description:
                    "A sweet bread often enjoyed during the Christmas season.",
                image:
                    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZ-XdV5upH4SwBV5pWjWfQkYCiPPgU2wVFC3f2HVvh7Sp0fpDwidrD4F8ua8Z4",
                location: "Various locations"
            },
            {
                id: 4,
                about: "Aperitivo",
                description:
                    "Enjoy a pre-dinner drink and snack at a local bar or cafe.",
                image:
                    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgfWhFMECy96cjf1xqRqG_bZbTAqEeQyw7IXEdj2StjuHnfee0ZleMJdunxQDN",
                location: "Various locations"
            },
            {
                id: 5,
                about: "Gelato",
                description:
                    "Indulge in delicious Italian ice cream.",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdfu-Yx6qSc-QIZrEYi78-rKdKL8YCgErBAFxE0L6CYoRCReUQ0LxMQlwP91m",
                location: "Various locations"
            },
            {
                id: 6,
                about: "Wine Bars",
                description:
                    "Enjoy a glass of Italian wine at one of Milan's many wine bars.",
                image:
                    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuJEw64GCFsAmcWfv7k373f8YhP4qI9Oxmz2ZG30PZ17xqXd87kmxX8FZt81UA",
                location: "Various locations"
            },
            {
                id: 7,
                about: "Coffee Culture",
                description:
                    "Experience Milan's vibrant coffee culture and enjoy a delicious espresso or cappuccino.",
                image:
                    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpQlnawjdmE8yc3YsQ6LHukaTFMTP7SjmPMuY2gvVGdbgDTiqCgmgBZNeiztoc",
                location: "Various locations"
            },
            {
                id: 8,
                showMore: true
            }
        ]
    }
];

// Milan Top Experiences Data

const MilanTopPicks = [
    [0, 0], // Milan Cathedral (Duomo)
    [1, 1], // Galleria Vittorio Emanuele II
    [2, 2], // The Last Supper
    [3, 3], // La Scala Theatre
    [3, 4], // Sforza Castle
];

export default Milan