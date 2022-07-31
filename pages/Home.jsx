import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import MenuBar from "./components/menuBar";
import WelcomeBlock from "./components/welcomeBlock";
import TeamBlock from "./components/teamBlock";
import ProgramsBlock from "./components/programsBlock";
import DoctorsInfoBlock from "./components/doctorsInfoBlock";
import ContactBlock from "./components/contactBlock";

const drawerWidth = 240;
const sections = {
  WELCOME_BLOCK: "Inicio",
  TEAM_BLOCK: "Conocenos",
  PROGRAMS_BLOCK: "Programas",
  CONTACT_BLOCK: "Contacto",
};
const navItems = [
  sections.WELCOME_BLOCK,
  sections.TEAM_BLOCK,
  sections.PROGRAMS_BLOCK,
  sections.CONTACT_BLOCK,
];

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#FFFFFF",
      dark: "#002884",
      contrastText: "#000000",
    },
    secondary: {
      light: "#ff7961",
      main: "#ff735c",
      dark: "#ba000d",
      contrastText: "#FFFFFF",
    },
  },
});

theme.typography.h4 = {
  fontSize: "34px",
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "22px",
  },
};

theme.typography.h6 = {
  fontSize: "20px",
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "18px",
  },
};

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
          <WelcomeBlock id={sections.WELCOME_BLOCK} />

          <TeamBlock id={sections.TEAM_BLOCK} />

          <ProgramsBlock id={sections.PROGRAMS_BLOCK} />

          <DoctorsInfoBlock />

          <ContactBlock id={sections.CONTACT_BLOCK} />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
