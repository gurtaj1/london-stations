import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Title from 'components/title/title';
import ListItem from 'components/list-item/list-item';

import styles from 'features/home/components/station/station.scss';

export const tubeLineColors = {
  bakerloo: '#996633',
  central: '#CC3333',
  circle: '#FFCC00',
  district: '#006633',
  'hammersmith-city': '#CC9999',
  jubilee: '#868F98',
  metropilitan: '#660066',
  northern: '#000000',
  picadilly: '#000099',
  victoria: '#0099CC',
  'waterloo-city': '#66CCCC'
};

export const capitaliseEachWord = string => {
  const modifiedString = string.replace('-', ' and ');
  const newString = modifiedString.replace(/\b\w/g, letter => letter.toUpperCase());

  return newString;
};

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
              listItem={capitaliseEachWord(line)}
              inlineStyleColor={tubeLineColors[line]}
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
