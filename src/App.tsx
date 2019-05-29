import * as React from 'react';
import './App.css';
import PageProjects from './components/PageProjects/PageProjects';
import JDHeader from './components/JDHeader/JDHeader';
import PageAbout from './components/PageAbout/PageAbout';
import PageTutorials from './components/PageTutorials/PageTutorials';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  private routes = [
    {
      path: '/projects',
      exact: true,
      name: 'Projects',
      main: () => <PageProjects />
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

  private default = () => <PageProjects />;
  private defaultEquivalent = '/projects';

  public render() {
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
