import * as React from "react";
import { useTheme, styled, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const CustomGrid = styled(Grid)(
  ({
    theme,
    backgroundColor = "transparent",
    justify = "center",
    align = "center",
    height = "100vh",
    width = "100%",
  }) => ({
    display: "flex",
    justifyContent: justify,
    alignItems: align,
    backgroundColor,
    height,
    width,
  })
);

export default function StyledGrid(props) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CustomGrid {...props} />
    </ThemeProvider>
  );
}
