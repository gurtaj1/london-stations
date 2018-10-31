import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/home/home.scss';

class Home extends React.Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor (props) {
    super(props);
  }


  /**
   * React render method
   * @returns {JSX}
   */
  render () {
    return (
      <div className="home-container">
        test
      </div>
    );
  }
}

Home.propTypes = {

};
