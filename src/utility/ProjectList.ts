import { Color } from 'csstype';

// until a database exists

export interface PortfolioProject {
    name: string;
    images?: HTMLImageElement[];
    gifs?: HTMLImageElement[];
    tagline?: string;
    description?: string;
    personal: boolean;
    client: boolean;
    W2: boolean;
    other?: string; // if not personal, client, or W2
    logoString?: string;
    logoBgColor?: Color;
}

const projectWatchFlippers: PortfolioProject = {
    name: 'WatchFlippers',
    images: undefined,
    gifs: undefined,
    tagline: 'An App',
    personal: false,
    client: true,
    W2: false,
    other: undefined,
    logoString: 'wflogo.png',
    logoBgColor: 'black'
};

export const projectList = [projectWatchFlippers];

// export projectList = [
//     {
//       name='WatchFlippers'
//       tagline='An App'
//       personal={false}
//       client={true}
//       W2={false}
//       logoString='wflogo.png'
//       logoBgColor='black'
//     }, {
//       name='FameStream'
//       tagline='Another App'
//       personal={false}
//       client={false}
//       W2={false}
//     }
// ] as [PortfolioProject];