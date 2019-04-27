import * as React from 'react';

export interface Props {
    name?: string;
}

export interface State {
    displayedImageName: string;
}

export default class PageAbout extends React.PureComponent<Props, State> {
    private timer: NodeJS.Timer;

    private fileNames = ([
        'BlueUnderBridge.jpg', 
        'BeachMouseRat.jpg', 
        'Powells.jpg'
    ].sort(function(a, b){return 0.5 - Math.random()})); //Randomizes the array

    constructor(props: Props) {
        super(props);

        if (this.fileNames.length > 0) {
            this.state = {displayedImageName: this.fileNames[0]};
        }
        if (this.fileNames.length > 1) {
            this.timer = setInterval(() => this.cycleImages(), 3000);
            console.log(this.timer);
        }
    }

    // componentWillUnmount() {
    //     this.timer = clearInterval() => this.cycleImages());
    // }

    private cycleImages() {
        const currentIndex = this.fileNames.indexOf(this.state.displayedImageName || '');
        console.log('Current Index: ' + currentIndex);
        
        const newIndex = (((
            (currentIndex + 1) / this.fileNames.length
        ) -
            Math.floor((currentIndex + 1) / this.fileNames.length)
        ) *
            this.fileNames.length
        );
        console.log('New Index: ' + newIndex);

        this.setState({displayedImageName: this.fileNames[newIndex]});
    }

    render() {
        return (
            <img src={require('../../assets/images/About/' + this.state.displayedImageName)} />
        );
    }
}

// var req = require.context('../../assets/images/About', false, /.*\.jpg$/);
// req.keys().forEach(function(key){
//     req(key);
// });