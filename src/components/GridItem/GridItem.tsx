type Props = {
  number: number;
  id: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  computerOutput: boolean;
};

const GridItem: React.FC<Props> = ({
  number,
  id,
  selected,
  setSelected,
  computerOutput,
}): JSX.Element => {
  const handleClick = () => {
    setSelected(id);
  };

  return (
    <div
      className={`${selected === id ? 'grid-item selected' : 'grid-item'}`}
      id={id}
      onClick={handleClick}
    >
      {computerOutput ? <div className="cell-overlay"></div> : null}

      {!number || number}
    </div>
  );
};

export default GridItem;
