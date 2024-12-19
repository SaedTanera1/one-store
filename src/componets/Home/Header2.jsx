import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  styled,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "20px 20px  ",
  width: "40%",
}));

const Icoonnave = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

function Header2() {
  const theme = useTheme();
  const [openNve, setopenNve] = useState(false);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div>
        <StyleToolbar
          sx={{
            borderTop: "0.1px solid #f8f6f450",
            bgcolor: theme.palette.mode === "dark" ? "#54545" : "#803735",
          }}
          className="container"
        >
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
            }}
            variant="h6"
          >
            <span style={{ color: "yellow" }}>O</span>ne
            <span style={{ color: "yellow" }}>S</span>tore
          </Typography>
          <Box>
            <DensityMediumIcon
              onClick={() => setopenNve(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "white",
              }}
            />
          </Box>
          {/* Search */}
          <Search
            onFocus={() => {
              return console.log("object");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor:
                theme.palette.mode === "dark" ? "black" : "white",
              transition: "1s",
            }}
          >
            <SearchIcon
              sx={{
                display: { xs: "flex" },
                color: theme.palette.mode === "dark" ? "white" : "black",
              }}
            />
            <InputBase
              sx={{
                ".MuiInputBase-input": {
                  color: theme.palette.mode === "dark" ? "white" : "dark",
                },
              }}
              placeholder="searh ..."
            />
          </Search>
          <Icoonnave>
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
            >
              <Badge color={"error"}>
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </Icoonnave>
        </StyleToolbar>
      </div>
    </>
  );
}

export default Header2;
