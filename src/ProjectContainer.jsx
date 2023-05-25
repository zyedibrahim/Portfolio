import { Box, Button, Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export function ProjectContainer({ darks }) {
  const ProjectArray = [
    {
      project_img:
        "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6461f35556d1eb0008b4f58e/screenshot_2023-05-15-08-55-34-0000.png ",
      projectName: "Grocery Store",
      description:
        "This is Grocery store online mart using function like login Forgot PlacingOrder etc...",
      projectlink: "https://grocery-item-catalog.netlify.app",
      gitlinks: "https://github.com/zyedibrahim/itemcatalog",
    },
  ];
  const ProjectDescrib = [
    {
      projectName: "Grocery Store",
      description:
        "Grocery Store Project FramWork Reactjs,Nodesjs,Express,MongoDB IUsed For Design Bootsrtrap FunctionalityLoign,Logout,ForgotPassword is Send Otp to Mail & when we CreateAccount It Send Verification Otp To Mail And Verfiy And i Include Admin Access To Create Delete Edit Products And We Can How Many User Are Created And Placing Order etc..",
    },
  ];

  return (
    <Box
      sx={{
        marginTop: "150px",
        marginBottom: "100px",
      }}
    >
      <Container
        sx={{
          marginBottom: "70px",

          paddingTop: "20px",
          paddingBottom: "60px",
          borderBottom: "1px solid rgb(143, 142, 139) ",
        }}
        className="Project_headCon"
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          container
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "center" },
              marginBottom: { xs: "20px" },
            }}
            xs={10}
            sm={10}
            md={4}
            item
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              component="div"
            >
              <Box>
                <Box
                  sx={{
                    fontFamily: "verdana",
                    fontSize: "60px",
                  }}
                  component="div"
                >
                  My Project
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <KeyboardDoubleArrowDownIcon sx={{ fontSize: "90px" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid sx={{}} sm={10} md={8} xs={10} item>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: "450px",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="img"
              >
                <img
                  style={{
                    width: "100%",
                    boxShadow: "2px 2px 10px rgb(143, 142, 139)",
                  }}
                  src="	https://www.adhamdannaway.com/wp-content/themes/dannaway/images/adham-dannaway-design-portfolio.jpg"
                  alt="img-pro"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ marginBottom: "30px" }} className="card_project">
        <Box
          fontSize="35px"
          fontFamily="verdana"
          textAlign={"center"}
          component="div"
          marginBottom="30px"
        >
          <Box
            sx={{
              borderBottom: "1px solid rgb(143, 142, 139)",
              paddingBottom: "7px",
            }}
            component="span"
          >
            what they’re looking for..
          </Box>
        </Box>
        <Box sm={{ marginBottom: { sm: "20px" } }}>
          <Grid
            sx={{
              justifyContent: {
                xs: "center",
                sm: "flex-start",
                lg: "flex-start",
              },
            }}
            container
          >
            {ProjectArray.map((ele, index) => (
              <Grid
                lg={4}
                sm={6}
                xs={10}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
                item
              >
                <a href={ele.projectlink} target="_blank">
                  <Card
                    sx={{
                      width: "300px",
                      boxShadow: `${
                        darks === "dark" ? "" : "1px 1px 8px rgb(143, 142, 139)"
                      }`,
                      // boxShadow: "1px 1px 8px rgb(143, 142, 139)",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6461f35556d1eb0008b4f58e/screenshot_2023-05-15-08-55-34-0000.png"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {ele.projectName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {ele.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a href={ele.gitlinks} target="_blank">
                        <Button size="small" color="primary">
                          <Box>
                            <i
                              className="fa-brands fa-github"
                              style={{ color: "#333c4d", fontSize: "30px" }}
                            ></i>
                          </Box>
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container sx={{ marginBottom: "30px" }} maxWidth="sm">
        <Box sx={{ borderBottom: "1px solid rgb(143, 142, 139)" }}>
          <Typography
            fontSize="35px"
            fontFamily="verdana"
            textAlign={"center"}
            component="div"
            marginBottom="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: "50px" }} /> Project
            Description{" "}
            <KeyboardDoubleArrowLeftIcon sx={{ fontSize: "50px" }} />
          </Typography>
        </Box>
      </Container>
      <Container>
        <Card>
          {ProjectDescrib.map((ele, index) => (
            <Box
              sx={{
                boxShadow: `${
                  darks === "dark" ? "" : "1px 1px 5px rgb(143, 142, 139)"
                }`,
                // boxShadow: "1px 1px 5px rgb(143, 142, 139)",
                marginTop: "30px",
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ padding: "20px" }}>
                  <Typography marginBottom="10px" variant="h3">
                    {index + 1}. {ele.projectName}
                  </Typography>
                  <Typography sx={{ fontSize: "20px", fontFamily: "verdana" }}>
                    {ele.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Card>
      </Container>
    </Box>
  );
}
