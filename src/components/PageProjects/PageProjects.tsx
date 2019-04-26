import * as React from 'react';
import ProjectThumbnail from  '../ProjectThumbnail/ProjectThumbnail';

export interface Props {
    name?: string;
}

export default class PageProjects extends React.PureComponent<Props> {
    render() {
        return (
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
        );
    }
}