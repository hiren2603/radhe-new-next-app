import React, { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [drawerwidth] = useState(200);
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState({
    inkjet: false,
    laser: false,
    thermal: false,
  });
  const { inkjet, laser, thermal } = openSubCategory;

  const handleDrawer = () => {
    setOpen(!open);
  };

  const closeSideBar = () => {
    setOpen(false);
    setOpenCategory(false);
    setOpenSubCategory({
      inkjet: false,
      laser: false,
      thermal: false,
    });
  };

  const handleCategory = () => {
    if (!open) handleDrawer();
    setOpenCategory(!openCategory);
  };

  const handleSubCategory = (componentKey) => {
    if (!open) handleDrawer();
    if (componentKey === "inkjet") {
      setOpenSubCategory({
        inkjet: !inkjet,
        laser: false,
        thermal: false,
      });
    } else if (componentKey === "laser") {
      setOpenSubCategory({
        inkjet: false,
        laser: !laser,
        thermal: false,
      });
    } else if (componentKey === "thermal") {
      setOpenSubCategory({
        inkjet: false,
        laser: false,
        thermal: !thermal,
      });
    }
  };

  return (
    <>
      <Topbar open={open} drawerwidth={drawerwidth} />
      <Sidebar
        open={open}
        drawerwidth={drawerwidth}
        setOpen={setOpen}
        handleDrawerOpen={handleDrawer}
        closeSideBar={closeSideBar}
        handleCategory={handleCategory}
        handleSubCategory={handleSubCategory}
        openCategory={openCategory}
        openSubCategory={openSubCategory}
      />
    </>
  );
};

export default Layout;
