import { Box, Button, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#272727" : "#803735",

        py: 0.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: theme.palette.mode === "dark" ? "#54545" : "#EFFC00",
          }}
          variant="text"
          color="primary"
        >
          Saed Tanera
        </Button>
        <Box sx={{ display: { md: "flex", xs: "none" } }}>©2024</Box>
      </Typography>
    </Box>
  );
};

export default Footer;
