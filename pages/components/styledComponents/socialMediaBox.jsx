import * as React from "react";
import { useTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CustomBox = styled(Box)(({ theme }) => ({
  color: "white",
  fontSize: "52px",
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "46px",
  },
}));

export default function SocialMediaBox(props) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CustomBox {...props} />
    </ThemeProvider>
  );
}
