import { Grid, Typography } from "@mui/material";

type TextFieldRawProps = {
  label: string;
  value: string;
};

const TextFieldRaw = (props: TextFieldRawProps) => {
  const { label, value } = props;
  return (
    <>
      <strong>{label}:</strong> {value}
      <br />
    </>
  );
};

export default TextFieldRaw;
