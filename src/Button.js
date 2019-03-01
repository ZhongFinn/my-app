import React, {Component} from 'react';
import styles from './styles/App_style';

export default class Button extends Component{
    constructor() {
        super();
        this.state = {
            hovered: false,
        };
    }

    render() {
        return (
            <div
                style={{...styles.button, opacity: this.state.hovered? 0.5 : 1}}
                onMouseEnter={() => {
                    this.setState({hovered: true});
                }}
                onMouseLeave={() => {
                    this.setState({hovered: false});
                }}>
                <p style={styles.button_label}>{this.props.label}</p>
            </div>
        );
    }

}