import React from 'react';
import './index.scss';

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    debugger;
    var iframe = window.frames['myFrame'];
    iframe.document.getElementById('index-form');
    console.log(a);
  }

  render() {
    // document.domain = 'qq.com';
    return (
      <div className="Analyzer">
        <div className="title">
          <h1 onClick={this.onClick}>Test</h1>
        </div>
        <div className="content">
          {/* <iframe
            id="myFrame"
            src="http://m.qq.com/" ></iframe> */}
        </div>
      </div>
    );
  }
}
