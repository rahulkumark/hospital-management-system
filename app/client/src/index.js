import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title.js';
import Navbar from './components/navbar.js';

class App extends React.Component{
  render(){
    return (
      <div>
        <Title />
        <Navbar />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
