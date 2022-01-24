import { useState } from 'react';

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
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setUserSelected(id);
    setSelected(true);
  };

  return (
    <div
      className={selected ? 'grid-item selected' : 'grid-item'}
      id={id}
      onClick={handleClick}
    >
      {!number || number}
    </div>
  );
};

export default GridItem;
