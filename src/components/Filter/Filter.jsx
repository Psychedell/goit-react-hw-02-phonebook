export const Filter = ({ value, onChange }) => (
  <label htmlFor="filter">
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange} />
  </label>
);
