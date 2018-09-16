import * as React from 'react';
import './App.css';
import Greeting from './components/greeting/Greeting';
import SearchBox from './components/search-box/SearchBox';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Greeting name={"Simon"}/>
        <div className="searchRow">
          <SearchBox name="Item"/>
          <SearchBox name="Category"/>
        </div>
        
      </div>
    );
  }
}

export default App;
