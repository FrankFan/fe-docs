import React from 'react';
import './index.scss';

// https://idiotwu.me/css-responsive-square/

export default class Square extends React.Component {
  render() {
    return (
      <div className="Square-content">
        <section className="square">
          <div className="text transform-center">我是自适应的正方形1: padding-top & after</div>
        </section>
        <section className="vw">
          <h1>自适应的正方形2: vw vh</h1>
          <div className="content">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </section>
        <section className="margin">
          123123
        </section>
      </div>
    );
  }
}
