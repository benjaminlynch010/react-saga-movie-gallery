import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Copyright from "./Copyright"

function Footer() {
  return (
    <Container>
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Fin
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Special Thanks to the Real Ones of Iolite
        <br></br>
        And to the staff at Prime Academy
      </Typography>
      <Copyright />
    </Box>
  </Container>
  )
}

export default Footer