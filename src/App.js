import React, { Component } from 'react';
import './css/App.css';
import linkedinLogo from './img/linkedin_logo.png';
import Nav from './Nav.js';
import Grid from './Grid.js';
import Modal from './Modal.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { navOpen: false };

  }

  toggleModal = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  showSettings = (event) => {
    event.preventDefault();
    console.log(event);
    this.toggleModal();

  }
  render() {
    return (
      <div className="App">
        <div id="outer-container">
          <Nav showSettings={this.showSettings} />
          <main id="page-wrap">
            <header className="App-header">
              <h1 className="App-title">Christopher Camplin - UI Developer</h1>
              <a href="http://www.linkedin.com/pub/christopher-camplin/65/81b/882" target="_BLANK" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="" />
              </a>
            </header>
            <div className="App-intro">
                <Grid />
            </div>
          </main>
        </div>
        <Modal show={this.state.navOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div>
    );
  }
}

export default App;
