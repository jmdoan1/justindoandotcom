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

        return (
            <header className="JDHeader">
                <table cellSpacing={0} cellPadding={0} className="JDHeaderTable">
                    <tr>
                        <td colSpan={4}>
                            <p className="JDHeaderName">{this.props.name}</p>
                        </td>
                        <td colSpan={1} className="JDHeaderButtonSelected">
                            Projects
                        </td>
                        <td colSpan={1} className={getButtonClass("Tutorials")}>
                            Tutorials
                        </td>
                        <td colSpan={1} className="JDHeaderButtonHovered">
                            About
                        </td>
                    </tr>
                </table>
            </header>
        );
    }
}