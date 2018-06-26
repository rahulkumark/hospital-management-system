import React from 'react';

class Navbar extends React.Component{
  render(){
    const navbarStyle = {
      textDecoration:'none',
      border: '1px solid blue',
      borderRadius:'5px',
      padding:'10px',
      marginRight:'40px',
      float:'right',
      display:'block'
    }
    return(
      <div>
       <a href='#' style={navbarStyle}> Login / Signup </a>
      </div>
    );
  }
}
export default Navbar;
