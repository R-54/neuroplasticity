import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const DoctorLeftBlock = ({ theme }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            md={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFD6D2",
              height: "100vh",
              width: "100%",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: "450px",
                padding: "48px",
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
                Fonoaudiologia
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  maxWidth: "max-content",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginBottom: "24px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<WhatsAppIcon />}
                sx={{
                  backgroundColor: "#D98982",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              >
                Agendar una cita
              </Button>
            </Paper>
          </Grid>
          <Grid
            item
            md={12}
            lg={6}
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100%",
            }}
          >
            <Paper
              elevation={5}
              sx={{
                width: "500px",
                height: "700px",
                padding: "48px",
                textAlign: "center",
                backgroundImage: "url(/images/doctor-2.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 0",
                borderRadius: "40px",
                border: "solid #FFD6D2 8px",
                [theme.breakpoints.between("xs", "sm")]: {
                  width: "300px",
                  height: "400px",
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DoctorLeftBlock;
