type Props = {
  value: number;
  addUserInput: (selectedIndex: number, value: number) => void;
  selected: string;
};

const ControlButton: React.FC<Props> = ({ value, selected, addUserInput }) => {
  const handleClick = () => {
    //setUserValue(value);
    console.log(value);
    addUserInput(+selected, value);
  };

  return (
    <button className="control-btn" onClick={handleClick}>
      {value}
    </button>
  );
};

export default ControlButton;
