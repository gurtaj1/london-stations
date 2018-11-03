import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from 'components/list-item/list-item.scss';

/**
 * ListItem Component
 * @param {ListItem} param0
 */
export default function ListItem ({
    listItem
  }) {
    return (
        <div className={styles['list-item']}>
            {listItem}
        </div>
    );
  }
  
  ListItem.propTypes = {
    listItem: PropTypes.string.isRequired
  };
