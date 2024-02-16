/* eslint-disable react/prop-types */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import SwitchMode from "../SwitchMode/SwitchMode";
import { useMode } from "../../contexts/modeContext";
import Logo from "../../assets/logo.jpg"


const pages = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "technology",
  "sports",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
   
  const {darkMode} = useMode()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{ top: 0, zIndex: 1000, color: darkMode ? "#fff": "#111", }}>
      <Container
        sx={{ backgroundColor: darkMode ? "#121212" : "#fff",  textDecoration: "none" }}
        maxWidth="xl"
      >
        <Toolbar disableGutters>
         <img src={Logo} style={{height: "3rem", width: "3rem"}} alt="logo" />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                textDecoration: "none",
              }}
            >
              {pages.map((page) => (
                <MenuItem  key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: darkMode ? "#fff": "#111",
                        textTransform: "capitalize",
                      }}
                      to={page}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
       
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", ml: 2 }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: darkMode ? "#fff": "#111",
                    textTransform: "capitalize",
                  }}
                  to={page}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SwitchMode/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
