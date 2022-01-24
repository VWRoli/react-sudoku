type Props = {
  number: number;
};

const GridItem: React.FC<Props> = ({ number }): JSX.Element => {
  return <div className="grid-item">{!number || number}</div>;
};

export default GridItem;
