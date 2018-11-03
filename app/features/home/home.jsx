import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Station from 'features/home/components/station/station';

import styles from 'features/home/home.scss';

export default class Home extends Component {
  /**
   * componentDidMount hook
   */
  componentDidMount () {
    this.props.requestHomePage();
  }

  /**
   * componentDidUpdate hook
   */
  componentDidUpdate () {
    if (this.props.home.error) {
      this.props.history.push('/404');
    }
  }

  /**
   * React render method
   * @returns {JSX}
   */
  render () {
    return (
      <div className={styles['home']}>
        {
          !this.props.home.homeData
            ? 'loading'
            : this.props.home.homeData.map(station =>
              (
              <Station
                key={station.name}
                name={station.name}
                tubeLines={station.tubeLines}
              />
              )
            )
        }
      </div>
    );
  }
}

Home.propTypes = {
  requestHomePage: PropTypes.func.isRequired,
  home: PropTypes.shape({
    isFetching: PropTypes.bool,
    homeData: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      tubeLines: PropTypes.arrayOf(PropTypes.string)
    })),
    error: PropTypes.shape({})
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

Home.defaultProps = {
  home: {
    isFetching: true,
    homeData: [],
    error: null
  }
};
