import { useState } from 'react';
// import studioTheme from "./ui-components/studioTheme.js";
// import { ThemeProvider } from "@aws-amplify/ui-react";
// import { SidebarWrapper } from "./components/SidebarWrapper";
import { Outlet } from 'react-router-dom';
// import TopNavBar from "./ui-components/TopNavBar";

// export default function Root() {
//   const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
//   return (
//     <>
//       {/* <ThemeProvider theme={studioTheme}> */}
//       <div
//         id="outer-container"
//         style={{
//           margin: "auto",
//           maxWidth: 1200,
//         }}
//       >
//         {/* <SidebarWrapper
//             isOpen={isSideMenuOpen}
//             onCloseClick={() => setIsSideMenuOpen(false)}
//           />
//           <TopNavBar
//             width="100%"
//             onHamburgerClick={() => {
//               setIsSideMenuOpen(true);
//             }}
//           /> */}
//         <Outlet />
//       </div>
//       {/* </ThemeProvider> */}
//     </>
//   );
// }

// import "./globals.css";
// import { Nunito_Sans } from 'next/font/google';
import Navbar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer';

// const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Specdest',
  description: 'Tell us what you imagine and we will make them into reality',
};

export default function Root() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
