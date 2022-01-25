import { Link } from 'react-router-dom';

/* eslint-disable no-unused-vars */
export enum roleType {
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
}
/* eslint-disable */

type Props = {
  label: string;
  btnRole: roleType;
  route?: string;
  clickHandler?: any;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  label,
  btnRole,
  route,
  clickHandler,
  disabled,
}): JSX.Element => {
  const classes = `button ${btnRole === roleType.SUCCESS && 'success'} ${
    btnRole === roleType.ERROR && 'error'
  } ${btnRole === roleType.WARNING && 'warning'} ${
    btnRole === roleType.INFO && 'info'
  } ${disabled ? 'disabled' : ''}`;

  return (
    <>
      {route ? (
        <Link to={route}>
          <button className={classes}>{label}</button>
        </Link>
      ) : (
        <button
          className={classes}
          type="submit"
          onClick={clickHandler}
          disabled={disabled}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
