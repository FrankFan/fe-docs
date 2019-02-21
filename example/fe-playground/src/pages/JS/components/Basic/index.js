import React from 'react';
import './index.scss';

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  createDom() {
    let divs = [];
    for(let i = 0; i < 100; i++) {
      let style = {
        backgroundColor: this.getRandomColor(),
      };
      divs.push(
      <div
        ref={i}
        data-index={i}
        onClick={this.onDivClick}
        style={style}
        className="box"
        key={i}>第{i+1}个</div>);
    }
    return divs;
  }

  onDivClick = (e) => {
    const current = e.target.dataset.index;
    for(let i = 0; i < 100; i++) {
      if (+i !== +current) {
        this.refs[i].style.backgroundColor = this.getRandomColor();
      }
    }
  }

  render() {
    return (
      <div className="basic">
        <div className="question">
          <h1 onClick={this.onH1Click}>在一个空白页面上创建100个元素，给每个元素一个独立的背景色，点击每个元素时，被点元素背景色保持不变，其他元素的背景色必须全部发生变化，且这100个元素的背景色不能重复</h1>
          <div className="content">
            {this.createDom()}
          </div>
        </div>
      </div>
    );
  }
}
