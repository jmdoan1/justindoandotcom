import * as React from 'react';
import Gist from 'react-gist';
import * as Shortcuts from '../../utility/Shortcuts';
import { DateDiff } from '../../utility/DateStuff';
import './PageAbout.css'

export interface Props {
    name?: string;
}

export interface State {
    displayedImageName: string;
    ageString: string;
}

export default class PageAbout extends React.PureComponent<Props, State> {
    private imageTimer: NodeJS.Timer | undefined;
    private ageTimer: NodeJS.Timer | undefined;

    private dobString = 'March 8, 1990 05:21:00 AM EST';
    private dob = new Date(this.dobString);

    private fileNames = Shortcuts.randomize([
        'BlueUnderBridge.jpg',
        'BeachMouseRat.jpg',
        'Powells.jpg',
        'BarCampPodium.png',
        'AGTCBus.jpg'
    ]);

    constructor(props: Props) {
        super(props);

        const constructorAgeString = Shortcuts.dateDiff(this.dob, new Date());
        if (this.fileNames.length > 0) {
            this.state = { displayedImageName: this.fileNames[0], ageString: constructorAgeString };
        } else {
            this.state = { displayedImageName: '', ageString: constructorAgeString };
        }

        if (this.fileNames.length > 1) {
            this.imageTimer = setInterval(() => this.cycleImages(), 3000);
        }

        this.ageTimer = setInterval(() => this.cycleAgeLabel(), 1000);
    }

    componentWillUnmount() {
        if (this.imageTimer) {
            clearInterval(this.imageTimer);
        }

        if (this.ageTimer) {
            clearInterval(this.ageTimer);
        }
    }

    private cycleAgeLabel() {
        this.setState({ ageString: new DateDiff(this.dob, new Date()).totalTimeString() });
    }

    private cycleImages() {
        const currentIndex = this.fileNames.indexOf(this.state.displayedImageName || ''); 
        const newIndex = Shortcuts.loopIndex(currentIndex, this.fileNames.length);

        if (newIndex !== undefined) {
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
                    <h2>Age:</h2>
                    {this.state.ageString}
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
                    
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas urna ac ultricies ullamcorper. Etiam venenatis lectus orci, sed laoreet nulla congue sed. Nunc sed tincidunt nunc. In sit amet ligula dignissim, sollicitudin magna ac, egestas ante. Aliquam tempor eu sem a mattis. Suspendisse gravida sit amet nibh at condimentum. Maecenas at nunc mi. Phasellus fringilla, libero quis dictum dapibus, dolor tortor dapibus leo, tincidunt aliquam dui elit at mi. Vestibulum nulla felis, egestas a lobortis sed, euismod vel turpis. Morbi pellentesque porttitor auctor. Aenean non interdum diam. Fusce feugiat purus quam, aliquet eleifend enim cursus quis.
                    
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas urna ac ultricies ullamcorper. Etiam venenatis lectus orci, sed laoreet nulla congue sed. Nunc sed tincidunt nunc. In sit amet ligula dignissim, sollicitudin magna ac, egestas ante. Aliquam tempor eu sem a mattis. Suspendisse gravida sit amet nibh at condimentum. Maecenas at nunc mi. Phasellus fringilla, libero quis dictum dapibus, dolor tortor dapibus leo, tincidunt aliquam dui elit at mi. Vestibulum nulla felis, egestas a lobortis sed, euismod vel turpis. Morbi pellentesque porttitor auctor. Aenean non interdum diam. Fusce feugiat purus quam, aliquet eleifend enim cursus quis.
                    
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas urna ac ultricies ullamcorper. Etiam venenatis lectus orci, sed laoreet nulla congue sed. Nunc sed tincidunt nunc. In sit amet ligula dignissim, sollicitudin magna ac, egestas ante. Aliquam tempor eu sem a mattis. Suspendisse gravida sit amet nibh at condimentum. Maecenas at nunc mi. Phasellus fringilla, libero quis dictum dapibus, dolor tortor dapibus leo, tincidunt aliquam dui elit at mi. Vestibulum nulla felis, egestas a lobortis sed, euismod vel turpis. Morbi pellentesque porttitor auctor. Aenean non interdum diam. Fusce feugiat purus quam, aliquet eleifend enim cursus quis.
                </div>
            </div>
        );
    }
}