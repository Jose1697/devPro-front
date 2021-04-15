import React, { Component } from 'react';

import './styles/Loader.css';
import Navbar from './Navbar'
export default class Loader extends Component {
  render() {
    return (
      <>
      
      <div className="lds-grid">
         
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      </>
    );
  }
}
