import { roleType } from '../Button/Button';

type Props = {
  msg: string;
  msgRole: roleType;
};

const Message: React.FC<Props> = ({ msg, msgRole }): JSX.Element => {
  const classes = `message-box ${
    msgRole === roleType.SUCCESS && 'successMsg'
  } ${msgRole === roleType.ERROR && 'errorMsg'} ${
    msgRole === roleType.WARNING && 'warningMsg'
  }`;

  return (
    <div className={classes}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
