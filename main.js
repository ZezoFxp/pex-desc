

const path = require("path");

/* var nome = document.getElementById('name').value;
var cpf = document.getElementById('cpf').value; */

var nome = "José Messias";
var cpf = "051.871.033-50";

function gerar(){
    const content = fs.readFileSync(
        path.resolve(__dirname, "templatedoc/input.docx"),
        "binary"
    );
    
    const zip = new PizZip(content);




    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });


    

    doc.render({
        nome: nome,
        cpf: cpf
/*         phone: "+33666666",
        description: "The Acme Product", */
    });
    
    




    const buf = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    });
    

    fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
    
    
};


function limpar(){

};

