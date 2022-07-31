import * as React from "react";
import { useTheme, styled, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const CustomPaper = styled(Paper)(({ theme, url, border }) => ({
  width: "500px",
  height: "700px",
  padding: "48px",
  textAlign: "center",
  backgroundImage: `url(${url})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "50% 0",
  borderRadius: "40px",
  border: `solid ${border} 8px`,
  [theme.breakpoints.between("xs", "sm")]: {
    width: "300px",
    height: "400px",
  },
}));

export default function PhotoPaper(props) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CustomPaper {...props} />
    </ThemeProvider>
  );
}
