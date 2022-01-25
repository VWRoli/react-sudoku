import { navbarData } from './navbarData';
//Components
import NavbarItem from './NavbarItem';

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav>
      <ul>
        {navbarData.map((link) => {
          const { id, url, text } = link;
          return <NavbarItem key={id} url={url} text={text} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
