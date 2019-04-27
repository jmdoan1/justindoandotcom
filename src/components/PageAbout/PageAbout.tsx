import * as React from 'react';

export interface Props {
    name?: string;
}

export default class PageAbout extends React.PureComponent<Props> {
    private fileNames = ([
        'BlueUnderBridge.jpg', 
        'BeachMouseRat.jpg', 
        'Powells.jpg'
    ].sort(function(a, b){return 0.5 - Math.random()})); //Randomizes the array

    render() {
        var images: JSX.Element[] = []

        for (const imgName of this.fileNames) {
            images.push(
                <img 
                    src={require('../../assets/images/About/' + imgName)} 
                    key={imgName}
                />
            );
        }

        return (
            <div>
                {images}
            </div>
        );
    }
}

// var req = require.context('../../assets/images/About', false, /.*\.jpg$/);
// req.keys().forEach(function(key){
//     req(key);
// });