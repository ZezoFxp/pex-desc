# ⚖️ PEX-Desc - Gerador de Procurações Online

Este é um projeto acadêmico desenvolvido como parte das atividades da graduação em Engenharia de Software. O objetivo principal é fornecer uma ferramenta web simples e funcional para que **advogados possam gerar procurações de forma prática e automatizada**, preenchendo apenas um formulário online. (Formulário este que se encontra hospedado pela Render no seguinte endereço: https://pex-desc.onrender.com/)

---

## 🎓 Sobre o Projeto

O sistema foi desenvolvido com foco na **facilidade de uso** e na **agilidade no preenchimento de documentos jurídicos**, especialmente **procurações**. A ideia surgiu a partir da necessidade de criar uma aplicação útil dentro do contexto jurídico, aproveitando os conhecimentos adquiridos em sala de aula.

---

## ⚙️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- HTML e JavaScript (frontend)
- Biblioteca de geração de documentos `.docx` (em breve, com `docxtemplater`)

---

## 🧱 Estrutura do Projeto

- `server.js`  
  Servidor Express responsável por processar requisições e futuramente gerar documentos personalizados.

- `public/index.html`  
  Formulário onde o advogado preenche os dados do cliente para gerar a procuração, incluindo:
  - Nome
  - CPF/CNPJ
  - Endereço
  - Estado Civíl
  - Profissão
  - Etc.

- `public/script.js`  
  Script para captura de dados, envio ao backend e acionamento do download do documento gerado.

---

## 🚧 Funcionalidades Futuras

- Suporte a diferentes tipos de procurações.
- Melhorias na interface e experiência do usuário (UX).

---

## ▶️ Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/ZezoFxp/pex-desc.git

# Acesse a pasta
cd pex-desc

# Instale as dependências
npm install

# Inicie o servidor
node server.js
