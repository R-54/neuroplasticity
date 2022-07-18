import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const WelcomeBlock = ({ theme }) => {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        sx={{
          minHeight: "calc(100vh - 64px)",
          width: "100%",
          marginTop: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          [theme.breakpoints.between("xs", "sm")]: {
            minHeight: "calc(100vh - 56px)",
            marginTop: "56px",
          },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            backgroundImage: "url(/images/logo.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "50% 0",
            height: "400px",
            width: "100%",
            [theme.breakpoints.between("xs", "sm")]: {
              height: "300px",
            },
          }}
        />
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          sx={{
            maxWidth: "max-content",
            marginTop: "12px",
            marginBottom: "24px",
          }}
        >
          Rehabilitación neurológica integral
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<WhatsAppIcon />}
          sx={{
            backgroundColor: "#47C756",
            fontWeight: "bold",
            borderRadius: "40px",
          }}
        >
          Agenda una cita ahora
        </Button>
      </Grid>
    </>
  );
};

export default WelcomeBlock;
