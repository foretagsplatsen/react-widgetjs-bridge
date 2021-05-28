import "./reactDemo.scss";
import CounterWidget from "components/widgetjs/counterWidget/counterWidget";
import React from "react";
import ReactCounter from "components/react/reactCounter/reactCounter";
import WidgetJsWrapper from "components/react/widgetJsWrapper/widgetJsWrapper";

export default class ReactDemo extends React.Component {
	state = {
		count: 10
	};

	onUpdate(newValue) {
		this.setState({ count: newValue });
	}

	render() {
		return (
			<div className="app">
				<div className="header">

					<h1>React demo</h1>

					<p>This demo shows a React only counter, side-by-side with a WidgetJs counter wrapped into
						React.</p>
					<p> The counter are in sync in both directions.</p>
				</div>

				<div className="section">
					<h2>React counter</h2>
					<ReactCounter
						count={this.state.count}
						onUpdate={this.onUpdate.bind(this)}
					/>
				</div>
				<div className="section">
					<h2>Widgetjs counter</h2>
					<WidgetJsWrapper
						_widget={CounterWidget}
						count={this.state.count}
						onUpdate={this.onUpdate.bind(this)}
					/>
				</div>
			</div>
		);
	}
}
