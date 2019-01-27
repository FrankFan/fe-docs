import React from 'react';
import './index.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout-content">
        <div className="wrap flex-center">
          <div className="square flex-center">宽高位父元素的50%</div>
        </div>
      </div>
    );
  }
}
