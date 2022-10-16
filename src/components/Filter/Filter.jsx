import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel htmlFor="filter">
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange} />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
