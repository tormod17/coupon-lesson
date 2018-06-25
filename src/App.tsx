import * as React from 'react';
import './App.sass';
import Slides from './slides/slides';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Slides show={true} />
      </div>
    );
  }
}

export default App;