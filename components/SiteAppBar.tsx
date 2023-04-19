import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const SiteAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FNEBici: Inscrições
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SiteAppBar;