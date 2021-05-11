import "./app.scss";
import logo from "./logo.svg";
import PropType from "prop-types";
import React from "react";
import { Widget } from "widgetjs";

class CounterWidget extends Widget {
	_initialize({ count = 0 }, onUpdate) {
		this._count = count;
		this._onUpdateCallback = onUpdate;
	}

	update() {
		this._onUpdateCallback(this._count);
		return super.update();
	}

	renderContentOn(html) {
		html.h1(this._count.toString());
		html.button("+").click(() => {
			this._count++;
			this.update();
		});
		html.button("-").click(() => {
			this._count--;
			this.update();
		});
	}
}

class WidgetJsWrapper extends React.Component {
	static defaultProps = {
		onUpdate: () => {},
		state: { count: 0 }
	};

	static propTypes = {
		onUpdate: PropType.func,
		state: PropType.object,
		widget: PropType.func.isRequired
	};

	updateRef() {
		if (this.ref) {
			let Klass = this.props.widget;
			let widget = new Klass(this.props.state, this.props.onUpdate);
			widget.replace(this.ref);
		}
	}

	componentDidMount() {
		this.updateRef();
	}

	componentDidUpdate() {
		this.updateRef();
	}

	render() {
		return <widgetjs ref={(ref) => (this.ref = ref)}/>;
	}
}

class App extends React.Component {
	state = {
		count: 10
	};

	onUpdate(newValue) {
		this.setState({ count: newValue });
	}

	increment() {
		this.setState(({ count }) => ({ count: count + 1 }));
	}

	decrement() {
		this.setState(({ count }) => ({ count: count - 1 }));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img alt="logo" className="App-logo" src={logo}/>
					<div>
						<h1>React counter</h1>
						<p>{this.state.count}</p>
						<button onClick={this.increment.bind(this)}>+</button>
						<button onClick={this.decrement.bind(this)}>-</button>
					</div>
					<div>
						<h1>Widgetjs counter</h1>
						<WidgetJsWrapper
							state={{ count: this.state.count }}
							widget={CounterWidget}
							onUpdate={this.onUpdate.bind(this)}/>
					</div>
					<a
						className="App-link"
						href="https://reactjs.org"
						rel="noopener noreferrer"
						target="_blank"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
