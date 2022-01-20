type Props = {
  label: string;
};

const Button: React.FC<Props> = ({ label }): JSX.Element => {
  return <button className="button">{label}</button>;
};

export default Button;
