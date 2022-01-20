import { Link } from 'react-router-dom';
import { navbarData } from './navbarData';

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav>
      <ul>
        {navbarData.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
