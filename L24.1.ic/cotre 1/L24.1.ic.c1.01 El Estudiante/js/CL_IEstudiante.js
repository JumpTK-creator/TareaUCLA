export default class IEstudiante {
    leerCedula(){
        return prompt("ingrese la cedula");
    }
    leerNota1(){
        return prompt("ingrese la nota 1");
    }
    leerNota2(){
        return prompt("ingrese la nota 2");
    }
    leerNota3(){
        return prompt("ingrese la nota 3");
    }
    reporteEstudiante(c,n1,n2,n3,nf)
    { return `
        <br> Cedula: ${c}
        <br> Nota1: ${n1}
        <br> Nota2: ${n2}
        <br> Nota3: ${n3}
        <br> NotaFinal: ${nf}
        `};
}