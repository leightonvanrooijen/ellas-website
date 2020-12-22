import React from "react";
import MobileDrawer from "./MobileDrawer";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/BallsDeepBarLogo.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    
  },
  toolBar: {
    justifyContent: "center",
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    maxWidth: "1150px",
    alignItems: 'center'
  },
  title: {
    marginRight: "auto",
    height: "50px",
    alignSelf: "center",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 2,
  });
}

export default function WebAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="#ffffff" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <div className={classes.contentContainer}>
              <Button className={classes.title} component={Link} to={"/"}>
                {/* <Typography className={classes.title} variant="h4">
                  Balls Deep
                </Typography> */}
                <img className={classes.title} alt="logo" src={Logo} />
              </Button>
              <MobileDrawer />
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
