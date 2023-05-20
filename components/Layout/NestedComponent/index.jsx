import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InnerComponent from "../InnerComponent";
import { listIconStyle, listItemText } from "../Styles";

const NestedComponent = ({
  open,
  handleSubCategory,
  handleCategory,
  openSubcategory,
  item,
  handleNavigatiion,
}) => {
  return (
    <>
      <ListItemButton
        sx={{
          ml: 2,
          "&:hover": {
            background: "linear-gradient(145deg, #E31E25, #E31E25);",
            boxShadow: "inset 0px 0px 0px black, inset 0px 0px 9px black",
            transition: "0.2s ease-in-out",
            transform: "scale(1.1)",
          },
        }}
        onClick={() => handleSubCategory(item.componentKey)}
      >
        <ListItemIcon
          sx={{
            ...listIconStyle,
            mr: open ? 3 : "auto",
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText sx={listItemText}>{item.key}</ListItemText>
        {openSubcategory[item.componentKey] ? (
          <ExpandLess sx={listIconStyle} />
        ) : (
          <ExpandMore sx={listIconStyle} />
        )}
      </ListItemButton>
      <Collapse
        in={openSubcategory[item.componentKey]}
        timeout={"auto"}
        unmountOnExit
      >
        {item.nestedcomponents?.map((innerItem) => (
          <InnerComponent
            key={innerItem.id}
            item={innerItem}
            handleNavigatiion={handleNavigatiion}
          />
        ))}
      </Collapse>
    </>
  );
};
export default NestedComponent;
