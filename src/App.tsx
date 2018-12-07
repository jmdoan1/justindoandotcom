import * as React from 'react';
import ProjectThumbnail from './components/ProjectThumbnail/ProjectThumbnail';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="Header">
          <h1 className="HeaderName">Justin Doan</h1>
        </header>
        <div>
          <ProjectThumbnail
            name="WatchFlippers"
            tagline="An App"
            personal={false}
            client={true}
            W2={false} 
            logoString="wflogo.png"
            logoBgColor="black"
          />
          <ProjectThumbnail
            name="FameStream"
            tagline="Another App"
            personal={false}
            client={false}
            W2={false}
          />
        </div>
      </div>
    );
  }
}

export default App;
