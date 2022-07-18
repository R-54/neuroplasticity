import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "./styledComponents/button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PoolIcon from "@mui/icons-material/Pool";
import SpatialAudioIcon from "@mui/icons-material/SpatialAudio";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import PostIt, { Title, Body } from "./styledComponents/postIt";
import GridItem from "./styledComponents/gridItem";

const ProgramPostIt = ({ title, body, icon, button }) => {
  return (
    <PostIt elevation={5}>
      {icon}
      <Title variant="h4" component="div">
        {title}
      </Title>
      <Body gutterBottom variant="h6" component="div">
        {body}
      </Body>
      {button}
    </PostIt>
  );
};

const ProgramsBlock = () => {
  const styles = {
    icon: {
      fontSize: "34px",
      marginBottom: "24px",
    },
    gridItem: { backgroundColor: "#D1EBF0", minHeight: "100vh" },
    gridContainer: {
      minHeight: "100vh",
      width: "100%",
      alignItems: "center",
      paddingTop: "52px",
      paddingBottom: "52px",
    },
  };

  const knowMoreButton = (id) => (
    <Button
      variant="contained"
      size="large"
      color="secondary"
      endIcon={<AddIcon />}
      onClick={() => {
        document.getElementById(id).scrollIntoView();
      }}
    >
      Saber mas
    </Button>
  );

  const contactButton = (
    <Button
      variant="contained"
      size="large"
      color="secondary"
      endIcon={<WhatsAppIcon />}
      onClick={() => {
        window.location.href = "https://wa.me/+573183207016";
      }}
    >
      Contactanos
    </Button>
  );

  return (
    <>
      <Grid item xs={12} sx={styles.gridItem}>
        <Grid container rowSpacing={10} sx={styles.gridContainer}>
          <GridItem item md={12} lg={3} height="50%">
            <ProgramPostIt
              title="Programas"
              body="Conoce los distintos servicios que tenemos para ti. ¿No sabes
              que programa necesitas? Comunicate con nosotros y con gusto te
              asesoraremos."
              icon={<CalendarMonthIcon sx={styles.icon} />}
              button={contactButton}
            />
          </GridItem>
          <GridItem item md={12} lg={3} height="50%">
            <ProgramPostIt
              title="Fisioterapia"
              body="Conoce los distintos servicios que tenemos para ti."
              icon={<PoolIcon sx={styles.icon} />}
              button={knowMoreButton("doctor1")}
            />
          </GridItem>
          <GridItem item md={12} lg={3} height="50%">
            <ProgramPostIt
              title="Terapia Ocupacional"
              body="Conoce los distintos servicios que tenemos para ti."
              icon={<SportsGymnasticsIcon sx={styles.icon} />}
              button={knowMoreButton("doctor1")}
            />
          </GridItem>
          <GridItem item md={12} lg={3} height="50%">
            <ProgramPostIt
              title="Fonoaudiologia"
              body="Conoce los distintos servicios que tenemos para ti."
              icon={<SpatialAudioIcon sx={styles.icon} />}
              button={knowMoreButton("doctor2")}
            />
          </GridItem>
        </Grid>
      </Grid>
    </>
  );
};

export default ProgramsBlock;
