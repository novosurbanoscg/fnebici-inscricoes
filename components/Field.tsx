import { Grid, Typography } from "@mui/material";

type FieldProps = {
  label: string;
  value: string;
};

const Field = (props: FieldProps) => {
  const { label, value }  = props;
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
