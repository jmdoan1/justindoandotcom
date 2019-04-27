import * as React from 'react';
import './App.css';
import PageProjects from './components/PageProjects/PageProjects';
import JDHeader from './components/JDHeader/JDHeader';
import PageAbout from './components/PageAbout/PageAbout';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <JDHeader
          name="Justin Doan"
          pages={["Projects", "Tutorials", "About"]}
        />
        <PageProjects />
        <PageAbout />
      </div>
    );
  }
}

export default App;
