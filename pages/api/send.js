const { default: Docxtemplater } = require("docxtemplater");
const PizZip = require("pizzip");
const fs = require("fs");
const path = require("path");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const {
    name: nome,
    cpf,
    nac,
    estadoCivil,
    profissao,
    endereco,
    bairro,
    cidade,
    uf,
    cep,
    rg,
    celular,
    email,
  } = req.body;

  try {
    // Caminho do template - caminho absoluto baseado na raiz do projeto
    const templatePath = path.resolve(process.cwd(), "api/templatedoc/input.docx");
    const content = fs.readFileSync(templatePath, "binary");

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    doc.render({
      nome,
      cpf,
      nacionalidade: nac,
      estadoCivil,
      endereco,
      bairro,
      cidade,
      uf,
      cep,
      rg,
      celular,
      email,
      profissao,
    });

    const buffer = doc.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=Documento-${nome}.docx`
    );

    res.send(buffer);
  } catch (error) {
    console.error("Erro ao gerar DOCX:", error);
    res.status(500).json({ error: "Erro interno ao gerar documento" });
  }
};
