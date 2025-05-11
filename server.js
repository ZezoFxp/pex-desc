const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");
const fs = require("fs");


app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

app.post("/send", (req, res) => {
    const nome = req.body.name
    const cpf = req.body.cpf
    const nac = req.body.nac
    const estadoCivil = req.body.estadoCivil
    const profissao = req.body.profissao
    const endereco = req.body.endereco
    const bairro = req.body.bairro
    const cidade = req.body.cidade
    const uf = req.body.uf
    const cep = req.body.cep
    const rg = req.body.rg
    const celular = req.body.celular
    const email = req.body.email

  // Carrega modelo .docx
  const content = fs.readFileSync(path.resolve(__dirname, "templatedoc/input.docx"), "binary");

  const zip = new PizZip(content);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // Preenche variáveis
  doc.render({
    nome: nome,
    cpf: cpf,
    nacionalidade: nac,
    estadoCivil: estadoCivil,
    endereco: endereco,
    bairro: bairro,
    cidade: cidade,
    uf: uf,
    cep: cep,
    rg: rg,
    celular: celular,
    email: email,
    profissao: profissao
  });

  const buffer = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });

  // Define cabeçalhos e envia o arquivo
  res.set({
    "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "Content-Disposition": `attachment; filename=Documento-${nome}.docx`,
  });

  res.send(buffer);
});



app.listen(port, () => {
    console.log(`Servidor ouvindo em http://localhost:${port}`);
  });