import { Box, Fab, Container, useTheme, Typography, Grid } from "@mui/material";

export function FooterCon({ darks }) {
  const theme = useTheme();
  const handleButtonClick = () => {
    const email = "zyedibrahim77@gmail.com"; // Replace with your Gmail account

    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      email
    )}`;

    window.open(url);
  };
  return (
    <Box
      sx={{
        position: "relative",
        top: "20px",

        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        borderTop: "1px light black",
        color: "white",

        backgroundColor: `${darks === "dark" ? "dark" : "#3c1b1f"}`,

        boxShadow: ` ${
          darks === "light" ? "0px 0px 2px  black" : "0px 0px 2px white"
        }`,
      }}
    >
      <Container sx={{ marginBottom: "40px", marginTop: "40px" }} maxWidth="md">
        <Box
          sx={{
            marginBottom: "20px",
          }}
        >
          <Grid justifyContent="center" alignItems="end" container>
            <Grid
              sx={{
                marginBottom: {
                  xs: "20px",
                  display: "flex",
                  justifyContent: "center",
                },
              }}
              item
              sm={6}
              xs={10}
            >
              <Box>
                <Box
                  sx={{
                    marginBottom: "6px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "25px",
                      fontWeight: "600",
                      fontFamily: "roboto",
                    }}
                  >
                    I Am Currently Availabel For Work
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginBottom: "6px",
                  }}
                >
                  <Fab
                    sx={{
                      padding: "20px,40px,20px,40px",
                      "&:hover": {
                        backgroundColor: "hsl( 39 ,65%,50%)",
                        color: "black",
                      },
                      backgroundColor: "hsl( 39 ,65%,50%)",
                      color: "white",
                    }}
                    aria-label="Message sent"
                    variant="extended"
                    onClick={() => handleButtonClick()}
                  >
                    Send A Message
                  </Fab>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6} xs={10}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "start", md: "end" },
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    className="icon-gap"
                    sx={{ display: "flex", gap: "7px" }}
                  >
                    <Box>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        style={{ textDecoration: "underline" }}
                        href="https://github.com/zyedibrahim"
                      >
                        <i
                          className="fa-brands fa-github"
                          style={{ color: "#333c4d", fontSize: "30px" }}
                        ></i>
                      </a>
                    </Box>
                    <Box>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        style={{ textDecoration: "underline" }}
                        href="https://www.linkedin.com/in/syed-ibrahim-64a3a6234/?originalSubdomain=in"
                      >
                        <i
                          className="fa-brands fa-linkedin"
                          style={{ color: "#3a69bb", fontSize: "30px" }}
                        ></i>
                      </a>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      fontWeight: "400",
                      fontFamily: "roboto",
                      display: "flex",
                      justifyContent: { xs: "start", md: "end" },
                    }}
                  >
                    Zyedibrahim77@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
