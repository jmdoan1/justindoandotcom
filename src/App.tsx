import * as React from 'react';
import './App.css';
import JDHeader from './components/JDHeader/JDHeader';
import PagePortfolio from './pages/PagePortfolio/PagePortfolio';
import PageAbout from './pages/PageAbout/PageAbout';
import PageTutorials from './pages/PageTutorials/PageTutorials';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  private routes = [
    {
      path: '/projects',
      exact: true,
      name: 'Projects',
      main: () => <PagePortfolio />
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      main: () => <PageTutorials />
    },
    {
      path: '/about',
      name: 'About',
      main: () => <PageAbout />
    }
  ];

  private defaultComponent = () => <PagePortfolio />;
  private defaultEquivalent = '/projects';

  public render() {
    const mappedRoutes = (
      this.routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      )));

    return (
      <Router>
        <div className='App'>
          <JDHeader
            name='Justin Doan'
            routes={this.routes}
            defaultRoute={this.defaultEquivalent}
          />

          <div>
            <Switch>
              {mappedRoutes}
              <Route
                key={this.routes.length}
                component={this.defaultComponent}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
