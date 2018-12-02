import * as React from 'react';
import ProjectThumbnail from './components/ProjectThumbnail/ProjectThumbnail';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Justin Doan</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <ProjectThumbnail
            name="WatchFlippers"
            tagline="An app"
            personal={false}
            client={true}
            W2={false} 
            logoString="wflogo.png"
            logoBgColor="black"
          />
          <ProjectThumbnail
            name="FameStream"
            tagline="Another app"
            personal={false}
            client={true}
            W2={false}
          />
        </div>
      </div>
    );
  }
}

export default App;
