import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { listIconStyle } from "../Styles";

const MultiComponents = ({ open, closeSideBar, item }) => {
  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemButton
            sx={{
              "&:hover": {
                background: "linear-gradient(145deg, #E31E25, #E31E25);",
                boxShadow: "inset 0px 0px 0px black, inset 0px 0px 9px black",
                transition: "0.2s ease-in-out",
                transform: "scale(1.1)",
              },
            }}
            onClick={closeSideBar}
          >
            <ListItemIcon
              sx={{
                ...listIconStyle,
                mr: open ? 3 : "auto",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.key}</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};
export default MultiComponents;
