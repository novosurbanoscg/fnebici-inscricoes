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
      <h1>FNEBici: Solicitações de hospedagem</h1>
      {records.map((r) => (
        <pre>
          <TextFieldRaw value={r.nome} label="Nome" />
          <TextFieldRaw value={r.email} label="Email" />
          <TextFieldRaw value={r.tel} label="Telefone (por favor, informe o DDD)" />
          <TextFieldRaw value={r.uf} label="Estado" />
          <TextFieldRaw value={r.cidade} label="Cidade" />
          <br />
          <TextField value={r.bicicleta} label="Precisa de bicicleta?" />
          <br />
          <TextField value={r.maisAlguem} label="Você deseja FORNECER alguma atividade no FNEBici?" />
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

  const filtered = result.filter(r => r.atividade).sort((a, b) => a.nome.localeCompare(b.nome));

  return {
    props: {
      records: filtered,
    },
  };
};
