import * as React from "react";
import Grid from "@mui/material/Grid";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TextField from "@mui/material/TextField";
import Button from "./styledComponents/button";
import SendIcon from "@mui/icons-material/Send";
import PostIt, { Title } from "./styledComponents/postIt";
import GridItem from "./styledComponents/gridItem";
import SocialMediaBox from "./styledComponents/socialMediaBox";

const ContactBlock = () => {
  const styles = {
    gridContainer: {
      height: "100vh",
    },
    icon: { marginRight: "32px" },
  };
  return (
    <>
      <Grid container item xs={12} sx={styles.gridContainer}>
        <GridItem
          item
          md={12}
          lg={6}
          backgroundColor="#93cfd9"
          direction="column"
        >
          <Title variant="h6" component="div">
            Tambien nos puedes contactar por email
          </Title>
          <PostIt elevation={3}>
            <TextField label="Nombre completo" sx={{ marginBottom: "24px" }} />
            <TextField label="Email" sx={{ marginBottom: "24px" }} />
            <TextField label="Mensaje" sx={{ marginBottom: "24px" }} />
            <Button
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              color="secondary"
            >
              Enviar
            </Button>
          </PostIt>
        </GridItem>
        <GridItem
          item
          md={12}
          lg={6}
          backgroundColor="#ff735c"
          direction="column"
        >
          <Title variant="h4" component="div" color="white">
            Siguenos en nuestras redes
          </Title>
          <SocialMediaBox>
            <YouTubeIcon fontSize="inherit" sx={styles.icon} />
            <InstagramIcon
              fontSize="inherit"
              sx={styles.icon}
              onClick={() => {
                window.location.href =
                  "https://www.instagram.com/neuroplasticit_y/";
              }}
            />
            <FacebookIcon
              fontSize="inherit"
              sx={styles.icon}
              onClick={() => {
                window.location.href =
                  "https://www.facebook.com/neuroplasticit_y/";
              }}
            />
            <WhatsAppIcon
              fontSize="inherit"
              onClick={() => {
                window.location.href = "https://wa.me/+573183207016";
              }}
            />
          </SocialMediaBox>
        </GridItem>
      </Grid>
    </>
  );
};

export default ContactBlock;
