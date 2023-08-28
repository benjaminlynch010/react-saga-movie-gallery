
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import IconButton  from '@mui/material/IconButton';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  

  const handleClick = () => {
    console.log('TODO : Fix button')
    // can't use history.push, don't know why
    // history.push('/')
  }
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton sx={{ mr: 2 }} onClick={handleClick}>
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          My Movie List
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
