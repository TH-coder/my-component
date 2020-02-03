import * as React from 'react';
import './App.css';
import Button from './Component/Button/Button'
import Icon from './Component/Icon/Icon';

class App extends React.Component {
  public click = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    alert("yoyoyo");
  }
  public render() {
    return (
      <div className="App">
        <Icon type="good" style={{ color: "red" }} onClick={this.click} />
        <Button icon="good" size="small"/>
      </div>
    );
  }
}

export default App;
