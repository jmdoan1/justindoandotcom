import * as React from 'react';
import './JDHeader.css';
import { Link } from 'react-router-dom';

export interface Props {
    name: string;
    routes: any[];
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
                            <Link to={this.props.routes[0].path}>{this.props.routes[0].name}</Link>
                        </td>
                        <td colSpan={1} className={getButtonClass(this.props.routes[1].name)}>
                            <Link to={this.props.routes[1].path}>{this.props.routes[1].name}</Link>
                        </td>
                        <td colSpan={1} className="JDHeaderButtonHovered">
                            <Link to={this.props.routes[2].path}>{this.props.routes[2].name}</Link>
                        </td>
                    </tr>
                </table>
            </header>
        );
    }
}