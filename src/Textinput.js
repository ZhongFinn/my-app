import React, { Component } from 'react';
import styles from './styles/TextInput_style';

export default class Button extends Component{
    render(){
        return(
            <div style={styles.container}>
                <input placeholder={this.props.placeholder} style={styles.input}/>
                <div style={styles.line}></div>
            </div>
        );
    }
}
