import "./App.css";
import CottageIcon from "@mui/icons-material/Cottage";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
export const Linkarray = [
  // updated version
  {
    label: "Home",
    route: "/home",
    logoicon: <CottageIcon sx={{ color: "white" }} />,
  },
  {
    label: "Project",
    route: "/project",
    logoicon: <AccountTreeIcon sx={{ color: "white" }} />,
  },
  {
    label: "Contact",
    route: "/contact",
    logoicon: <ContactsIcon sx={{ color: "white" }} />,
  },
];

import { Navbar } from "./Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { HomeContainer } from "./HomeContainer";

import { FooterCon } from "./FooterCon";
import { Routes, Route } from "react-router-dom";
import { ProjectContainer } from "./ProjectContainer";
import { Contacts } from "./Contacts";
function App() {
  const [darks, Setdarks] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      // mode: `${darks === "dark" ? "#3c1b1f" : "light"}`,
      mode: darks,
    },
  });

  // const themecon = createTheme({
  //   spacing: (factor) => `${0.5 * factor}rem`, // Custom spacing values (adjust as needed)
  // });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        {" "}
        <Paper elevation={3} />
        <Navbar Setdarks={Setdarks} darks={darks} />
        <Box>
          <Routes>
            <Route path="*" element={<HomeContainer />} />
            <Route path="/" element={<HomeContainer />} />
            <Route path="/home" element={<HomeContainer />} />
            <Route
              path="/project"
              element={<ProjectContainer darks={darks} />}
            />
            <Route path="/contact" element={<Contacts darks={darks} />} />
          </Routes>
          <FooterCon darks={darks} />
        </Box>
        <CssBaseline />
        <Paper />
        <Paper elevation={3} />
      </Box>
    </ThemeProvider>
  );
}
//
// react :	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg
// node: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg
// mongodb:https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg
// vscode:https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg
// html:https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg
// css3:	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg
// js::https://cdn.jsdelivr.net/gh/mui-org/material-ui@master/docs/public/static/logo.svg
// bootsrap:https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg
// maetrial:https://cdn.jsdelivr.net/gh/mui-org/material-ui@master/docs/public/static/logo.svg
// github:	https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F256%2F25%2F25231.png&tbnid=P12DMiIC8KNvzM&vet=12ahUKEwjo5fL6if_-AhWu2XMBHW4sCwEQMygAegUIARDbAQ..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fgithub-logo_25231&docid=kHlC0fHCgyWhTM&w=256&h=256&q=github%20logo&hl=en&ved=2ahUKEwjo5fL6if_-AhWu2XMBHW4sCwEQMygAegUIARDbAQ

export default App;
