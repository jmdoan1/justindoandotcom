import * as React from 'react';
import './JDHeader.css';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

export interface Props extends RouteComponentProps {
    name: string;
    routes: any[];
    defaultRoute: string;
}

class JDHeader extends React.PureComponent<Props> {
    getClassName(path: string): string {
        const currentPath = this.props.location.pathname;
        if (
            currentPath.toLowerCase() === path.toLowerCase() ||
            (currentPath === '/' && path.toLowerCase() === this.props.defaultRoute.toLocaleLowerCase())) {

                return 'JDHeaderButton Selected'
        } else {
            return 'JDHeaderButton'
        }
    }
    
    render() {
        const buttonDisplay = [];
        if (this.props.routes.length > 0) {
            for (const route of this.props.routes) {
                buttonDisplay.push(
                    <td colSpan={1} className={this.getClassName(route.path)}>
                        <Link
                            key={route.key}
                            to={route.path}
                            className='JDHeaderLink'
                        >
                            {route.name}
                        </Link>
                    </td>
                );
            }
        }

        return (
            <header className='JDHeader'>
                <table cellSpacing={0} cellPadding={0} className='JDHeaderTable'>
                    <tbody>
                        <tr>
                            <td colSpan={this.props.routes.length + 1}>
                                <p className='JDHeaderName'>{this.props.name}</p>
                            </td>
                            {buttonDisplay}
                        </tr>
                    </tbody>
                </table>
            </header>
        );
    }
}

export default withRouter(JDHeader);