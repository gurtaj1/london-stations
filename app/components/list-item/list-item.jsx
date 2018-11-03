import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/list-item/list-item.scss';

/**
 * ListItem Component
 * @param {ListItem} param0
 */
export default function ListItem ({
  listItem,
  inlineStyleColor
}) {
  return (
    <div className={styles['list-item']} style={{ color: inlineStyleColor }}>
      {listItem}
    </div>
  );
}

ListItem.propTypes = {
  listItem: PropTypes.string.isRequired,
  inlineStyleColor: PropTypes.string
};

ListItem.defaultProps = {
  inlineStyleColor: 'black'
};
