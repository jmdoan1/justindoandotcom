import * as React from 'react';
import Gist from 'react-gist';
import './PageTutorials.css'

export default class PageTutorials extends React.PureComponent {
    render() {
        return (
            <div>
                <h2>Under Construction</h2>
                Please ignore everything on this page
                <br />
                <br />
                <pre>
                    <code>
                    let f = 'this is a code sample example';
                    </code>
                </pre>
                <br /><br />
                <Gist id='fbb9101764db0ba9fd4987425f427efb' />
                <br /><br />
            </div>
        );
    }
}