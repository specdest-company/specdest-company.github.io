import Sidebar from './Sidebar'
import styles from "./SidebarWrapper.module.css"

export const SidebarWrapper = ({isOpen = false, onCloseClick}) => {
  return <div id="mySidenav" class={`${styles["sidenav"]} ${isOpen ? styles["open"] : ''}`} >
    <Sidebar onCloseClick={onCloseClick}/>
  </div>
}