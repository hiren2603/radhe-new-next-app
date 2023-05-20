import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { listIconStyle, listItemText } from "../Styles";

const ItemComponent = ({ open, item, closeSideBar, handleNavigatiion }) => {
  return (
    <>
      <ListItem sx={{ display: "block" }} disablePadding>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            "&:hover": {
              background: "linear-gradient(145deg, #E31E25, #E31E25);",
              boxShadow: "inset 0px 0px 0px black, inset 0px 0px 9px black",
              transition: "0.2s ease-in-out",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => {
            closeSideBar();
            handleNavigatiion(item.link);
          }}
        >
          <ListItemIcon sx={{ ...listIconStyle, mr: open ? 3 : "auto" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText sx={{ ...listItemText, opacity: open ? 1 : 0 }}>
            {item.key}
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ItemComponent;
