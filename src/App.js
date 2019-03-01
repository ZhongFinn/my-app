import React, { Component } from 'react';
import Button from './Button';
import TextInput from './Textinput'
import './App.css';
import styles from './styles/App_style';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.panel}>
          <p style={styles.header}>BIG FISH</p>
          <TextInput placeholder="Email" />
          <TextInput placeholder="Password" />
          <TextInput placeholder="Name" />
          <Button label="Sign up"/>
          <div style={styles.footer}>
          <p style={styles.footer_text}>Already have an account?</p>
          <p style={styles.footer_link}>Login</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
