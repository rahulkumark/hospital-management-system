import React from 'react';
import './index.css'

class Body extends React.Component{
  render(){
    return(
         <div>
            <div className='image'>
             <input className="center-block input_search form-control" placeholder="Seach for ...." />
              <div className="row">
               <div className="col-lg-4 btn "><button className="home_btn">Record doctor timings</button></div>
               <div className="col-lg-4 btn "><button className="home_btn">Browse Doctors</button></div>
               <div className="col-lg-4 btn "><button className="home_btn">Book a appointment</button></div>
              </div>
            </div>
         </div>
    );
  }
}
export default Body;
