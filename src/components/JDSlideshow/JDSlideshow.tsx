import * as React from 'react';
import {loopIndex, randomize} from '../../utility/Shortcuts';

export interface Props {
    fileUrls: string[];
    durationSeconds?: number;
    randomize?: boolean;
    className?: string;
    alt?: string;
    style?: React.CSSProperties;
}

export interface State {
    displayedImageUrl: string;
}

export default class JDSlideshow extends React.PureComponent<Props, State> {
    private imageTimer: NodeJS.Timer | undefined;
    private sourceURLs: string[]

    constructor(props: Props) {
        super(props);

        if (this.props.randomize) {
            this.sourceURLs = randomize(this.props.fileUrls);
        } else {
            this.sourceURLs = this.props.fileUrls;
        }

        if (this.sourceURLs.length > 0) {
            this.state = { displayedImageUrl: this.sourceURLs[0] };
        } else {
            this.state = { displayedImageUrl: '' };
        }
        if (this.sourceURLs.length > 1) {
            this.imageTimer = setInterval(() => this.cycleImages(), (this.props.durationSeconds || 1) * 1000);
        }
    }

    componentWillUnmount() {
        if (this.imageTimer) {
            clearInterval(this.imageTimer);
        }
    }

    private cycleImages() {
        const currentIndex = this.sourceURLs.indexOf(this.state.displayedImageUrl);
        const newIndex = loopIndex(currentIndex, this.sourceURLs.length);

        if (newIndex !== undefined) {
            this.setState({ displayedImageUrl: this.sourceURLs[newIndex] });
        }
    }

    render() {        
        return (
            <img
                src={this.state.displayedImageUrl}
                className={this.props.className}
                alt={this.props.alt}
                style={this.props.style} 
            />
        );
    }
}