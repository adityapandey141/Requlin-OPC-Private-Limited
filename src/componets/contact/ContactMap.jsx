
import React from 'react';

const ConatactMap = () => {
  return (
    <div style={{ width: '100%', height: '450px' }}>
      <iframe
        src="https://www.google.com/maps?q=I-Square+Corporate+Park,+Science+City+Road,+Sola,+Ahmedabad&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ConatactMap;
