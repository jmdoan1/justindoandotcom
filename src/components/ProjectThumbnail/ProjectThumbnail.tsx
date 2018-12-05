import * as React from 'react';
import './ProjectThumbnail.css';
import { Color } from 'csstype';

export interface Props {
    name: string;
    images?: HTMLImageElement[];
    gifs?: HTMLImageElement[];
    tagline?: string;
    description?: string;
    personal: boolean;
    client: boolean;
    W2: boolean;
    logoString?: string;
    logoBgColor?: Color;
}

export default class ProjectThumbnail extends React.PureComponent<Props> {
    render() {
        let logoDisplay = null
        if (this.props.logoString) {
            const image = require('../../assets/images/' + this.props.logoString)
            logoDisplay = (
                        <img 
                            alt={this.props.logoString} 
                            className="ThumbnailLogo"
                            style={{ backgroundColor: this.props.logoBgColor || "" }} 
                            src={String(image)}
                        />)
        }

        let taglineDisplay = null
        if (this.props.tagline) {
            taglineDisplay = <h4 className="ThumbnailTagline">{this.props.tagline}</h4>
        }

        let supporterDisplay = null
        if (this.props.personal || this.props.client || this.props.W2) {
            supporterDisplay = <p className="ThumbnailSupporter">{this.props.personal ? "Personal" : this.props.client ? "Client" : "W2"}</p>
        }

        return (
            <div className="ProjectThumbnail">
                {logoDisplay}
                <h2 className="ThumbnailTitle">{this.props.name}</h2>
                {taglineDisplay}
                {supporterDisplay}
            </div>
        );
    }
}