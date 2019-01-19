import React from 'react';
import './404.scss';

export default class NoMatch extends React.Component {
  render() {
    return (
      <div className="no-match">
        <h1>404 Not Found</h1>
        <p>{this.props.location.pathname}</p>
      </div>
    );
  }
}

