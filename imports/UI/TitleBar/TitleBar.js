import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1> {this.props.title}</h1>
          {this.props.subtitle ? <h2> {this.props.subtitle}</h2> : null}
        </div>
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
