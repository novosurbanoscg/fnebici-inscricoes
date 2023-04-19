import { Grid, Typography } from "@mui/material";

const Field = ({ label, value }) => {
  return (
    <Grid item>
      <Typography variant="subtitle2">{label}</Typography>
      <Typography variant="body1" pb={3}>
        {value}
      </Typography>
    </Grid>
  );
};

export default Field;
