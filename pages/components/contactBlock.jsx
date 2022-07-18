import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const ContactBlock = ({ theme }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          height: "100vh",
        }}
      >
        <Grid container spacing={0} sx={{ minHeight: "100%" }}>
          <Grid
            item
            md={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#93cfd9",
              width: "100%",
              height: "100vh",
              [theme.breakpoints.between("xs", "md")]: {
                height: "50vh",
              },
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                marginBottom: "32px",
                color: "white",
              }}
            >
              Tambien nos puedes contactar por email
            </Typography>
            <Paper
              elevation={3}
              sx={{
                width: "400px",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <TextField
                label="Nombre completo"
                sx={{ marginBottom: "24px" }}
              />
              <TextField label="Email" sx={{ marginBottom: "24px" }} />
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Mensaje"
                minRows={10}
                style={{ width: "100%" }}
              />
              <Button
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                sx={{
                  fontWeight: "bold",
                  borderRadius: "40px",
                  marginTop: "24px",
                }}
              >
                Enviar
              </Button>
            </Paper>
          </Grid>
          <Grid
            item
            md={12}
            lg={6}
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#ff735c",
              color: "white",
              width: "100%",
              height: "100vh",
              [theme.breakpoints.between("xs", "md")]: {
                height: "50vh",
              },
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: "bold",
                marginBottom: "32px",
              }}
            >
              Siguenos en nuestras redes
            </Typography>
            <Box>
              <YouTubeIcon sx={{ fontSize: "52px", marginRight: "32px" }} />
              <InstagramIcon sx={{ fontSize: "52px", marginRight: "32px" }} />
              <FacebookIcon sx={{ fontSize: "52px", marginRight: "32px" }} />
              <WhatsAppIcon sx={{ fontSize: "52px", marginRight: "32px" }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactBlock;
