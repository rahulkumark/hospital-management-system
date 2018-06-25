import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title.js';

class App extends React.Component{
  render(){
    return (
      <Title />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
