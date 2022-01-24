type Props = {
  value: number;
  setUserValue: React.Dispatch<React.SetStateAction<null | number>>;
  addUserInput: (selectedIndex: number, value: number) => void;
  userSelected: string;
};

const ControlButton: React.FC<Props> = ({
  value,
  setUserValue,
  addUserInput,
  userSelected,
}) => {
  const handleClick = () => {
    setUserValue(value);
    addUserInput(+userSelected, value);
  };

  return (
    <button className="control-btn" onClick={handleClick}>
      {value}
    </button>
  );
};

export default ControlButton;
