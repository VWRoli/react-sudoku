type Props = {
  number: number;
  id: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  computerOutput: boolean;
  disabled: boolean;
};

const GridItem: React.FC<Props> = ({
  number,
  id,
  selected,
  setSelected,
  computerOutput,
  disabled,
}): JSX.Element => {
  const handleClick = () => {
    setSelected(id);
  };

  return (
    <div
      className={`${selected === id ? 'grid-item selected' : 'grid-item'}`}
      id={id}
      onClick={handleClick}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }}
    >
      {computerOutput ? <div className="cell-overlay"></div> : null}

      {!number || number}
    </div>
  );
};

export default GridItem;
