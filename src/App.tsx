import * as React from 'react';
import './App.css';
import PageProjects from './components/PageProjects/PageProjects';
import JDHeader from './components/JDHeader/JDHeader';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <JDHeader 
          name="Justin Doan"
          pages={["Projects", "Tutorials", "About"]}
        />
        <PageProjects />
      </div>
    );
  }
}

export default App;
