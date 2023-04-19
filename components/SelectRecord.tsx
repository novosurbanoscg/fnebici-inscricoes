import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Record from "./Record";

const SelectRecord = ({ records }) => {
  const [selectedEmail, setSelectedEmail] = useState(records[0].email);
  const [selectedRecord, setSelectedRecord] = useState(records[0]);

  const handleChange = (event: { target: { value: string } }) => {
    setSelectedEmail(event.target.value);
    const record = records.find(
      (record) => record.email === event.target.value
    );
    setSelectedRecord(record);
  };

  return (
    <>
      <Box py={3}>
        <FormControl>
          <InputLabel id="select-record">Selecionar inscrição</InputLabel>
          <Select
            labelId="select-record"
            id="select-record"
            value={selectedEmail}
            label="Selecionar inscrição"
            onChange={handleChange}
          >
            {records.map((record, i) => (
              <MenuItem
                key={`${record.i}${record.email}`}
                value={record.email}
              >{`${String(i + 1).padStart(3, "0")} - ${record.nome} (${
                record.email
              })`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Record record={selectedRecord} />
    </>
  );
};

export default SelectRecord;
