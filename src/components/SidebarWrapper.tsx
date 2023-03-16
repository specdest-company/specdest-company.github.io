import { SyntheticEvent } from 'react';
import Sidebar from '../ui-components/SideBar';
import styles from './SidebarWrapper.module.css';

export const SidebarWrapper = ({
  isOpen = false,
  onCloseClick,
}: {
  isOpen?: boolean;
  onCloseClick?: (event: SyntheticEvent) => void;
}) => {
  return (
    <div
      id="mySidenav"
      className={`${styles['sidenav']} ${isOpen ? styles['open'] : ''}`}
    >
      <Sidebar onCloseClick={onCloseClick} />
    </div>
  );
};
