import { SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Field from "./Field";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SectionTabs = ({ record }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    record && (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Curadoria" {...a11yProps(0)} />
            <Tab label="Hospedagem" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Field
              label={"Você deseja FORNECER alguma atividade no FNEBici?"}
              value={record.atividade}
            />
          </Grid>
          <Grid container spacing={2}>
            <Field
              label={
                "Você tem alguma sugestão do que gostaria de VER nesta edição do FNEBici?"
              }
              value={record.sugestao}
            />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {record.hospedagem === "Sim" && (
            <Grid container justifyContent="space-between" spacing={2}>
              <Field
                label={"Necessita de hospedagem solidária?"}
                value={record.hospedagem}
              />
              <Field label={"Precisa de bicicleta?"} value={record.bicicleta} />
              <Field
                label={"Você vem junto com mais alguém?"}
                value={record.maisAlguem}
              />
              <Field
                label={
                  "Você aceita se hospedar em local com animais de estimação?"
                }
                value={record.animais}
              />
              <Field
                label={"Você tem objeção em dividir quarto com algum gênero?"}
                value={record.genero}
              />
              <Field
                label={"Considerações adicionais"}
                value={record.consideracoes}
              />
            </Grid>
          )}
          {record.hospedagem !== "Sim" && <Typography variant="h6">Respondeu NÃO ou deixou em branco</Typography>}
        </TabPanel>
      </Box>
    )
  );
};

export default SectionTabs;
