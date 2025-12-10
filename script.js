function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Coleta de dados do formulário
    const nome = document.getElementById("nome").value;
    const contato = document.getElementById("contato").value;
    const objetivo = document.getElementById("objetivo").value;
    const experiencia = document.getElementById("experiencia").value;
    const formacao = document.getElementById("formacao").value;
    const idiomas = document.getElementById("idiomas").value;
    const infoAdicionais = document.getElementById("infoAdicionais").value;

    // Configuração e formatação do conteúdo do PDF
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(nome, 10, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(contato, 10, 30);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Objetivo", 10, 40);
    doc.setFontSize(12);
    doc.text(objetivo, 10, 48);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Experiência", 10, 60);
    doc.setFontSize(12);
    doc.text(experiencia, 10, 68);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Formação", 10, 90);
    doc.setFontSize(12);
    doc.text(formacao, 10, 98);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Idiomas", 10, 120);
    doc.setFontSize(12);
    doc.text(idiomas, 10, 128);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Informações Adicionais", 10, 140);
    doc.setFontSize(12);
    doc.text(infoAdicionais, 10, 148);

    // Gera o PDF com o nome "curriculo.pdf"
    doc.save("curriculo.pdf");
}
