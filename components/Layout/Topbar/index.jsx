import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Image from "next/image";

function Topbar(props) {
  const { open, drawerwidth } = props;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== open,
  })(({ theme, open, drawerwidth }) => ({
    width: `calc(100% - (${theme.spacing(8)} + 1px))`,
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerwidth,
      width: `calc(100% - ${drawerwidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar position="fixed" open={open} drawerwidth={drawerwidth}>
      <Container sx={{ maxWidth: "1900px!important" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Image src="/assets/logo.png" width={180} height={60} alt="logo" />
          <Box
            sx={{ flexGrow: 3, display: "flex", justifyContent: "flex-end" }}
          ></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topbar;
