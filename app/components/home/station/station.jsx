import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from 'components/home/station/station.scss';

/**
 * Station Component
 * @param {name, lines} param0
 */
export default function Station ({
  name,
  lines
}) {
  return (
    <Fragment>
      <div className={styles['station-name']}>
        {name}
      </div>
      <div className={styles['lines-list']}>
        {
          lines.map(line => line)
        }
      </div>
    </Fragment>
  );
}

Station.propTypes = {
  name: PropTypes.string.isRequired,
  lines: PropTypes.arrayOf(PropTypes.string).isRequired
};
