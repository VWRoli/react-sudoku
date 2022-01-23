import { NavLink } from 'react-router-dom';
import { navbarData } from './navbarData';

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav>
      <ul>
        {navbarData.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <NavLink
                to={url}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
