import * as React from "react";
import Grid from "@mui/material/Grid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PostIt, { Title, Body } from "./styledComponents/postIt";
import PhotoPaper from "./styledComponents/photoPaper";
import Button from "./styledComponents/button";
import GridItem from "./styledComponents/gridItem";

const DoctorBlock = ({ title, body, url, color, id }) => {
  const styles = {
    gridContainer: {
      minHeight: "100vh",
    },
  };

  return (
    <>
      <Grid container item xs={12} id={id} sx={styles.gridContainer}>
        <GridItem item md={12} lg={6} backgroundColor={color}>
          <PostIt elevation={3}>
            <Title variant="h4" component="div">
              {title}
            </Title>
            <Body gutterBottom variant="h6" component="div">
              {body}
            </Body>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              endIcon={<WhatsAppIcon />}
              onClick={() => {
                window.location.href = "https://wa.me/+573183207016";
              }}
            >
              Agendar cita
            </Button>
          </PostIt>
        </GridItem>
        <GridItem item md={12} lg={6}>
          <PhotoPaper elevation={5} url={url} border={color} />
        </GridItem>
      </Grid>
    </>
  );
};

const DoctorsInfoBlock = () => {
  const doctorData = {
    doctor1: {
      id: 'doctor1',
      title: "Fisioterapia",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      url: "/images/doctor-1.png",
      color: "#93CFD9",
    },
    doctor2: {
      id: 'doctor2',
      title: "Fonoaudiologia",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      url: "/images/doctor-2.png",
      color: "#D1EBF0",
    },
  };
  return (
    <>
      <DoctorBlock {...doctorData.doctor1} />
      <DoctorBlock {...doctorData.doctor2} />
    </>
  );
};

export default DoctorsInfoBlock;
