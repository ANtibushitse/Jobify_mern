function FormRow({ type, name, defaulvalue, handleChange, labelText }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        value={defaulvalue}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
}

export default FormRow;
