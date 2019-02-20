import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './index.scss';

const routesConfig = [{
  path: 'float',
  title: 'float',
},{
  path: 'position',
  title: 'position',
},{
  path: 'center',
  title: 'center',
},{
  path: 'bfc',
  title: 'bfc',
},{
  path: 'layout',
  title: 'layout',
},{
  path: 'square',
  title: 'square',
}];

class Home extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  renderLinks() {
    const currentPath = this.props.location.pathname.substr(1);
    return (<ul>
      {
        routesConfig.map(({path, title}, index) =>
          <li key={index}>
            <Link
              to={`/${path}`}
              replace={path === currentPath}
            >
              {title}
            </Link>
          </li>
        )
      }
    </ul>);
  }

  render() {
    return (
      <div className="sidebar">
        <h1>catalog</h1>
        {this.renderLinks()}
      </div>
    );
  }
}


export default withRouter(Home);