import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from 'features/404-page/404-page.scss';

/**
 * Page404 display component
 * @returns {JSX}
 */
class Page404 extends Component {
  /**
   * React render method
   * @returns {JSX}
   */
  render () {
    return (
      <div className={styles['error-page']}>
        <div className={styles['error-page__404']}>
          404
        </div>
        <div className={styles['error-page__main-msg']}>
          This page does not exist.
        </div>
        <div className={styles['error-page__description']}>
          The page you're looking for has either been deleted or never existed.
          <br />
          We apologise for any inconvenience.
        </div>
        <div className={styles['error-page__button']}>
          <Link
            to='/'
            className={styles['error-page__home-button']}>
            Go back to home
          </Link>
        </div>
      </div>
    );
  }
}

export default Page404;
