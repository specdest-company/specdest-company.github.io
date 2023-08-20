import { Link } from 'react-router-dom';

const NavItem = ({
  text,
  href,
  active,
}: {
  text: string;
  href: string;
  active: boolean;
}) => {
  return (
    <Link to={href}>
      <p className={`ml-[30px] nav__item ${active ? 'active' : ''}`}>{text}</p>
    </Link>
  );
};

export default NavItem;
