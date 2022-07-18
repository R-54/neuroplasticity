import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const TeamBlock = ({ theme }) => {
  return (
    <>
      <Grid container item xs={12}>
        <Grid
          item
          md={12}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFF7C9",
            height: "100vh",
            width: "100%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "450px",
              padding: "48px",
              [theme.breakpoints.between("xs", "sm")]: {
                width: "300px",
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
              ¿Quienes somos?
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                maxWidth: "max-content",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              Somos el mejor equipo terapéutico idoneo del eje cafetero con un
              gran engrama de compromiso y responsabilidad, un alto propósito de
              ofrecer servicios de rehabilitación integral y neurodesarrollo.
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          md={12}
          lg={6}
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevatiom={5}
            sx={{
              backgroundImage: "url(/images/team-no-border.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "50% 0",
              width: "500px",
              height: "700px",
              border: "solid #FFF7C9 8px",
              [theme.breakpoints.between("xs", "sm")]: {
                width: "300px",
                height: "400px",
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TeamBlock;
