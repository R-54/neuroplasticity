import * as React from "react";
import { useTheme, styled, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundImage: "url(/images/logo.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "50% 0",
  height: "400px",
  width: "100%",
  [theme.breakpoints.between("xs", "sm")]: {
    height: "300px",
  },
}));

export default function Logo(props) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CustomPaper {...props} />
    </ThemeProvider>
  );
}
