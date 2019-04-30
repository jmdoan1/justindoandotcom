import * as React from 'react';
import * as Shortcuts from '../../utility/Shortcuts';
import './PageAbout.css'

export interface Props {
    name?: string;
}

export interface State {
    displayedImageName: string;
}

export default class PageAbout extends React.PureComponent<Props, State> {
    private timer: NodeJS.Timer;

    private fileNames = Shortcuts.randomize([
        'BlueUnderBridge.jpg',
        'BeachMouseRat.jpg',
        'Powells.jpg',
        'BarCampPodium.png'
    ]);

    constructor(props: Props) {
        super(props);

        if (this.fileNames.length > 0) {
            this.state = { displayedImageName: this.fileNames[0] };
        } else {
            this.state = { displayedImageName: '' };
        }

        if (this.fileNames.length > 1) {
            this.timer = setInterval(() => this.cycleImages(), 3000);
            console.log(this.timer);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    private cycleImages() {
        const currentIndex = this.fileNames.indexOf(this.state.displayedImageName || '');
        console.log('currentIndex: ' + currentIndex);

        // finds the remainder
        // const newIndex = ((((currentIndex + 1) / this.fileNames.length) - Math.floor((currentIndex + 1) / this.fileNames.length)) * this.fileNames.length);
        const newIndex = Shortcuts.loopIndex(currentIndex, this.fileNames.length);
        console.log('newIndex: ' + newIndex);

        this.setState({ displayedImageName: this.fileNames[newIndex] });
    }

    render() {
        var source;
        if (this.state.displayedImageName !== '') {
            source = require('../../assets/images/About/' + this.state.displayedImageName);
        }

        return (
            <div className="AboutPage">
                <img src={source} className="AboutImage" />
                <div className="AboutText">
                    Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text. Hey what's up here's some text.
                </div>
            </div>
        );
    }
}