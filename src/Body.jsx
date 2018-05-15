import React from 'react';
import PlaceCard from './PlaceCard';

function Body() {
  return (
    <div
      style={{
        backgroundColor: '#30334C',
        minHeight: '15vh',
      }}
    >
      <PlaceCard title="Tá" />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
    </div>
  );
}

export default Body;
