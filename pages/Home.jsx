import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import MenuBar from "./components/menuBar";
import WelcomeBlock from "./components/welcomeBlock";
import TeamBlock from "./components/teamBlock";
import ProgramsBlock from "./components/programsBlock";
import DoctorRightBlock from "./components/doctorRightBlock";
import DoctorLeftBlock from "./components/doctorLeftBlock";
import ContactBlock from "./components/contactBlock";

const drawerWidth = 240;
const navItems = ["Inicio", "Conocenos", "Programas", "Contactanos"];

const theme = createTheme();

export default function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="false" disableGutters>
        <MenuBar
          drawerWidth={drawerWidth}
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          container={container}
          theme={theme}
        />

        <Grid container spacing={0}>
          <WelcomeBlock theme={theme} />

          <TeamBlock theme={theme} />

          <ProgramsBlock theme={theme} />

          <DoctorRightBlock theme={theme} />

          <DoctorLeftBlock theme={theme} />

          <ContactBlock theme={theme} />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
