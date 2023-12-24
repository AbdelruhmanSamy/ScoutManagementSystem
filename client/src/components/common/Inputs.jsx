import "./../../assets/styles/components/Inputs.scss";

import PropTypes from "prop-types";

function TextInput({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <label className="input input--text">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
function RadioInput({ label, name, required, valuesArr, onChange }) {
  return (
    <label className="input input--radio">
      {label}
      <div className="radio-buttons">
        {valuesArr.map((value) => (
          <div key={value}>
            <input
              type="radio"
              name={name}
              value={value}
              onChange={onChange}
              required={required}
            />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </label>
  );
}
RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  valuesArr: PropTypes.array,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export { RadioInput };
export default TextInput;