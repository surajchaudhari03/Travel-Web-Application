import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import ExperienceCard from '../ExperienceCard';
import { createRoot } from 'react-dom/client';


const options = [
    { value: 'new-york', label: 'New York' },
    { value: 'milan', label: 'Milan' },
    { value: 'pune', label: 'Pune' },
    { value: 'las-vegas', label: 'Las Vegas' },
    { value: 'rome', label: 'Rome' },
    { value: 'barcelona', label: 'Barcelona' },
    { value: 'madrid', label: 'Madrid' },
    { value: 'venice', label: 'Venice' },
    { value: 'budapest', label: 'Budapest' },
];

const style = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: 'none',
        color: state.isSelected ? 'red' : '#727272',
        padding: 10,
        cursor: 'pointer',
        background: state.isSelected ? 'white' : 'white',
        fontSize: '13px',
        textAlign: 'left',
        paddingLeft: '20px',
        width: 150
    }),
    control: () => ({
        width: 150,
        display: 'flex',
        fontSize: '11px',
        marginLeft: '15px'
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
};

const Searchbar = ({ onChange, search, allCityData }) => { // Pass allCityData as a prop
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const handleChange = (option) => {
        const processedOption = option.value
            .replace(/[^\w]/gi, '') // remove symbols and spaces
            .toLowerCase(); // convert to lowercase
        setSelectedOption(option);
        navigate(`/${processedOption}`); // Navigate to city page
    };

    const handleSearchClick = () => {
        if (search) {
            const processedSearch = search
                .replace(/[^\w]/gi, '') // remove symbols and spaces
                .toLowerCase(); // convert to lowercase

            // Check for city match
            const cityMatch = options.find(option => option.value === processedSearch);
            if (cityMatch) {
                navigate(`/${processedSearch}`); // Navigate to city page
                return;
            }else {
                alert('No city found matching your search.');
            }

            // Search for cards with matching keywords (whole word or part of word)
            const matchingCards = [];
            allCityData.forEach(city => {
                city.sectionData.forEach(card => {
                    const cardText = `${card.description}`; // access description
                    if (cardText.replace(/[^\w]/gi, '').toLowerCase().includes(processedSearch)) {
                        matchingCards.push(card);
                        console.log(card)
                    }
                });
            });

            if (matchingCards.length > 0) {
                // Clear the container first
                const cardContainer = document.getElementById('card-container');
                cardContainer.innerHTML = ''; // Clear previous cards
    
                // Render each ExperienceCard into the cardContainer using React.createRoot
                matchingCards.forEach(card => {
                    const cardDiv = document.createElement('div');
                    cardContainer.appendChild(cardDiv);
    
                    const root = createRoot(cardDiv);
                    root.render(
                        <ExperienceCard
                            key={card.id}
                            city={card.about}
                            about={card.about}
                            description={card.description}
                            image={card.url} // Assuming you have an imageUrl property for each card
                        />
                    );
                });
            } else {
                alert('No data found matching your search.');
            }
        } else {
            alert('Please enter a city or experience to search.');
        }
    };

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            handleSearchClick();
        }
    }

    return (
        <div className='search'>
            <div className='select-city'>
                <Select
                    options={options}
                    styles={style}
                    placeholder="Select City"
                    value={selectedOption}
                    onChange={handleChange}
                />
            </div>
            <div className="select-experience">
                <input
                    type="text"
                    placeholder="Search for experiences"
                    onChange={onChange}
                    value={search}
                    onKeyDown={handleKeyDown}
                />
                <span onClick={handleSearchClick}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
        </div>
    );
};

export default Searchbar;