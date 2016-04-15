import { Link, State, Navigation } from 'react-router';
import React from 'react';
require("../../stylesheets/components/common/footer.scss");

class Footer extends React.Component {

  render() {

    return (
      <div id='footer' style={{overflow:'auto'}}>
        This is a Footer.
      </div>
    );
  }
}

module.exports = Footer;
