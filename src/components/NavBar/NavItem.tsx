// import Link from "next/link";

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
    <a href={href}>
      <p className={`ml-[30px] nav__item ${active ? 'active' : ''}`}>{text}</p>
    </a>
  );
};

export default NavItem;
