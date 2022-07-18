import * as React from "react";
import { useTheme, styled, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: "40px",
}));

export default function StyledButton(props) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CustomButton {...props} />
    </ThemeProvider>
  );
}
