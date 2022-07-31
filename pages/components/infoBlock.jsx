import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const InfoBlock = ({ theme }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: 365,
            paddingTop: 8,
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#1f8dd6" }}
          >
            ¿QUIENES SOMOS?
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            Somos el mejor equipo terapéutico idoneo del eje cafetero con un
            gran engrama de compromiso y responsabilidad, un alto propósito de
            ofrecer servicios de rehabilitación integral y neurodesarrollo.
          </Typography>
        </Paper>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: 365,
            paddingTop: 8,
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#1f8dd6" }}
          >
            MISIÓN
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            Prestar un servicio de rehabilitación interdisciplinar que permita
            favorecer la condición neuromuscular, comunicativa, ocupacional,
            basados en un modelo integral de salud, con evidencia científica y
            nuevas técnicas aplicadas con ética, responsabilidad, seguridad.
            Promoviendo la condición de funcionalidad y participación de
            nuestros usuarios.
          </Typography>
        </Paper>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: 365,
            paddingTop: 8,
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#1f8dd6" }}
          >
            VISIÓN
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            La visión de NEUROPLASTICITY es ser un equipo privada de primera
            elección por parte de los pacientes y de los médicos de las
            diferentes disciplinas de la Medicina, proyectando en nosotros el
            camino correcto de un servicio que abarque necesidades desde el
            neurodesarrollo y Neurorehabilitación integral y de esta manera
            Hacer llegar nuestro modelo de atención y filosofía de servicio al
            mayor número de personas en todo el departamento de Caldas.
          </Typography>
        </Paper>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: 365,
            paddingTop: 8,
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#1f8dd6" }}
          >
            VALORES
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            Estamos convencidos que nuestro principal valor está en nuestro
            personal humano: Fisioterapeuta, Terapeuta Ocupacional y
            Fonoaudiología, conformando todo un equipo multidisciplinario, en
            constante capacitación, a la vanguardia en neurociencias aplicadas,
            nos destacamos por nuestra dedicación, compromiso y amor por nuestra
            labor, buscando siempre el mejor beneficio para nuestros usuarios.
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

/*
const DoctorsBlock = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 345, paddingTop: 8 }}>
          <CardMedia
            component="img"
            image="https://previews.123rf.com/images/stocking/stocking1304/stocking130400160/19094243-retrato-de-un-joven-apuesto-m%C3%A9dico.jpg"
            alt="green iguana"
            sx={{
              margin: "0 auto",
              width: 200,
              height: 250,
              objectFit: "cover",
              objectPosition: "0 0",
              borderRadius: "50%",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: "center", color: "#1f8dd6" }}
            >
              Roger Alexis Peña Suarez
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", textJustify: "inter-word" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 345, paddingTop: 8 }}>
          <CardMedia
            component="img"
            image="https://i.pinimg.com/736x/1a/ac/b7/1aacb718f4086c68ed9c47cd26a2b032.jpg"
            alt="green iguana"
            sx={{
              margin: "0 auto",
              width: 200,
              height: 250,
              objectFit: "cover",
              objectPosition: "0 0",
              borderRadius: "50%",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: "center", color: "#1f8dd6" }}
            >
              Liliana Vargas Sanguino
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", textJustify: "inter-word" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 345, paddingTop: 8 }}>
          <CardMedia
            component="img"
            image="https://thumbs.dreamstime.com/b/medical-people-young-asian-doctor-woman-female-smiling-portrait-multiracial-caucasian-32319194.jpg"
            alt="green iguana"
            sx={{
              margin: "0 auto",
              width: 200,
              height: 250,
              objectFit: "cover",
              objectPosition: "0 0",
              borderRadius: "50%",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: "center", color: "#1f8dd6" }}
            >
              Luz Edith Almanza Castillo
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", textJustify: "inter-word" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
*/

export default InfoBlock;
