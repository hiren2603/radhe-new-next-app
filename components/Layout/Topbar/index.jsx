import {
  Box,
  Container,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { theme } from "@/theme";

function Topbar(props) {
  const { open, drawerwidth, setOpen } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== open,
  })(({ theme, open, drawerwidth }) => ({
    width: isSmallScreen ? "100%" : `calc(100% - (${theme.spacing(8)} + 1px))`,
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerwidth,
      width: isSmallScreen ? "100%" : `calc(100% - ${drawerwidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    // ...(theme.breakpoints.down("sm") && {
    //   width: "100%",
    // }),
  }));

  return (
    <AppBar position="fixed" open={open} drawerwidth={drawerwidth}>
      <Container sx={{ maxWidth: "1900px!important" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Image src="/assets/logo.png" width={180} height={60} alt="logo" />
          {isSmallScreen && (
            <>
              <Box
                sx={{
                  flexGrow: 3,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton onClick={setOpen}>
                  <Menu />
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topbar;
