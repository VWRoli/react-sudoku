import { useState } from 'react';

type Props = {
  number: number;
  id: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const GridItem: React.FC<Props> = ({
  number,
  id,
  selected,
  setSelected,
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
      {!number || number}
    </div>
  );
};

export default GridItem;
