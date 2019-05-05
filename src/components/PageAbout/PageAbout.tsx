import * as React from 'react';
import Gist from 'react-gist';
import * as Shortcuts from '../../utility/Shortcuts';
import './PageAbout.css'

export interface Props {
    name?: string;
}

export interface State {
    displayedImageName: string;
    // ageString: string;
}

export default class PageAbout extends React.PureComponent<Props, State> {
    private imageTimer: NodeJS.Timer | undefined;
    // private ageTimer: NodeJS.Timer | undefined;

    private ageString = 'March 8, 1990 05:21:00 AM EST';
    private dob = new Date(this.ageString);

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
            this.imageTimer = setInterval(() => this.cycleImages(), 3000);
        }
    }

    componentWillUnmount() {
        if (this.imageTimer) {
            clearInterval(this.imageTimer);
        }
    }

    private cycleImages() {
        const currentIndex = this.fileNames.indexOf(this.state.displayedImageName || ''); 
        const newIndex = Shortcuts.loopIndex(currentIndex, this.fileNames.length);

        if (newIndex) {
            this.setState({ displayedImageName: this.fileNames[newIndex] });
        }

        const newDate = new Date();
        
        console.log('dateDiff: ' + Shortcuts.dateDiff(this.dob, newDate));
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
                    <Gist id='fbb9101764db0ba9fd4987425f427efb' />
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