import * as React from "react";
import Grid from "@mui/material/Grid";
import PostIt, { Title, Body } from "./styledComponents/postIt";
import PhotoPaper from "./styledComponents/photoPaper";
import GridItem from "./styledComponents/gridItem";

const TeamBlock = (props) => {
  return (
    <>
      <Grid container item xs={12} {...props}>
        <GridItem item md={12} lg={6} backgroundColor="#93CFD9">
          <PostIt elevation={3}>
            <Title variant="h4" component="div">
              ¿Quienes somos?
            </Title>
            <Body variant="h6" component="div">
              Somos el mejor equipo terapéutico idoneo del eje cafetero con un
              gran engrama de compromiso y responsabilidad, un alto propósito de
              ofrecer servicios de rehabilitación integral y neurodesarrollo.
            </Body>
          </PostIt>
        </GridItem>
        <GridItem item md={12} lg={6}>
          <PhotoPaper
            elevation={5}
            url="/images/team-no-border.png"
            border="#93CFD9"
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default TeamBlock;
