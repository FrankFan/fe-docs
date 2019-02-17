import React from 'react';
import { Link } from 'react-router-dom';
import Navigator from '@/common/components/Navigator/';
import './index.scss';


export default class Home extends React.Component {
  render() {
    return (
      <div className="Home-content">
        <Navigator />
        {/* <h1>catalog</h1>
        <ul>
          <li><Link to="/float">float</Link></li>
          <li><Link to="/position">position</Link></li>
          <li><Link to="/center">center</Link></li>
          <li><Link to="/bfc">bfc</Link></li>
          <li><Link to="/layout">layout</Link></li>
          <li><Link to="/square">square</Link></li>
        </ul> */}
      </div>
    );
  }
}
