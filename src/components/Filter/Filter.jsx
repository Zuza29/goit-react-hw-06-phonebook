import css from '../Form/Form.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="filter">
        Filter contacts by name
        <input
          className={css.input}
          type="search"
          value={value}
          onChange={onChange}
          id="filter"
        />
      </label>
 
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  filteredContacts: PropTypes.array,
  value: PropTypes.string,
};
