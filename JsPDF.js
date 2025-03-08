import { jsPDF } from "jspdf";

const doc = new jsPDF();
doc.text("Olá, este é um PDF gerado com jsPDF!", 10, 10);
doc.save("Questionario.pdf");