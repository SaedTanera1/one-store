import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import "./H.css";
import logo from "./my.png";
import { Link } from "react-router-dom";

import Header3 from "./Header3";
import Header2 from "./Header2";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const Header1 = ({ mode, setmode }) => {
  const theme = useTheme();

  return (
    <>
      <div style={{ position: "relative" }}>
        <Box>
          <AppBar
            sx={{
              position: "static",
              bgcolor: theme.palette.mode === "dark" ? "#54545" : "#803735",
              transition: "1s",
            }}
          >
            <StyleToolbar className="container">
              <Box
                sx={{
                  display: { md: "flex", sm: "flex" },
                  maxWidth: { lg: "16%", md: "20%" },
                }}
              >
                <img
                  style={{ maxWidth: "100%", width: 70, height: 50 }}
                  src={logo}
                />
              </Box>

              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <Link to="/ ">
                  <Button sx={{ color: "white" }}>Home</Button>
                </Link>
                <Link to="/Login">
                  <Button sx={{ color: "white" }}>loguot</Button>
                </Link>
                <Link to="/Register">
                  <Button sx={{ color: "white" }}>Checkout</Button>
                </Link>
                {
                  <>
                    <Link to="/Login">
                      <Button sx={{ color: "white" }}>Login</Button>
                    </Link>
                    <Link to="/Register">
                      <Button sx={{ color: "white" }}>Register</Button>
                    </Link>
                  </>
                }
              </Box>
            </StyleToolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default Header1;
