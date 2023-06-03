import { List } from "@mui/material";
import { useRouter } from "next/router";

import { menuList } from "@/helpers/menuList";
import MultiComponent from "../MultiComponent";
import ItemComponent from "../ItemComponent";

const NavList = ({
  open,
  closeSideBar,
  openCategory,
  openSubCategory,
  handleCategory,
  handleSubCategory,
}) => {
  const router = useRouter();
  const handleNavigatiion = (linkText) => {
    router.push(`${linkText}`);
  };

  return (
    <>
      <List>
        {menuList?.map((item) => {
          if (item.multicomponent) {
            return (
              <>
                <MultiComponent
                  key={item.key}
                  open={open}
                  item={item}
                  openCategory={openCategory}
                  openSubcategory={openSubCategory}
                  handleSubCategory={handleSubCategory}
                  closeSideBar={closeSideBar}
                  handleCategory={handleCategory}
                  handleNavigatiion={handleNavigatiion}
                />
              </>
            );
          } else {
            return (
              <>
                <ItemComponent
                  key={item.key}
                  open={open}
                  item={item}
                  closeSideBar={closeSideBar}
                  handleNavigatiion={handleNavigatiion}
                />
              </>
            );
          }
        })}
      </List>
    </>
  );
};

export default NavList;
