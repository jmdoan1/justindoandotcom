import * as React from 'react';
import './JDHeader.css';

export interface Props {
    name: string;
}

export default class ProjectThumbnail extends React.PureComponent<Props> {
    render() {
        return(
            <header className="JDHeader">
                <table className="JDHeaderTable">
                    <tr>
                        <td>
                            <p className="JDHeaderName">{this.props.name}</p>
                        </td>
                        <td className="JDHeaderButton">
                            <p>test 1</p>
                        </td>
                        <td>
                            <button>test 2</button>
                        </td>
                    </tr>
                </table>
            </header>
        );
    }
}