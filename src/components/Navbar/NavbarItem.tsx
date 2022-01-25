import { NavLink } from 'react-router-dom';

type Props = {
  url: string;
  text: string;
};

const NavbarItem: React.FC<Props> = ({ url, text }): JSX.Element => {
  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
