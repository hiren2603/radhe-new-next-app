import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { listIconStyle } from "../Styles";
import { theme } from "@/theme";

const ProductListItem = ({ item, children, open, closeSideBar }) => {
  return (
    <ListItem
      key={item.id}
      sx={{ display: "block", color: "#fff" }}
      disablePadding
      onClick={() => handleNavigatiion(item.link)}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
          "&:hover": {
            background: theme.palette.secondary.main,
            color: "#fff",
            boxShadow: "inset 0px 0px 0px black, inset 0px 0px 2px black",
            transition: "0.2s ease-in-out",
            transform: "scale(1.1)",
          },
        }}
        onClick={closeSideBar}
      >
        <ListItemIcon
          sx={{ ...listIconStyle, mr: open ? 3 : "auto", color: "#fff" }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText sx={{ opacity: open ? 1 : 0 }}>{item.key}</ListItemText>
      </ListItemButton>
      {children}
    </ListItem>
  );
};

export default ProductListItem;
