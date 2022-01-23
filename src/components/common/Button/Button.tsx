import { Link } from 'react-router-dom';

/* eslint-disable no-unused-vars */
export enum roleType {
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}
/* eslint-disable */

type Props = {
  label: string;
  btnRole: roleType;
  route?: string;
};

const Button: React.FC<Props> = ({ label, btnRole, route }): JSX.Element => {
  const classes = `button ${btnRole === roleType.SUCCESS && 'success'} ${
    btnRole === roleType.ERROR && 'error'
  } ${btnRole === roleType.WARNING && 'warning'}`;

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
