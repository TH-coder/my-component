import * as React from 'react';
import './App.css';
import Button from './Button/Buttin'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Button type="primary" size = "large">I am button</Button>
        <Button type="danger" size = "small">I am button</Button>
      </div>
    );
  }
}

export default App;
