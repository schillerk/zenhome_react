import React, { Component } from 'react';
import './App.css';

import Icon from './Icon';
import Text from './Text';
import BigImage from './BigImage';
import TileText from './TileText';
import Home from './Home';
import Careers from './Careers';
import Diversity from './Diversity';

const pages = ["home", "government", "solution", "implementation", "careers"];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'diversity'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll (event) {
    var nav = document.getElementById('testEl');
    if ( window.pageYOffset > 50 ) {
        nav.classList.add("testElClass1");
    } else {
        nav.classList.remove("testElClass1");
    }
    var navIcon = document.getElementById('nav-icon2');
    if ( window.pageYOffset > 50 ) {
        navIcon.classList.add("nav-icon-color");
    } else {
        navIcon.classList.remove("nav-icon-color");
    }
  }

  renderPages() {
    return pages.map(page => (
      <div className="title-inner-test" key={page}>
        <div className="title-menu-test">
          <h6 className="dissapear">{page}</h6>
        </div>
      </div>
      )
    )
  }

  renderCurrentPage() {
    if (this.state.currentPage === 'home') {
      return (<Home />);
    }
    if (this.state.currentPage === 'careers') {
      return (<Careers />);
    }
    if (this.state.currentPage === 'diversity') {
      return (<Diversity />);
    }
  }

  render() {
    return (
      <div id="app">
        {/*from https://codepen.io/designcouch/pen/Atyop*/}
        {/*and https://codepen.io/vladaoleynik/pen/vExKxJ*/}
        <input type="checkbox" id="op"></input>
        <div className="lower">
          <label htmlFor="op">
            <div id="nav-icon2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
        </div>
        <div className="overlay overlay-hugeinc">
          <label htmlFor="op"></label>
          <nav>
            <ul>
              <li><a href="index.html" className="menu" id="home">HOME</a></li>
              <li><a href="background.html" className="menu" id="product">GOVERNMENT</a></li>
              <li><a href="solution.html" className="menu" id="capabilities">SOLUTION</a></li>
              <li><a href="implementation.html" className="menu" id="implementation">IMPLEMENTATION</a></li>
              <li><a href="careers.html" className="menu" id="careers">CAREERS</a></li>
            </ul>
          </nav>
        </div>
        <div className="header-buffer"></div>
        <div className="header-wrap" id="testEl">
          <div className="header">
            <a className="logo" href="index.html">
              ZENYSIS
            </a>
            {this.renderPages()}
          </div>
        </div>
        {this.renderCurrentPage()}
        <v-footer></v-footer>
      </div>
    );
  }
}

export default App;
