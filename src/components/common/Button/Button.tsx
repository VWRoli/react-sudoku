import { Link } from 'react-router-dom';

/* eslint-disable no-unused-vars */
export enum buttonType {
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}
/* eslint-disable */

type Props = {
  label: string;
  btnRole: buttonType;
  route?: string;
};

const Button: React.FC<Props> = ({ label, btnRole, route }): JSX.Element => {
  const classes = `button ${btnRole === buttonType.SUCCESS && 'success'} ${
    btnRole === buttonType.ERROR && 'error'
  } ${btnRole === buttonType.WARNING && 'warning'}`;

  return (
    <>
      {route ? (
        <Link to={route}>
          <button className={classes}>{label}</button>
        </Link>
      ) : (
        <button className={classes} type="submit">
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
