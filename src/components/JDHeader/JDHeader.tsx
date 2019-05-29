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
        return (
            <header className='JDHeader'>
                <table cellSpacing={0} cellPadding={0} className='JDHeaderTable'>
                    <tr>
                        <td colSpan={4}>
                            <p className='JDHeaderName'>{this.props.name}</p>
                        </td>
                        <td colSpan={1} className={this.getClassName(this.props.routes[0].path)}>
                            <Link
                                to={this.props.routes[0].path}
                                className='JDHeaderLink'
                            >
                                {this.props.routes[0].name}
                            </Link>
                        </td>
                        <td colSpan={1} className={this.getClassName(this.props.routes[1].path)}>
                            <Link
                                to={this.props.routes[1].path}
                                className='JDHeaderLink'
                            >
                                {this.props.routes[1].name}
                            </Link>
                        </td>
                        <td colSpan={1} className={this.getClassName(this.props.routes[2].path)}>
                            <Link
                                to={this.props.routes[2].path}
                                className='JDHeaderLink'
                            >
                                {this.props.routes[2].name}
                            </Link>
                        </td>
                    </tr>
                </table>
            </header>
        );
    }
}

export default withRouter(JDHeader);