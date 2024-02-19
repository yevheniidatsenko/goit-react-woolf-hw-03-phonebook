import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          placeholder="Search contacts..."
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
