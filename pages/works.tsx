import { GetServerSideProps } from "next";
import Record from "../types/Record";
import TextField from "../components/TextField";
import TextFieldRaw from "../components/TextFieldRaw";

type ListProps = {
  records: Record[];
};

const List = ({ records }: ListProps) => {
  return (
    <>
      <h1>FNEBici: Inscrições de trabalhos</h1>
      {records.map((r) => (
        <pre>
          <TextFieldRaw value={r.timestamp} label="Data/hora" />
          <TextFieldRaw value={r.nome} label="Nome" />
          <TextFieldRaw value={r.email} label="Email" />
          <TextFieldRaw value={r.tel} label="Telefone (por favor, informe o DDD)" />
          <TextFieldRaw value={r.uf} label="Estado" />
          <TextFieldRaw value={r.cidade} label="Cidade" />
          <br />
          <TextField value={r.criancas} label="Pensando na programação pras crianças, nos conta aqui: você levará CRIANÇAS para o FNEBici?" />
          <br />
          <TextField value={r.atividade} label="Você deseja FORNECER alguma atividade no FNEBici?" />
          <br />
          {r.sugestao && <TextField value={r.sugestao} label="Você tem alguma sugestão do que gostaria de VER nesta edição do FNEBici?" />}
          <br />
          <hr />
          <br />
          <br />
        </pre>
      ))}
    </>
  );
};

export default List;

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

  const startDate = new Date("2023-04-18T00:00:00.000Z").getTime();
  const endDate = new Date("2023-05-26T23:59:59.999Z").getTime();

  const filtered = result.filter(r => r.atividade).filter(r => {
    const parts = r.timestamp.split(/[\s/:]/);
    const isoString = `${parts[2]}-${parts[1]}-${parts[0]}T${parts[3]}:${parts[4]}:${parts[5]}.000Z`;
    const timestamp = new Date(isoString).getTime();
    return timestamp >= startDate && timestamp <= endDate;
  }).sort((a, b) => a.nome.localeCompare(b.nome));

  return {
    props: {
      records: filtered,
    },
  };
};
