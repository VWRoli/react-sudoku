type Props = {
  value: number;
  // eslint-disable-next-line no-unused-vars
  addUserInput: (selected: number, value: number) => void;
  selected: string;
};

const ControlButton: React.FC<Props> = ({ value, selected, addUserInput }) => {
  return (
    <button
      className={value !== 0 ? 'control-btn' : 'control-btn del-btn'}
      onClick={() => addUserInput(+selected, value)}
    >
      {value !== 0 ? value : 'DEL'}
    </button>
  );
};

export default ControlButton;
