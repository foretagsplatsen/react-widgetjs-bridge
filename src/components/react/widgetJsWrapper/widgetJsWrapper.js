import "./widgetJsWrapper.scss";
import PropTypes from "prop-types";
import React from "react";

export default class WidgetJsWrapper extends React.Component {
	static defaultProps = {
		onUpdate: () => {},
		state: { count: 0 }
	};

	static propTypes = {
		_widget: PropTypes.func.isRequired,
		onUpdate: PropTypes.func,
		state: PropTypes.object
	};

	updateRef() {
		if (this.ref) {
			let {
				_widget: Klass,
				...otherProps
			} = this.props;
			let widget = new Klass(otherProps);
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
