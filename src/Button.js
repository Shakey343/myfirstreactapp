import React from 'react';
import './button.scss';

export class Button extends React.Component {
	render() {
		return (
			<button
				className={ this.props.light ? 'light-button' : 'dark-button' } onClick={this.props.onClick}>
				Refresh
			</button>
		);
	}
}
