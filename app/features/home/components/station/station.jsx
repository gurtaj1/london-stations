import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Title from 'components/title/title';
import ListItem from 'components/list-item/list-item';

import styles from 'features/home/components/station/station.scss';

/**
 * Station Component
 * @param {name, tubeLines} param0
 */
export default function Station ({
  name,
  tubeLines
}) {
  return (
    <Fragment>
      <div className={styles['station-name']}>
        <Title
          key={name}
          title={name}
        />
      </div>
      <div className={styles['lines-list']}>
        {
          tubeLines.map(line => (
            <ListItem
              key={line}
              listItem={line}
            />
          ))
        }
      </div>
    </Fragment>
  );
}

Station.propTypes = {
  name: PropTypes.string.isRequired,
  tubeLines: PropTypes.arrayOf(PropTypes.string).isRequired
};
