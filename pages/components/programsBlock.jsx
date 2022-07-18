import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PoolIcon from "@mui/icons-material/Pool";
import SpatialAudioIcon from "@mui/icons-material/SpatialAudio";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import AddIcon from "@mui/icons-material/Add";

const ProgramsBlock = ({ theme }) => {
  return (
    <>
      <Grid item xs={12} sx={{ backgroundColor: "#E6FAD7" }}>
        <Grid
          container
          spacing={0}
          sx={{
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid
            item
            md={12}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50%",
              paddingTop: '32px',
              paddingBottom: '32px',
            }}
          >
            <Paper
              elevation={5}
              sx={{
                width: "400px",
                padding: "48px",
                textAlign: "center",
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
                Programas
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
                Conoce los distintos servicios que tenemos para ti.
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              >
                ¿No sabes que programa necesitas?
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  maxWidth: "max-content",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginBottom: "32px",
                }}
              >
                Comunicate con nosotros y con gusto te asesoraremos.
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
                Contactanos
              </Button>
            </Paper>
          </Grid>
          <Grid
            item
            md={12}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50%",
              paddingTop: '32px',
              paddingBottom: '32px',
            }}
          >
            <Paper
              elevation={5}
              sx={{
                width: "400px",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <PoolIcon
                sx={{
                  fontSize: "34px",
                  marginBottom: "24px",
                }}
              />
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "32px",
                }}
              >
                Fisioterapia
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  maxWidth: "max-content",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginBottom: "32px",
                }}
              >
                Conoce los distintos servicios que tenemos para ti.
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<AddIcon />}
                sx={{
                  backgroundColor: "#7E9ABF",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              >
                Saber mas
              </Button>
            </Paper>
          </Grid>
          <Grid
            item
            md={12}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50%",
              paddingTop: '32px',
              paddingBottom: '32px',
            }}
          >
            <Paper
              elevation={5}
              sx={{
                width: "400px",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <SportsGymnasticsIcon
                sx={{
                  fontSize: "34px",
                  marginBottom: "24px",
                }}
              />
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "32px",
                }}
              >
                Terapia Ocupacional
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  maxWidth: "max-content",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginBottom: "32px",
                }}
              >
                Conoce los distintos servicios que tenemos para ti.
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<AddIcon />}
                sx={{
                  backgroundColor: "#F2C166",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              >
                Saber mas
              </Button>
            </Paper>
          </Grid>
          <Grid
            item
            md={12}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50%",
              paddingTop: '32px',
              paddingBottom: '32px',
            }}
          >
            <Paper
              elevation={5}
              sx={{
                width: "400px",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <SpatialAudioIcon
                sx={{
                  fontSize: "34px",
                  marginBottom: "24px",
                }}
              />
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
                  marginBottom: "32px",
                }}
              >
                Conoce los distintos servicios que tenemos para ti.
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<AddIcon />}
                sx={{
                  backgroundColor: "#D98982",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              >
                Saber mas
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProgramsBlock;
