import React, {Component} from 'react';
import './CSS/App.css';
import MainPageContainer from './Components/MainPageContainer';

class App extends Component {  
  render() {
    return (
      <div className="app-wrapper" id="app-wrapper">
        <MainPageContainer />
      </div>  
    );
  }
}

export default App;