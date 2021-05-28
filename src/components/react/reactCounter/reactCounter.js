import "./reactCounter.scss";
import PropTypes from "prop-types";
import React from "react";

export default class ReactCounter extends React.Component {
	static defaultProps = {
		count: 10,
		onUpdate: () => {}
	};

	static propTypes = {
		count: PropTypes.number,
		onUpdate: PropTypes.func
	};

	render() {
		return (
			<>
				<p>{this.props.count}</p>
				<button onClick={() => this.props.onUpdate(this.props.count + 1)}>+</button>
				<button onClick={() => this.props.onUpdate(this.props.count - 1)}>-</button>
			</>
		);
	}
}
