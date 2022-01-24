type Props = {
  number: number;
  id: string;
  setUserSelected: React.Dispatch<React.SetStateAction<string>>;
};

const GridItem: React.FC<Props> = ({
  number,
  id,
  setUserSelected,
}): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSelected(e.target.value);
  };
  return (
    <div className="grid-item" id={id}>
      <input
        type="number"
        maxLength={1}
        value={number === 0 ? '' : number}
        onChange={handleChange}
      />
    </div>
  );
};

export default GridItem;
