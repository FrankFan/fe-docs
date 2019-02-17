import React from 'react';
import './index.scss';

export default class Float extends React.Component {
  render() {
    return (
      <section className="float">
        <section className="example1">
          <div className="div1">div1</div>
          <div className="div2">div2</div>
          <div className="div3">div3</div>
          <div className="div4">div4</div>
        </section>
        <div className="play clearfix">
          <div className="div1">div1</div>
          <div className="div2">div2</div>
          <div className="div3">div3</div>
          <div className="div4">div4</div>
          <div className="div5">div5</div>
        </div>
        <div className="test">hahahah</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur itaque quae atque, asperiores perferendis, tempore maiores nam, explicabo impedit repudiandae iure sint vel expedita architecto suscipit autem corporis temporibus.</p>
        <section className="float2">
        <h2>文字环绕效果</h2>
        <div className="surround">
          <img src="http://temp.im/150x130/ff5a5f/fff" alt=""/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum beatae, nam architecto velit id quidem facilis eaque accusantium. Ipsam iste animi amet ratione doloribus a quidem, rem minima recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum beatae, nam architecto velit id quidem facilis eaque accusantium. Ipsam iste animi amet ratione doloribus a quidem, rem minima recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum beatae, nam architecto velit id quidem facilis eaque accusantium. Ipsam iste animi amet ratione doloribus a quidem, rem minima recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum beatae, nam architecto velit id quidem facilis eaque accusantium. Ipsam iste animi amet ratione doloribus a quidem, rem minima recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum beatae, nam architecto velit id quidem facilis eaque accusantium. Ipsam iste animi amet ratione doloribus a quidem, rem minima recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum beatae, nam architecto velit id quidem facilis eaque accusantium. Ipsam iste animi amet ratione doloribus a quidem, rem minima recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum beatae, nam architecto velit id quidem facilis eaque accusantium. Ipsam iste animi amet ratione doloribus a quidem, rem minima recusandae.</p>
        </div>
        </section>
        <section className="example">
          <h2>《CSS世界》书中示例</h2>
          <div className="father">
            <img src="http://temp.im/75x100" alt=""/>
          </div>
          <p className="animal">小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，</p>
        </section>
        <section className="w3c-example">
          <h2>http://www.w3school.com.cn/css/css_positioning_floating.asp中示例</h2>
          <div>框1</div>
          <div>框2</div>
          <div>框3</div>
        </section>
        <section className="w3c-example2">
          <h2>http://www.w3school.com.cn/css/css_positioning_floating.asp 行框和清理</h2>
          <div>框1</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla culpa optio, natus, architecto iste earum necessitatibus minima facere iusto velit tenetur cumque id impedit quod hic animi corrupti nisi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla culpa optio, natus, architecto iste earum necessitatibus minima facere iusto velit tenetur cumque id impedit quod hic animi corrupti nisi!</p>
        </section>
        <section className="w3c-example3">
          <h2>例子3</h2>
          <div className="news clearfix">
            <img src="http://temp.im/100x130/ff5a5f/fff" />
            <p>some text</p>
            <div className="clear"></div>
          </div>
        </section>
        other text
      </section>
    );
  }
}
