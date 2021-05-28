import "./chrome.scss";
import { Route, Switch } from "react-router";
import Home from "pages/home/home";
import { NavLink } from "react-router-dom";
import Page404 from "pages/page404/page404";
import React from "react";
import ReactDemo from "pages/reactDemo/reactDemo";
import WidgetJsDemo from "pages/widgetJSDemo/widgetJsDemo";

export default class Chrome extends React.Component {
	static defaultProps = {};

	static propTypes = {};

	state = {};

	render() {
		return (
			<div className="chrome">
				<div className="navigation">
					<NavLink exact className="nav-link" to="/">Home</NavLink>
					<NavLink className="nav-link" to="/react">React</NavLink>
					<NavLink className="nav-link" to="/widgetjs">WidgetJS</NavLink>
				</div>
				<div className="content">
					<Switch>
						<Route path="/widgetjs">
							<WidgetJsDemo/>
						</Route>
						<Route path="/react">
							<ReactDemo/>
						</Route>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route>
							<Page404/>
						</Route>
					</Switch>
				</div>
			</div>
		);
	}
}
