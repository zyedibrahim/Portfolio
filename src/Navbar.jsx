import { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  ListSubheader,
} from "@mui/material";
import AnimationIcon from "@mui/icons-material/Animation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Drawer, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Linkarray } from "./App";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import { Link } from "react-router-dom";
export function Navbar({ Setdarks, darks }) {
  const [values, setvalue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <AppBar
      sx={{
        backgroundColor: `${darks === "dark" ? "dark" : "#3c1b1f"}`,
      }}
    >
      <Toolbar>
        {isMatch ? (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item sm={2}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  letterSpacing={5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <AnimationIcon sm={{ fontSize: "32px" }} />
                  <Box>Syed Ibrahim</Box>
                </Box>
              </Typography>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              item
              sm={6}
            >
              <Tabs
                onChange={(e, val) => {
                  setvalue(val);
                }}
                indicatorColor="secondary"
                textColor="inherit"
                value={values}
              >
                {Linkarray.map((link, index) => (
                  <Tab
                    component={Link}
                    to={`${link.route}`}
                    key={index}
                    label={link.label}
                  />
                ))}
              </Tabs>
            </Grid>
            <Grid sm={1} item></Grid>
            <Grid sm={3} item>
              <Box display="flex">
                <Typography sx={{ marginLeft: "auto" }}>
                  <IconButton
                    onClick={() =>
                      Setdarks(darks === "dark" ? "light" : "dark")
                    }
                  >
                    {darks === "dark" ? (
                      <Brightness7Icon />
                    ) : (
                      <BrightnessLowIcon sx={{ color: "white" }} />
                    )}
                  </IconButton>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <DrawerComp darks={darks} Setdarks={Setdarks} />
        )}
      </Toolbar>
    </AppBar>
  );
}

function DrawerComp({ Setdarks, darks }) {
  const [open, setopen] = useState(false);

  return (
    <>
      <Grid container>
        <Grid item sm={5}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box>
                <AnimationIcon sx={{ fontSize: "32px" }} />
              </Box>
              <Box>Syed</Box>
              <Box>Ibrahim</Box>
            </Box>
          </Typography>
        </Grid>
      </Grid>

      <IconButton onClick={() => setopen(!open)} sx={{ marginLeft: "auto" }}>
        <MenuRoundedIcon sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: `${darks === "dark" ? "dark" : "#3c1b1f"}` },
        }}
        open={open}
        onClose={() => setopen(false)}
      >
        <List
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                display: "flex",

                backgroundColor: `${
                  darks === "dark" ? "rgb(53,53,53)" : "#3c1b1f"
                }`,
                justifyContent: "start",
                borderBottom: "1px solid #AFA79F",
              }}
            >
              <Typography
                sx={{
                  marginTop: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                  padding: "7px",
                }}
              >
                <AnimationIcon
                  style={{ color: "white" }}
                  sx={{ fontSize: "32px" }}
                />
                <Box sx={{ color: "white" }}>Syed</Box>
                <Box display="flex">
                  <Typography sx={{ marginLeft: "auto" }}>
                    <IconButton
                      onClick={() =>
                        Setdarks(darks === "dark" ? "light" : "dark")
                      }
                    >
                      {darks === "dark" ? (
                        <Brightness7Icon />
                      ) : (
                        <BrightnessLowIcon sx={{ color: "white" }} />
                      )}
                    </IconButton>
                  </Typography>
                </Box>
              </Typography>
            </ListSubheader>
          }
          sx={{ width: "100%", maxWidth: 360 }}
          component="nav"
        >
          {Linkarray.map((ele, index) => (
            <ListItemButton
              onClick={() => setopen(false)}
              component={Link}
              to={`${ele.route}`}
              key={index}
            >
              <ListItemIcon>
                <ListItemIcon>
                  {ele.logoicon}
                  {/* <CottageIcon style={{ color: "white" }} /> */}
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={ele.label} />
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
