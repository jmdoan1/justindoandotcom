import * as React from 'react';
import './JDHeader.css';

export interface Props {
    name: string;
}

export default class ProjectThumbnail extends React.PureComponent<Props> {
    render() {
        return(
            <header className="JDHeader">
                <table cellSpacing={0} cellPadding={0} className="JDHeaderTable">
                    <tr>
                        <td>
                            <p className="JDHeaderName">{this.props.name}</p>
                        </td>
                        <td className="JDHeaderButton">
                            <p>test 1</p>
                        </td>
                        <td className="JDHeaderButton">
                            <p>test 2</p>
                        </td>
                        <td className="JDHeaderButton">
                            <p>test 3</p>
                        </td>
                    </tr>
                </table>
            </header>
        );
    }
}