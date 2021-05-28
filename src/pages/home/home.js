import "./home.scss";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import React from "react";

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<header className="home-header">
					<img alt="logo" className="home-logo" src={logo}/>

					<div className="content">
						Welcome in the React/WidgetJS playground

						<div className="links">
							<Link className="link" to="react">Go to React</Link>
							<Link className="link" to="widgetjs">Go to WidgetJS</Link>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Home;
