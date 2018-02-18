import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.title}</h1>
        <p> {this.props.subtitle}</p>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

TitleBar.defaultProps = {};

export default TitleBar;
