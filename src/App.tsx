import * as React from 'react';
import './App.css';
import Greeting from './components/greeting/Greeting';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Greeting name={"Simon"}/>
      </div>
    );
  }
}

export default App;
