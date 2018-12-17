import * as React from 'react';
import './JDHeader.css';

export interface Props {
    name: string;
    pages: string[];
}

export default class JDHeader extends React.PureComponent<Props> {
    render() {

        function getButtonClass(page: string) {
            return "JDHeaderButton"
        }

        return(
            <header className="JDHeader">
                <table cellSpacing={0} cellPadding={0} className="JDHeaderTable">
                    <tr>
                        <td>
                            <p className="JDHeaderName">{this.props.name}</p>
                        </td>
                        <td className="JDHeaderButtonSelected">
                            <p>Projects</p>
                        </td>
                        <td className={getButtonClass("Tutorials")}>
                            <p>Tutorials</p>
                        </td>
                        <td className="JDHeaderButtonHovered">
                            <p>About</p>
                        </td>
                    </tr>
                </table>
            </header>
        );
    }
}