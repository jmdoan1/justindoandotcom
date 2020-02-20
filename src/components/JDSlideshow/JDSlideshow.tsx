import * as React from 'react';
import * as Shortcuts from '../../utility/Shortcuts';

export interface Props {
    fileUrls: string[];
    className?: string;
}

export interface State {
    displayedImageUrl: string;
}

export default class JDSlideshow extends React.PureComponent<Props, State> {
    private imageTimer: NodeJS.Timer | undefined;

    constructor(props: Props) {
        super(props);
        if (this.props.fileUrls.length > 0) {
            this.state = { displayedImageUrl: this.props.fileUrls[0] };
        } else {
            this.state = { displayedImageUrl: '' };
        }
        if (this.props.fileUrls.length > 1) {
            this.imageTimer = setInterval(() => this.cycleImages(), 2000);
        }
    }

    componentWillUnmount() {
        if (this.imageTimer) {
            clearInterval(this.imageTimer);
        }
    }

    private cycleImages() {
        const currentIndex = this.props.fileUrls.indexOf(this.state.displayedImageUrl);
        const newIndex = Shortcuts.loopIndex(currentIndex, this.props.fileUrls.length);

        if (newIndex !== undefined) {
            this.setState({ displayedImageUrl: this.props.fileUrls[newIndex] });
        }
    }

    render() {        
        return (
            <img src={this.state.displayedImageUrl} className={this.props.className || ''} />
        );
    }
}