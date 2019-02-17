import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Navigator extends React.Component {
  render() {
    return (
      <ul className="hList">
        <li>
          <div className="menu">
            <h2 className="menu-title">CSS</h2>
            <ul className="menu-dropdown">
              <li><Link to="/float">float</Link></li>
              <li><Link to="/position">position</Link></li>
              <li><Link to="/center">center</Link></li>
              <li><Link to="/bfc">bfc</Link></li>
              <li><Link to="/layout">layout</Link></li>
              <li><Link to="/square">square</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <div className="menu">
            <h2 className="menu-title menu-title_2nd">Javscript</h2>
            <ul className="menu-dropdown">
              <li>basic</li>
              <li>ES6</li>
              <li>algorithm</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="menu">
            <h2 className="menu-title menu-title_3rd">Framework</h2>
            <ul className="menu-dropdown">
              <li>React.js</li>
              <li>Vue.js</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="menu">
            <h2 className="menu-title menu-title_4th">Node.js</h2>
            <ul className="menu-dropdown">
              <li>basic</li>
              <li>Express.js</li>
              <li>Koa2</li>
              <li>CI CD</li>
            </ul>
          </div>
        </li>
      </ul>
    );
  }
}

export default Navigator;