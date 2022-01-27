type Props = {
  value: number;
  // eslint-disable-next-line no-unused-vars
  addUserInput: (selected: number, value: number) => void;
  selected: string;
  disabled: boolean;
};

const ControlButton: React.FC<Props> = ({
  value,
  selected,
  addUserInput,
  disabled,
}) => {
  const classes = `${value !== 0 ? 'control-btn' : 'control-btn del-btn'} ${
    disabled ? 'disabled' : ''
  }`;
  return (
    <button className={classes} onClick={() => addUserInput(+selected, value)}>
      {value !== 0 ? value : 'DEL'}
    </button>
  );
};

export default ControlButton;
