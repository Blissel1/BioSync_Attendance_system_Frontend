
import React from 'react';

const profile = ({ src, alt }) => {
  const profileStyles = {

    width: '40px', 
    height: '40px', 
    borderRadius: '50%',
    border:'1px solid black',
    backgroundColor: 'gray',
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
 
  };



  return (
    <div style={profileStyles} alt={alt}>
     
    </div>
  );
};

export default profile;
