import * as React from "react";
import { useTheme, styled, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const CustomPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "400px",
  padding: "48px",
  [theme.breakpoints.between("xs", "sm")]: {
    width: "300px",
  },
}));

const CustomTileTypography = styled(Typography)(
  ({ theme, color = "black" }) => ({
    fontWeight: "bold",
    marginBottom: "32px",
    color,
  })
);

const CustomBodyTypography = styled(Typography)(({ theme }) => ({
  maxWidth: "max-content",
  textAlign: "justify",
  textJustify: "inter-word",
  marginBottom: "24px",
}));

export default function PostIt(props) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CustomPaper {...props} />
    </ThemeProvider>
  );
}

export function Title(props) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CustomTileTypography {...props} />
    </ThemeProvider>
  );
}

export function Body(props) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CustomBodyTypography {...props} />
    </ThemeProvider>
  );
}
