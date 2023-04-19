import { Box, Paper, Typography } from "@mui/material";

const Record = ({ record }) => {
  return (
    record && (
      <Paper elevation={1}>
        <Box p={1}>
          <Typography variant="h6">Nome</Typography>
          <Typography variant="body1">{record.nome}</Typography>
          <Typography variant="h6">E-mail</Typography >
          <Typography variant="body1">{record.email}</Typography>
          <Typography variant="h6">Telefone</Typography >
          <Typography variant="body1">{record.tel}</Typography>
          <Typography variant="h6">Estado</Typography >
          <Typography variant="body1">{record.uf}</Typography>
        </Box>
      </Paper>
    )
  );
};

export default Record;
