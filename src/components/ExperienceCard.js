import React, { useState } from 'react';

const ExperienceCard = ({
  city,
  about,
  description,
  image
}) => {
  const [listed, setListed] = useState(false);

  const addtoWishlist = () => setListed(!listed);

  const style = listed
    ? {
      color: '#f43361',
      fontSize: '20px',
      position: 'absolute',
      right: '10px',
      top: '15px',
      fontWeight: '700',
      transition: 'transform 0.3s ease-in-out'
    }
    : {
      color: 'white',
      fontSize: '20px',
      position: 'absolute',
      right: '10px',
      top: '15px',
      fontWeight: '400',
      transition: 'transform 0.3s ease-in-out'
    };

  return (
    <div className="exp-card">

      <React.Fragment>
        <div
          className="exp-card-img"
          style={{
            backgroundImage: `url(${image})`
          }}
        >
          <div className="exp-heart">
            <i
              className="far fa-heart"
              role="button"
              onClick={addtoWishlist}
              style={style}
            />
          </div>
        </div>
        <div className="exp-content-wrap">
          <div className="exp-info-wrap">
            {city ? (
              <React.Fragment>
                <p id="exp-city">{city}</p>
                <p id="exp-description">{description}</p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p id="exp-about">{about}</p>
                <p id="exp-description">{description}</p>
              </React.Fragment>
            )}
          </div>

        </div>
      </React.Fragment>
    </div>
  );
};

export default ExperienceCard;
