const { GoogleSpreadsheet } = require("google-spreadsheet");

export default async function handler(req: any, res: any) {
  const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const unformatedRows = await sheet.getRows();

  const rows = unformatedRows.map((row: any) => {
    return {
      timestamp: row["Carimbo de data/hora"],
      nome: row["Nome e sobrenome"],
      email: row["Endereço de e-mail"],
      tel: row["Telefone (por favor, informe o DDD)"],
      uf: row["Estado"],
      cidade: row["Cidade"],
      hospedagem: row["Necessita de hospedagem solidária?"],
      bicicleta: row["Precisa de bicicleta?"],
      maisAlguem: row["Você vem junto com mais alguém?"],
      animais: row["Você aceita se hospedar em local com animais de estimação?"],
      genero: row["Você tem objeção em dividir quarto com algum gênero?"],
      consideracoes: row["Considerações adicionais"],
      organizacao: row["Você participa de alguma organização relacionada à mobilidade ativa e/ou movimento distinto? Se sim, qual?"],
      comoChegara: row["Vem de fora? Como você chegará ao evento?"],
      estilo: row["Qual seu estilo?"],
      edicoes: row["Quantas edições do FNEBici você já participou?"],
      criancas: row["Pensando na programação pras crianças, nos conta aqui: você levará CRIANÇAS para o FNEBici?"],
      atividade: row["Você deseja FORNECER alguma atividade no FNEBici?"],
      sugestao: row["Você tem alguma sugestão do que gostaria de VER nesta edição do FNEBici?"],
    };
  });

  res.status(200).json(rows);
}
