import React, { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Box, useTheme } from "@mui/material";

const Layout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = theme.breakpoints.down("sm");
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
    <Box
      sx={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <Topbar open={open} drawerwidth={drawerwidth} setOpen={handleDrawer} />
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
      {/* <Box
        sx={{
          width: `calc(100% - (${theme.spacing(8)} + 1px))`,
          ...(!isSmallScreen &&
            open && {
              marginLeft: `${drawerwidth}px`,
              width: `calc(100% - ${drawerwidth}px)`,
            }),
          ...(isSmallScreen &&
            open && {
              // marginLeft: "0",
              width: "100%",
            }),
        }}
      >
        {children}
      </Box> */}
      <Box
        sx={{
          width: `calc(100% - (${theme.spacing(8)} + 1px))`,
          marginTop: "10vh",
          paddingLeft: "60px",
          ...(!isSmallScreen &&
            open && {
              paddingLeft: `${drawerwidth}px`,
              width: `calc(100% - ${drawerwidth}px)`,
            }),
          ...(isSmallScreen &&
            open && {
              // marginLeft: "0",
              width: "100%",
            }),
        }}
      >
        Component
      </Box>
      <Footer drawerwidth={drawerwidth} open={open} />
    </Box>
  );
};

export default Layout;
