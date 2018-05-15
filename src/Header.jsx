import React from 'react';

function Header() {
  return (
    <div
      style={{
        // backgroundColor: '#1A1B29',
        // minHeight: '20vh',
        fontFamily: "'Great Vibes', cursive",
        textAlign: 'center',
      }}
    >
      <div>
        <h1
          style={{
            marginBottom: 0,
          }}
        >
          Fantastic Travel
        </h1>
      </div>
      <div
        style={{
          marginTop: 0,
        }}
      >
        <h2>Viaje para onde a sua imaginação quiser!</h2>
      </div>
    </div>
  );
}

export default Header;
