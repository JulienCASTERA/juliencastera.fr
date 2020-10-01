import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Blog from "./Blog";
import Me from './Me';
import Projects from './Projects';

class Home extends Component {

    render() {
        return (
            <div>
                <nav className="">
                    <Link className={"navbar-brand"} to={"/"}> Accueil </Link>
                    <div className="" id="t">
                        <ul className="">
                            <li className="m">
                                <Link className={"nav-link"} to={"/blog"}> Blog </Link>
                            </li>

                            <li className="">
                                <Link className={"nav-link"} to={"/me"}> A propos de moi </Link>
                            </li>

                            <li className="">
                                <Link className={"nav-link"} to={"/projects"}> Projets </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/blog" component={Blog} />
                    <Route path="/me" component={Me} />
                    <Route path="/projects" component={Projects} />
                </Switch>

                <div className={"text-red-400"}>Oui</div>
            </div>
        )
    }
}

export default Home;