import React from 'react';
import './index.scss';

export default class Position extends React.Component {
  render() {
    return (
      <div className="position-content">
        <h1>Position in CSS</h1>
        <div className="normal">normal flow</div>
        <div className="offset">relative</div>
        <div className="normal">normal flow</div>

        <section className="section-offset2">
          <div className="offset2">absolute</div>
        </section>

        <section className="fixed">
          fixed
        </section>

        <section className="sticky flex-center">
          sticky,常用语顶部固定导航
        </section>
      </div>
    );
  }
}
