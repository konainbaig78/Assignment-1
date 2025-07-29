import React from 'react';


const Card = ({ image, title, para }) => {
  return (
    <div style={{
      border: "2px solid #B48B7D",
      backgroundColor: '#CCDDD3',
      padding: "20px",
      width: '300px',
      borderRadius: '16px',
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      color: "#333",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <img
        src={image}
        alt="Card"
        style={{
          height: "200px",
          width: "100%",
          borderRadius: '12px',
          border: "2px solid #FFF9A5",
          marginBottom: "15px"
        }}
      />
      <h3 style={{ fontWeight: '700', color: '#457fb9ff' }}>{title}</h3>
      <p style={{ color: '#b6735dff', fontSize: "0.95rem", textAlign: "center" }}>{para}</p>
    </div>
  );
};

export default Card;
