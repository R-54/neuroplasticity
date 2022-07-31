import * as React from "react";
import Button from "./styledComponents/button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Body } from "./styledComponents/postIt";
import Logo from "./styledComponents/logo";
import GridItem from "./styledComponents/gridItem";

const WelcomeBlock = (props) => {
  return (
    <>
      <GridItem container item xs={12} direction="column" {...props}>
        <Logo elevation={0} />
        <Body gutterBottom variant="h6" component="div" pt="12px">
          Rehabilitación neurológica integral
        </Body>
        <Button
          variant="contained"
          size="large"
          endIcon={<WhatsAppIcon />}
          color="secondary"
          onClick={() => {
            window.location.href = "https://wa.me/+573183207016";
          }}
        >
          Agenda una cita ahora
        </Button>
      </GridItem>
    </>
  );
};

export default WelcomeBlock;
