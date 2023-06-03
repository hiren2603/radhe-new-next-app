import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { listItemText } from "../Styles";

const InnerComponent = ({ item, handleNavigatiion }) => {
  return (
    <>
      <List sx={{ px: 2.5 }} disablePadding>
        <ListItem>
          <ListItemButton
            sx={{
              "&:hover": {
                background: "linear-gradient(145deg, #E31E25, #E31E25);",
                webkitBoxShadow:
                  "inset 0px 0px 0px black, inset 0px 0px 9px black",
                transition: "0.2s ease-in-out",
                transform: "scale(1.1)",
              },
            }}
            onClick={() => {
              handleNavigatiion(item.link);
            }}
          >
            <ListItemText sx={listItemText}>{item.key}</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};
export default InnerComponent;
