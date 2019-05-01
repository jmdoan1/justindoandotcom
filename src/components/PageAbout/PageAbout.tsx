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
        'BarCampPodium.png',
        'AGTCBus.jpg'
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
        if (currentIndex >= 0) {
            const newIndex = Shortcuts.loopIndex(currentIndex, this.fileNames.length);
            this.setState({ displayedImageName: this.fileNames[newIndex] });
        }
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
                    <h1>Who am I?</h1>
                    <h2>Formal Education:</h2>
                    University of North Florida: BBA Accounting, 2012 <br/><br/>
                    <h2>Favorite Color:</h2>
                    I'm color blind and that question was rude af. 
                    <br/><br/>
                    <pre><code>
                        let f = 'this is a code sample example';
                    </code></pre>
                    <br/><br/>
                    I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. 

                    
                    <h1>Who am I?</h1>
                    I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. 

                    
                    <h1>Who am I?</h1>
                    I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please.

                    
                    <h1>Who am I?</h1>
                    I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. 

                    
                    <h1>Who am I?</h1>
                    I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. I am a developer! Ok but what kind? Idk man just figure it out yourself please. 
                    
                </div>
            </div>
        );
    }
}