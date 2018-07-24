import React, { Component } from 'react';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Diversity from './Pages/Diversity';
import Faq from './Pages/Faq';
import Product from './Pages/Product';
import Partnerships from './Pages/Partnerships';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Footer from './Components/Footer';

const PAGES = ["product", "about", "work with us", "careers", "home"];

class App extends Component {
  constructor(props) {
    super(props)
    const current = window.location.href.split("/").slice(-1)[0]
    this.state = {
      // currentPage: pages.indexOf(current) > -1 ? current : 'home',
      currentPage: current,
      showLangDropdown: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    document.addEventListener("DOMContentLoaded", function(){
      var el = document.getElementById('nav-icon2')
      el.onclick = function() {
        el.classList.toggle('open');
      };
    });
  }

  handleScroll (event) {
    var nav = document.getElementById('testEl');
    if ( window.pageYOffset > 30 ) {
        nav.classList.add("testElClass1");
    } else {
        nav.classList.remove("testElClass1");
    }
    var navIcon = document.getElementById('nav-icon2');
    if ( window.pageYOffset > 30 ) {
        navIcon.classList.add("nav-icon-color");
    } else {
        navIcon.classList.remove("nav-icon-color");
    }
  }

  handleChange(page) {
    this.setState({currentPage: page.replace(/\s/g, '')});
    window.history.pushState(null, null, page.replace(/\s/g, ''));
    window.scrollTo(0, 0);

    document.getElementById('op').checked = false;
    document.getElementById('nav-icon2').classList.remove('open');
  }

  handleLanguage() {
    this.setState({
      showLangDropdown: !this.state.showLangDropdown,
    });
  }

  renderPages() {
    return PAGES.map(page => {
      if (page === 'language') {
        if (this.state.showLangDropdown) {
          return (
            <div className="title-inner-test" key={page}>
              <div className="title-menu-test language-dropdown" onClick={this.handleLanguage.bind(this)}>
                <h6 className="dissapear language">en</h6>
                <h6 className="dissapear language-option">fr</h6>
              </div>
            </div>
          );
        }
        return (
          <div className="title-inner-test" key={page}>
            <div className="title-menu-test no-hover" onClick={this.handleLanguage.bind(this)}>
              <h6 className="dissapear language">en</h6>
            </div>
          </div>
        )
      }
      return (
        <div className="dissapear title-inner-test" key={page}>
          <div className="title-menu-test title-menu-test__hover" onClick={this.handleChange.bind(this, page)}>
            <h6>{page.toUpperCase()}</h6>
          </div>
        </div>
      );
    });
  }

  maybeRenderHome() {
    if (this.state.currentPage === 'home') {
      return ( <Home /> );
    }
  }

  maybeRenderCareers() {
    if (this.state.currentPage === 'careers') {
      return ( <Careers /> );
    }
  }

  maybeRenderAbout() {
    if (this.state.currentPage === 'about') {
      return ( <About handleChange={this.handleChange} /> );
    }
  }

  maybeRenderProduct() {
    if (this.state.currentPage === 'product') {
      return ( <Product /> );
    }
  }

  maybeRenderPartnerships() {
    if (this.state.currentPage === 'workwithus') {
      return ( <Partnerships /> );
    }
  }

  maybeRenderFaq() {
    if (this.state.currentPage === 'faq') {
      return ( <Faq /> );
    }
  }

  renderFullMenu() {
    return PAGES.slice().reverse().map(page => {
      return (
        <li><a className="menu" id={page.replace(/\s/g, '')} onClick={this.handleChange.bind(this, page)}>{page}</a></li>
      );
    });
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
              {this.renderFullMenu()}
            </ul>
          </nav>
        </div>
        <div className="header-wrap" id="testEl">
          <div className="header">
            <a className="logo" onClick={this.handleChange.bind(this, 'home')}>
              ZENYSIS
            </a>
            {this.renderPages()}
          </div>
        </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={10}
        >
          {this.maybeRenderHome()}
          {this.maybeRenderCareers()}
          {this.maybeRenderAbout()}
          {this.maybeRenderFaq()}
          {this.maybeRenderProduct()}
          {this.maybeRenderPartnerships()}
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default App;
