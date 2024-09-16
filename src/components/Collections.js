import React from 'react';
import '../Styles/Collections.css';

const Collection = ({ collectionsData }) => {
  return (
    <section id='collections'>
      <div className="collections-wrapper">
        <h1>Our Collections</h1>
        <hr
          style={{
            backgroundColor: '#ffbb58',
            width: '75px',
            height: '2px',
            border: 'none',
            marginTop: '0px',
            marginLeft: '0px'
          }}
        />
      </div>
      <div className="cards-wrapper">
        {collectionsData &&
          collectionsData.map(({ id, url, description }) => (
            <CollectionCard id={id} url={url} description={description} />
          ))}
      </div>
    </section>
  );
};

const CollectionCard = ({ id, url, description }) => {
  const imageUrl = `url(${url})`;
  return (
    <div id={id} key={id} className="collection-card-wrapper">
      <div className="card-parent">
        <div
          className="card-child"
          style={{
            backgroundImage: imageUrl
          }}
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;