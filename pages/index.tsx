import { GetServerSideProps } from "next";
import { Container, Typography } from "@mui/material";

import SelectRecord from "../components/SelectRecord";

const Home = ({ records }) => {
  return (
    <main>
      <Container>
        <Typography variant="h2">FNEBici: Inscrições</Typography>
        <SelectRecord records={records} />
      </Container>
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch(`${process.env.API_BASE_URL}/data`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      records: result.sort((a, b) => a.nome.localeCompare(b.nome)),
    },
  };
};
