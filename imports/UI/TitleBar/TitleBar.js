import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.title}</h1>
        {this.props.subtitle ? <h2> {this.props.subtitle}</h2> : null}
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {};

export default TitleBar;
