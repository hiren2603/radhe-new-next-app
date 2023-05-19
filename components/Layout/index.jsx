import React, { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [drawerwidth] = useState(200);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Topbar open={open} drawerwidth={drawerwidth} />
      <Sidebar
        open={open}
        drawerwidth={drawerwidth}
        setOpen={setOpen}
        handleDrawerOpen={handleDrawerOpen}
        closeSideBar={handleDrawerClose}
      />
    </>
  );
};

export default Layout;
