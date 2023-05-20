import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import CallIcon from "@mui/icons-material/Call";
import ProductSvg from "./ProductSvg";
import EWestSvg from "./EWestSvg";

export const menuList = [
  {
    key: "Home",
    link: "/",
    icon: <HomeIcon />,
    id: 1,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "About",
    link: "/about",
    icon: <AutoStoriesIcon />,
    id: 2,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "Products",
    link: "/products",
    icon: <HomeIcon />,
    id: 3,
    multicomponent: true,
    multicomponents: [
      {
        key: "Inkjet",
        link: "/products/inkjet",
        id: 7,
        nestedcomponent: true,
        componentKey: "inkjet",
        icon: <InvertColorsIcon />,
        nestedcomponents: [
          {
            key: "RE200+",
            link: "/products/inkjet/re200",
            icon: <ProductSvg />,
            id: 13,
          },
          {
            key: "RE225",
            link: "/products/inkjet/re225",
            icon: <ProductSvg />,
            id: 14,
          },
          {
            key: "RE224",
            link: "/products/inkjet/re225",
            icon: <ProductSvg />,
            id: 15,
          },
        ],
      },
      {
        key: "Laser",
        link: "/products/laser",
        id: 8,
        nestedcomponent: true,
        componentKey: "laser",
        icon: <InvertColorsIcon />,
        nestedcomponents: [
          {
            key: "CO2 Laser",
            link: "/products/inkjet/co2",
            icon: <ProductSvg />,
            id: 9,
          },
          {
            key: "Fiber Laser",
            link: "/products/inkjet/co2",
            icon: <ProductSvg />,
            id: 10,
          },
          {
            key: "UV Laser",
            link: "/products/inkjet/uv",
            icon: <ProductSvg />,
            id: 11,
          },
          {
            key: "Desktop Laser",
            link: "/products/inkjet/desktop",
            icon: <ProductSvg />,
            id: 12,
          },
        ],
      },
      {
        key: "TIJ",
        link: "/products/tij",
        id: 13,
        nestedcomponent: true,
        componentKey: "thermal",
        icon: <InvertColorsIcon />,
        nestedcomponents: [
          {
            key: "TP 01",
            link: "/products/inkjet/tp01",
            icon: <ProductSvg />,
            id: 16,
          },
          {
            key: "TP 01.1",
            link: "/products/inkjet/tp01.1",
            icon: <ProductSvg />,
            id: 17,
          },
          {
            key: "TP Handy",
            link: "/products/inkjet/handy",
            icon: <ProductSvg />,
            id: 18,
          },
        ],
      },
    ],
  },
  {
    key: "Applications",
    link: "/application",
    icon: <AppRegistrationIcon />,
    id: 4,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "E-west Mgmt.",
    link: "/e-west-management",
    icon: <EWestSvg />,
    id: 5,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "Contact",
    link: "/contact",
    icon: <CallIcon />,
    id: 6,
    multicomponent: false,
    multicomponents: [],
  },
];
