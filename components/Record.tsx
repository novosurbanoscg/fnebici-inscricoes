import { useState } from "react";
import { Box, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import SectionTabs from "./SectionTabs";
import Field from "./Field";

const Record = ({ record }) => {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    record && (
      <>
        <Paper elevation={1}>
          <Box pt={3} px={3}>
            <Grid container justifyContent="space-between" spacing={2}>
              <Field label={"Nome"} value={record.nome} />
              <Field label={"E-mail"} value={record.email} />
              <Field label={"Telefone"} value={record.tel} />
              <Field label={"Estado"} value={record.uf} />
              <Field label={"Cidade"} value={record.cidade} />
            </Grid>
          </Box>
        </Paper>
        <Box mt={3}>
          <Paper>
            <SectionTabs record={record} />
          </Paper>
        </Box>
      </>
    )
  );
};

export default Record;
