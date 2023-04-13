import css from '../Form/Form.module.css';
import { filterContacts } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt => {
    const value = evt.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="filter">
        Filter contacts by name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={changeFilter}
          id="filter"
        />
      </label>
    </div>
  );
};
