import * as React from 'react';
import ProjectThumbnail from '../../components/ProjectThumbnail/ProjectThumbnail';
import { firestore } from 'firebase';

export interface Props {
  placeholderprop?: string;
}

export default class PagePortfolio extends React.PureComponent<Props> {
  
  testFirebase() {
    firestore().collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    return (
      <div>
        <h2>Under Construction</h2>
        Please ignore everything on this page
        <br/>
        <button
          onClick={this.testFirebase}
        >
          Test Firebase Connection
        </button>
        <ProjectThumbnail
          name='WatchFlippers'
          tagline='An App'
          personal={false}
          client={true}
          W2={false}
          logoString='wflogo.png'
          logoBgColor='black'
        />
        <ProjectThumbnail
          name='FameStream'
          tagline='Another App'
          personal={false}
          client={false}
          W2={false}
        />
      </div>
    );
  }
}