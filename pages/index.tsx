import { GetServerSideProps } from "next";
import { Container } from "@mui/material";

import SelectRecord from "../components/SelectRecord";
import SiteAppBar from "../components/SiteAppBar";
import Record from "../types/Record";

type HomeProps = {
  records: Record[];
}

const Home = ({ records }: HomeProps) => {
  return (
    <>
      <SiteAppBar />
      <main>
        <Container>
          <SelectRecord records={records} />
        </Container>
      </main>
    </>
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
    .then((res: Record[]) => {
      return res;
    });

  return {
    props: {
      records: result.sort((a, b) => a.nome.localeCompare(b.nome)),
    },
  };
};
