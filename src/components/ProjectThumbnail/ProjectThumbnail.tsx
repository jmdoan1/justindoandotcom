import * as React from 'react';
import './ProjectThumbnail.css';

export interface Props {
    name: string;
    images?: HTMLImageElement[];
    gifs?: HTMLImageElement[];
    tagline?: string;
    description?: string;
    personal: boolean;
    client: boolean;
    W2: boolean;
    dateStart?: Date;
    dateMVP?: Date;
}

export default class ProjectThumbnail extends React.PureComponent<Props> {
    render() {
        return (
            <div className="ProjectThumbnail">
                <h1>{this.props.name}</h1>
                <h4>{this.props.tagline}</h4>
                <text>{this.props.personal ? "Personal" : this.props.client ? "Client" : this.props.W2 ? "W2" : ""}</text>
            </div>
        );
    }
}