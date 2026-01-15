import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />

      <main className="pt-24 lg:pt-28 min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
