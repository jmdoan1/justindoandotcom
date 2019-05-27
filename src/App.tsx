import * as React from 'react';
import './App.css';
import PageProjects from './components/PageProjects/PageProjects';
import JDHeader from './components/JDHeader/JDHeader';
import PageAbout from './components/PageAbout/PageAbout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  private routes = [
    {
      path: "/Projects",
      exact: true,
      name: 'Projects',
      sidebar: () => <div>Projects</div>,
      main: () => <PageProjects />
    },
    {
      path: "/tutorials",
      name: 'Tutorials',
      sidebar: () => <div>bubblegum!</div>,
      main: () => <h2>Under Construction</h2>
    },
    {
      path: "/about",
      name: 'About',
      sidebar: () => <div>About</div>,
      main: () => <PageAbout />
    }
  ];

  private default = () => <PageProjects />;

  public render() {
    return (
      <Router>
        <div className="App">
          <JDHeader
            name="Justin Doan"
            routes={this.routes}
          />

          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {this.routes.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} component={route.main} />))}
              <Route key={this.routes.length} component={this.default}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
