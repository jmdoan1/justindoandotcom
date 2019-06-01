import * as React from 'react';
import ProjectThumbnail from '../../components/ProjectThumbnail/ProjectThumbnail';

export interface Props {
  placeholderprop?: string;
}

export default class PagePortfolio extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <h2>Under Construction</h2>
        Please ignore everything on this page
        <ProjectThumbnail
          name='WatchFlippers'
          tagline='An App'
          personal={false}
          client={true}
          W2={false}
          logoString='wflogo.png'
          logoBgColor='black'
        />
        <ProjectThumbnail
          name='FameStream'
          tagline='Another App'
          personal={false}
          client={false}
          W2={false}
        />
      </div>
    );
  }
}