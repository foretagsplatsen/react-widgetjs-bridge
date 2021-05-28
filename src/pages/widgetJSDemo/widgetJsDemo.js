import "./widgetJsDemo.scss";
import CounterWidget from "components/widgetjs/counterWidget/counterWidget";
import React from "react";
import ReactCounter from "components/react/reactCounter/reactCounter";
import ReactDOM from "react-dom";
import { Widget } from "widgetjs";
import WidgetJsWrapper from "components/react/widgetJsWrapper/widgetJsWrapper";

class ReactWrapper extends Widget {
	_initialize(Klass, spec) {
		this._react = Klass;
		this._props = spec;
	}

	renderContentOn(html) {
		let { element } = html.div({ klass: "wrapper-placeholder" }, "Foo");
		ReactDOM.render(React.createElement(this._react, this._props), element);
	}
}

class WidgetPage extends Widget {
	_count = 10;

	onUpdate(newCount) {
		this._count = newCount;
		this.update();
	}

	renderContentOn(html) {
		html.div(
			{ klass: "header" },
			html.h1("WidgetJs"),
			html.p("This demo shows a WidgetJs only counter, side-by-side with a ReactJs counter wrapped into WidgetJS.")
		);

		html.div(
			{ klass: "section" },
			html.h2("WidgetJS counter"),
			new CounterWidget({
				count: this._count,
				onUpdate: this.onUpdate.bind(this)
			})
		);

		html.div(
			{ klass: "section" },
			html.h2("React counter"),
			new ReactWrapper(ReactCounter, {
				count: this._count,
				onUpdate: this.onUpdate.bind(this)
			})
		);
	}
}

export default class WidgetJsDemo extends React.Component {
	static defaultProps = {};

	state = {};

	render() {
		return (
			<div className="widgetJsDemo">
				<WidgetJsWrapper _widget={WidgetPage}/>
			</div>
		);
	}
}
