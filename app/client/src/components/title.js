import React from 'react';

const Title = () =>{
  const titleStyle = {
      backgroundImage: 'linear-gradient(to left top,#051937, #382252, #70205c, #a41c51, #c93535)',
      width:'auto',
      height:'90px',
      textAlign:'center',
      fontSize:'60px',
      marginBottom:'20px',
      borderRadius:'10px'
  }
  return (
    <div style={titleStyle} >Hospital Management System</div>
  );
}
export default Title;
