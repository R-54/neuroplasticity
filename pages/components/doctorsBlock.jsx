import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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

export default DoctorsBlock;
