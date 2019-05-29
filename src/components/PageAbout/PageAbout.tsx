import * as React from 'react';
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

    private links = ([
        {
            text: 'LinkedIn', 
            address: 'https://www.linkedin.com/in/doanjustin/'
        }, {
            text: 'Twitter', 
            address: 'https://twitter.com/AxeEffect3890'
        }, {
            text: 'GitHub', 
            address: 'https://github.com/jmdoan1'
        }, {
            text: 'Stack Overflow', 
            address: 'http://stackoverflow.com/users/4948354/justin-doan'
        }
    ]);

    private contacts = ([
        {
            method: 'Email',
            info: 'justindoan@justindoan.com'
        }, {
            method: 'Skype',
            info: 'AxeEffect3890'
        }, {
            method: 'Phone',
            info: '(978) APP-DEV2'
        }
    ])

    private facts = ([
        {
            name: 'Age',
            text: this.state ? this.state.ageString : ''
        }, {
            name: 'Formal Education',
            text: 'University of North Florida: BBA Accounting, 2012'
        }, {
            name: 'Current Employment',
            text: <>Software Engineer at <a href='https://www.opiesoftware.com' target='_blank'>OPIE Software</a></>
        }, {
            name: 'Why this website is greyscale',
            text: 'I am colorblind.'
        }
    ])

    private fileNames = Shortcuts.randomize([
        'BlueUnderBridge.jpg',
        'BeachMouseRat.jpg',
        'Powells.jpg',
        'BarCampPodium.png',
        'AGTCBus.jpg'
    ]);

    constructor(props: Props) {
        super(props);

        const constructorAgeString = new DateDiff(this.dob, new Date()).totalTimeString();
        if (this.fileNames.length > 0) {
            this.state = { displayedImageName: this.fileNames[0], ageString: constructorAgeString };
        } else {
            this.state = { displayedImageName: '', ageString: constructorAgeString };
        }

        if (this.fileNames.length > 1) {
            this.imageTimer = setInterval(() => this.cycleImages(), 2000);
        }

        this.ageTimer = setInterval(() => this.cycleAgeText(), 500);
    }

    componentWillUnmount() {
        if (this.imageTimer) {
            clearInterval(this.imageTimer);
        }

        if (this.ageTimer) {
            clearInterval(this.ageTimer);
        }
    }

    private cycleAgeText() {
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

        const factDisplay = [];
        if (this.facts.length > 0) {
            factDisplay.push(<h2 style={{ textAlign: 'center' }}>Quick Facts</h2>);

            for (const fact of this.facts) {
                factDisplay.push(
                    <div>
                        <div className='QuickFact'>
                            <strong>{fact.name + ': '}</strong>
                            {fact.name.toLowerCase().trim() === 'age' && this.state.ageString ? this.state.ageString : fact.text}
                        </div>
                        <br />
                    </div>
                );
            }
        }

        const linkDisplay = [];
        if (this.links.length > 0) {
            linkDisplay.push(<h1>Links</h1>);

            for (const link of this.links) {
                linkDisplay.push(
                    <a
                        className='AboutLink'
                        href={link.address}
                        target='_blank'
                    >
                        <p>
                            {link.text}
                        </p>
                    </a>
                );
            }
        }

        const contactDisplay = [];
        if (this.contacts.length > 0) {
            contactDisplay.push(<h1>Contact</h1>);

            for (const contact of this.contacts) {
                var infoDisplay = null;
                if (contact.method.toLowerCase().trim() === 'email') {
                    infoDisplay = (
                        <a
                            className='AboutLink'
                            target='_blank'
                            href={'mailto:' + contact.info}
                        >
                            {contact.info}
                        </a>
                    );
                } else {
                    infoDisplay = contact.info;
                }

                contactDisplay.push(
                    <div>
                        <div className='ContactMethod'>
                            <strong>{contact.method + ': '}</strong>
                            {infoDisplay}
                        </div>
                        <br />
                    </div>
                );
            }
        }

        return (
            <div className="AboutPage">
                <img src={source} className="AboutImage" />
                <div className="AboutText">
                    <h1>Who am I?</h1>
                    I am a self-taught developer with a formal education (and ~6 years of full time experience) in accounting and finance. I started learning native iOS development in 2015, freelancing iOS in 2017, and, as of 2018, have now moved on to full time employment and freelancing in multiple frameworks, platforms, and laguages.
                    {factDisplay}
                    {linkDisplay}
                    {contactDisplay}
                 </div>
            </div>
        );
    }
}