type Props = {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  disabled: boolean;
  handleChange: (
    // eslint-disable-next-line no-unused-vars
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

const FormGroup: React.FC<Props> = ({
  label,
  type,
  value,
  placeholder,
  disabled,
  handleChange,
}): JSX.Element => {
  return (
    <div className="form-group">
      <label htmlFor={label}></label>
      <input
        type={type}
        name={label}
        id={label}
        value={value}
        placeholder={placeholder}
        required
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};

export default FormGroup;
