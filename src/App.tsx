import * as React from 'react';
import './App.css';
import ProjectThumbnail from './components/ProjectThumbnail/ProjectThumbnail';
import JDHeader from './components/JDHeader/JDHeader';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <JDHeader name="Justin Doan" />
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
