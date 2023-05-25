import { Container } from "@mui/material";
import { Box, Typography, Grid } from "@mui/material";
//
export function Contacts({ darks }) {
  return (
    <Box sx={{ marginTop: "80px" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        maxWidth="md"
      >
        <Grid sx={{ justifyContent: "center" }} container>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              // backgroundColor: "red",
              textAlign: "center",
            }}
            md={6}
            xs={12}
            item
          >
            <Box>
              <Typography
                sx={{ textAlign: { xs: "center", md: "start" } }}
                variant="h2"
              >
                Get in Touch
              </Typography>
              <Typography
                sx={{ textAlign: { xs: "center", md: "start" } }}
                variant="h4"
              >
                Contact me
              </Typography>
            </Box>
          </Grid>
          <Grid md={6} xs={12} item>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                className="name-con"
                sx={{
                  display: "flex",

                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "0px",
                }}
              >
                <Box sx={{ fontSize: "60px", fontWeight: "600" }}>Seyed</Box>
                <Box sx={{ fontSize: "60px", fontWeight: "300" }}> Ibrahim</Box>
              </Box>

              <Box sx={{ padding: "20px" }}>
                <Box sx={{ marginBottom: "15px", fontSize: "20px" }}>
                  Find Me On :-
                </Box>

                <Box
                  sx={{
                    padding: "40px 0px 40px 30px",
                    color: "black",
                    backgroundColor: `${
                      darks === "dark" ? "rgb(30,30,25)" : "#AFA79F"
                    }`,
                  }}
                >
                  <Box display="flex" gap={2} justifyContent="start">
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <i
                        className="fa-brands fa-square-github"
                        style={{
                          color: `${darks === "dark" ? "white" : "black"}`,
                          fontSize: "30px",
                        }}
                      ></i>
                    </Box>
                    <Box sx={{ fontSize: "25px" }}>
                      <a
                        href="https://github.com/zyedibrahim"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          color: `${darks === "dark" ? "white" : "black"}`,
                        }}
                      >
                        zyedibrahim
                      </a>
                    </Box>
                  </Box>
                  <Box display="flex" gap={2} justifyContent="start">
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <i
                        className="fa-brands fa-instagram"
                        style={{ color: "rgb(214,41,118)", fontSize: "30px" }}
                      ></i>
                    </Box>
                    <Box sx={{ fontSize: "25px" }}>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/zyed_ibrahim/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          color: `${darks === "dark" ? "white" : "black"}`,
                        }}
                      >
                        zyed_ibrahim
                      </a>
                    </Box>
                  </Box>
                  <Box display="flex" gap={2} justifyContent="start">
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <i
                        className="fa-brands fa-square-twitter"
                        style={{ color: "#3066c5", fontSize: "30px" }}
                      ></i>
                    </Box>
                    <Box sx={{ fontSize: "25px" }}>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/zyed_ibrahim?s=09"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          color: `${darks === "dark" ? "white" : "black"}`,
                        }}
                      >
                        zyed_ibrahim
                      </a>
                    </Box>
                  </Box>
                  <Box display="flex" gap={2} justifyContent="start">
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <i
                        className="fa-brands fa-linkedin"
                        style={{ color: "#4884ea", fontSize: "30px" }}
                      ></i>
                    </Box>
                    <Box sx={{ fontSize: "25px" }}>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/syed-ibrahim-64a3a6234/?originalSubdomain=in"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          color: `${darks === "dark" ? "white" : "black"}`,
                        }}
                      >
                        syed-ibrahim
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
