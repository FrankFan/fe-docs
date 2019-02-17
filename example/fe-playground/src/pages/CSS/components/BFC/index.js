import React from 'react';
import './index.scss';

export default class Center extends React.Component {
  render() {
    return (
      <div className="center">
        <div className="bfc">
          <div className="aside">aside</div>
          <div className="main">main</div>
        </div>
        <div className="clear-float">
          <div className="child"></div>
          <div className="child"></div>
        </div>
        <div className="margin-collapse">
          <p>haha</p>
          <div className="wrap">
            <p>haha</p>
          </div>
        </div>
        <div className="only-abs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    );
  }
}