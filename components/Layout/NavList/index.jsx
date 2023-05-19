import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { List } from "@mui/material";
import { theme } from "@/theme";

import NavListItem from "../NavListItem";
import { menuList } from "@/helpers/menuList";
import ProductListItem from "../ProductListItem";
import ModalListItem from "../ModalListItem";

const NavList = ({ open, closeSideBar }) => {
  const router = useRouter();
  const handleNavigatiion = (linkText) => {
    router.push(`/${linkText}`);
  };
  return (
    <List>
      {menuList.map((item) => {
        !item.multicomponent ? (
          <NavListItem item={item} open={open} closeSideBar={closeSideBar} />
        ) : (
          <NavListItem item={item} closeSideBar={closeSideBar}>
            {item.multicomponents.map((product) => {
              !product.nestedcomponent ? (
                <ProductListItem item={product} closeSideBar={closeSideBar} />
              ) : (
                <ProductListItem>
                  {product.nestedcomponents.map((subproduct) => {
                    <ModalListItem
                      item={subproduct}
                      closeSideBar={closeSideBar}
                    />;
                  })}
                </ProductListItem>
              );
            })}
          </NavListItem>
        );
      })}
    </List>
  );
};

export default NavList;
