import React from 'react';
import './index.scss';

export default class Center extends React.Component {
  render() {
    return (
      <div className="center-content">
        <h1>Center in CSS</h1>
        <div className="wrap">
          <div className="center1 absolute-center">
            1.normal center
          </div>
        </div>
        <div className="wrap">
          <div className="center2">
            <p>2.position center</p>
          </div>
        </div>
        <div className="wrap">
          <div className="center3">
            <p className="transform-center">3.transform</p>
          </div>
        </div>
        <div className="wrap flex-center">
          <div className="center4 flex-center">
            <div className="content-box flex-center">
              <p>4.flexbox center</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
