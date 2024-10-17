/* eslint-disable react/prop-types */

function Input({ label, type, name, changeFunction }) {
  return (
    <label>
      {label}
      <input type={type} name={name} onChange={changeFunction} />
    </label>
  );
}

export { Input };
