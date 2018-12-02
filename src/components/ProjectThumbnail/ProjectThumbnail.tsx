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
    dateStart?: Date;
    dateMVP?: Date;
    logoString?: string;
    logoBgColor?: Color;
}

export default class ProjectThumbnail extends React.PureComponent<Props> {
    render() {
        let logoDisplay = null
        if (this.props.logoString != null) {
            const image = require('../../assets/images/' + this.props.logoString)
            logoDisplay = (
                        <img 
                            alt={this.props.logoString} 
                            className="ThumbnailLogo"
                            style={{ backgroundColor: this.props.logoBgColor || this.props.logoBgColor || "" }} 
                            src={String(image)} 
                        />)
        }
        return (
            <div className="ProjectThumbnail">
                {logoDisplay}
                <h2 className="ThumbnailTitle">{this.props.name}</h2>
                <h4 className="ThumbnailTagline">{this.props.tagline}</h4>
                <p className="ThumbnailSupporter">{this.props.personal ? "Personal" : this.props.client ? "Client" : this.props.W2 ? "W2" : ""}</p>
            </div>
        );
    }
}