"use strict";

/* jslint browser: true */

import React, {Component} from 'react';
import ButtonDocumentation from './ButtonDocumentation';
import InputDocumentation from './InputDocumentation';
import CardDocumentation from './CardDocumentation';

// export for http://fb.me/react-devtools
window.React = React;

const belleLogoStyle = {
  height: 22,
  width: 22,
  background: '#53C7F2',
  display: 'inline-block',
  fontSize: 14,
  borderRadius: '100%',
  position: 'relative',
  top: 1
};

class App extends Component {

  render() {
    return <div style={ {margin: '0 auto', width: 640 } }>
      <h1><i style={ belleLogoStyle }></i> Belle Documentation</h1>

      <ul style={ { listStyleType: 'none', paddingLeft: 0 } }>
        <li><a href="#button">Button</a></li>
        <li><a href="#input">Input</a></li>
        <li><a href="#card">Card</a></li>
      </ul>

      <ButtonDocumentation />
      <InputDocumentation />
      <CardDocumentation />

    </div>;
  }
}

React.render(<App/>, document.getElementById('react'));