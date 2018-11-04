import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/title/title.scss';

/**
 * Title Component
 * @param {title} param0
 */
function Title ({
  title
}) {
  return (
    <div className={styles['title']}>
      {title}
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
