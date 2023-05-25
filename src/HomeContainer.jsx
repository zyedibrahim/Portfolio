import { Container, Box, Grid, Fab, Typography, Button } from "@mui/material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
export function HomeContainer({ darks }) {
  const logo_name = [
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      name: "Node",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "Mongo DB",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      name: "Vs Code",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "Html",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "Js",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: "Bootstrap",
    },
    {
      logo: "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo-thumbnail.png",
      name: "Mui",
    },

    {
      logo: "https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png",
      name: "Github",
    },
  ];

  const backgroundImageUrl =
    "url(https://images.unsplash.com/photo-1563268381-06ddf2b1f46d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80)";
  const StyledImage = styled("img")({
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "50%",
  });

  return (
    <Box sx={{ marginBottom: "70px" }}>
      <Box
        sx={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          padding: "1px",
          marginBottom: "20px",
        }}
      >
        <Container
          sx={{
            backgroundColor: "none",
            marginTop: "100px",
            display: "flex",
            justifyContent: { md: "center" },
          }}
        >
          <Box>
            <Grid
              sx={{
                display: "flex",
                justifyContent: { xs: "center" },
              }}
              container
            >
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: { xs: "20px" },
                }}
                md={6}
                sm={6}
                xs={10}
                item
              >
                <Grid
                  sx={{
                    backgroundColor: "none",
                    textAlign: { xs: "center", sm: "start" },
                    display: "flex",
                    justifyContent: {
                      md: "center",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                  container
                >
                  <Grid
                    sx={{
                      sm: {
                        display: "flex",
                        justifyContent: "center",
                      },
                    }}
                    item
                    xs={10}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Typography sx={{ color: "white" }} variant="h4">
                        Hi I Am Syed Ibrahim
                      </Typography>
                      <Typography
                        sx={{ color: "white" }}
                        letterSpacing={1}
                        variant="h5"
                      >
                        Mern Stack Developer
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          color: "rgb(181, 170, 170)",
                        }}
                      >
                        <Typography letterSpacing={1} variant="small">
                          I Design And Develop Experience
                        </Typography>
                        <Typography letterSpacing={1} variant="small">
                          That Make People Lives Simple
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                    item
                    xs={10}
                  >
                    <Box
                      className="Btn-con"
                      sx={{
                        display: "flex",
                        jusitifyContent: "center",
                        gap: "20px",
                      }}
                    >
                      <Fab
                        component={Link}
                        to="/contact"
                        sx={{
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          paddingRight: "25px",
                          paddingLeft: "25px",
                          backgroundColor: `${
                            darks === "dark" ? "#ffa8a8" : "hsl( 39 ,65%,50%)"
                          }`,
                          color: `${darks === "dark" ? "#3c1b1f" : "white"}`,
                          "&:hover": {
                            backgroundColor: "#ffa8a8",
                            color: "black",
                          },
                        }}
                        variant="extended"
                        aria-label="Contact"
                      >
                        Contact
                      </Fab>
                      <a
                        target="_blank"
                        href="https://res.cloudinary.com/dn5tp3zjf/raw/upload/v1684999214/my_resume_syed_sgp_eac4fz.docx"
                      >
                        <Fab
                          sx={{
                            paddingTop: "20px",
                            paddingBottom: "20px",
                            paddingRight: "25px",
                            paddingLeft: "25px",
                            backgroundColor: `${
                              darks === "dark" ? "#ffa8a8" : "hsl( 39 ,65%,50%)"
                            }`,
                            color: `${darks === "dark" ? "#3c1b1f" : "white"}`,
                            "&:hover": {
                              backgroundColor: "#ffa8a8",
                              color: "black",
                            },
                          }}
                          variant="extended"
                          aria-label="Resume"
                        >
                          Resume
                        </Fab>
                      </a>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid md={6} sm={6} xs={10} item>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box position="relative" display="inline-block">
                    <StyledImage
                      src="https://res.cloudinary.com/dn5tp3zjf/image/upload/v1684404914/images/myimg_zwv0bi.jpg"
                      alt="Your Image"
                    />

                    {/* Black shade overlay */}
                    <Box
                      position="absolute"
                      sx={{
                        borderRadius: "50%",
                      }}
                      top={-4}
                      left={0}
                      width="100%"
                      height="100%"
                      bgcolor="rgba(0, 0, 0, 0.5)"
                    ></Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" className="skill_heading">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "45px",
              fontWeight: "500",
            }}
          >
            Skills & Tools
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "400",
            }}
          >
            For those who know what they’re looking for..
          </Typography>
        </Box>

        <Box className="Logo_con">
          <Grid container justifyContent="center">
            {logo_name.map((ele, index) => (
              <Grid md={3} xs={4} key={index} item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: { xs: "30px" },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: "70px",
                        height: "70px",
                        marginBottom: { xs: "5px" },
                      }}
                    >
                      <img
                        style={{
                          width: "70px",
                          height: "70px",
                          marginBottom: { xs: "5px" },
                        }}
                        src={ele.logo}
                        alt={ele.name}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {ele.name}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ marginBottom: "25px" }}>
        <Box textAlign="center">
          <Typography
            sx={{
              fontSize: "45px",
              fontWeight: "400",
              borderBottom: "1px solid rgb(143, 142, 139)",
            }}
          >
            About Me
          </Typography>
        </Box>

        <Box
          sx={{
            // backgroundColor: "red",
            padding: "20px",
          }}
        >
          <Grid sx={{ justifyContent: "center" }} container>
            <Grid
              sx={{
                marginBottom: "20px",
                // backgroundColor: "yellow",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              md={6}
              sm={10}
              xs={10}
              item
            >
              <Box
                sx={{
                  width: "100%",
                  // background: "pink",

                  backgroundColor: { sm: "white ", md: "transparent" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { sm: "center", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    // display: "flex",
                    // alignItems: "center",
                    backgroundColor: "white",
                    marginTop: "0px",
                    padding: "8px",
                    // boxShadow: `${
                    //   darks === "light" ? "2px 2px 20px rgb(143, 142, 139)" : ""
                    // }`,
                    // boxShadow: "2px 2px 20px rgb(143, 142, 139)",
                  }}
                >
                  <img
                    sx={{ width: { xs: "100%" } }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgtGrnhTIGY_jg4pAO2sV5LdFQYsj6Eqs8ShnyEnU5Dax5KZe43RNwIBkRH6NIDVuXcM&usqp=CAU"
                    alt="guvimg"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid md={6} sm={10} xs={10} item>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    textAlign: "start",
                    fontSize: "20px",
                    fontFamily: "verdana",
                  }}
                  variant="h6"
                >
                  guvi is an online platform to learn Tech Related Course So i
                  Join For Learn MongoDB,Expressjs,Reactjs,Nodejs Mern FullStack
                  Developer Course & Course Duration Time (6-7) Months Now i
                  Finished Mern Stack Developer With Valid Cerification
                  Authorized By Guvi Geek Network And i Done Some Project Its In
                  the Project Page{" "}
                  <a
                    href="#"
                    style={{
                      color: "blue",
                      borderBottom: "1px solid blue",
                      hover: "white",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "white";
                      e.target.style.backgroundColor = "blue";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "blue";
                      e.target.style.backgroundColor = "transparent";
                    }}
                  >
                    Projects
                  </a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
