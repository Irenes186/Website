import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import NavigationBar from "./navigationBar";

export default class Header extends React.Component {
  render() {
    const { DeviceWidth, history } = this.props;
    return (
      <header
          style={{
            background: `black`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}>
            <Link to="/">
              <h1 style={{ margin: 0, color: 'white' }}>
                  {DeviceWidth >= 550 ? "SEPR-Documentation" : "SEPR"}
                </h1>
            </Link>
            <NavigationBar screenSize={DeviceWidth} history={history} />
          </div>
        </header>
    );
  }
}

Header.propTypes = {
  DeviceWidth: PropTypes.number,
  history: PropTypes.object,
};

Header.defaultProps = {
  DeviceWidth: window.innerWidth,
  history: undefined,
};
