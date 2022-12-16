import { useState } from "react"
import  studioTheme  from "./ui-components/studioTheme.js";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { SidebarWrapper } from "./components/SidebarWrapper"
import { Outlet } from "react-router-dom";
import TopNavBar from "./ui-components/TopNavBar";


export default function Root() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  return (
    <>
    <ThemeProvider theme={studioTheme}>
<div id="outer-container" style={{
    margin: "auto",
    maxWidth: 1200
  }}>
    <SidebarWrapper isOpen={isSideMenuOpen} onCloseClick={() => setIsSideMenuOpen(false)} />
    <TopNavBar width="100%" onHamburgerClick={() => {setIsSideMenuOpen(true)}}/>
    <Outlet />
  </div>

    </ThemeProvider></>
  )
}