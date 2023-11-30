import { Grid, Typography } from "@mui/material";

type TextFieldProps = {
  label: string;
  value: string;
};

const TextField = (props: TextFieldProps) => {
  const { label, value } = props;
  return (
    <>
      <strong>{label}</strong>
      <br />
      {value}
      <br />
    </>
  );
};

export default TextField;
