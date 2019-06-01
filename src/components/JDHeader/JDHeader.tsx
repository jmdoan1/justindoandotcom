import * as React from 'react';
import './JDHeader.css';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

// 'extends RouteComponentProps' required to wrap component in withRouter
export interface Props extends RouteComponentProps {
    name: string;
    routes: any[];
    defaultRoute: string;
}

class JDHeader extends React.PureComponent<Props> {
    getClassName(path: string): string {
        const currentPath = this.props.location.pathname;

        var returnClass = 'JDHeaderButton';

        if (currentPath.toLowerCase() === path.toLowerCase() ||
            (!this.props.routes.map(rt => rt.path).includes(currentPath) &&
                path.toLowerCase() === this.props.defaultRoute.toLowerCase())) {

            returnClass += ' Selected'
        }

        return returnClass;
    }

    render() {
        var buttonDisplay = [];
        for (const route of this.props.routes) {
            buttonDisplay.push(
                <td key={Math.random()} colSpan={1} className={this.getClassName(route.path)}>
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