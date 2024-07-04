import Cl_IEstudiante from "./CL_IEstudiante.js";
import Cl_Estudiante from "./CL_Estudiante.js";

let iEstud = new Cl_IEstudiante(),
    c = iEstud.leerCedula(),
    n1 = iEstud.leerNota1(),
    n2 = iEstud.leerNota2(),
    n3 = iEstud.leerNota3(),

estud = new Cl_Estudiante(c, n1, n2, n3),

    salida = document.getElementById("salida");

salida.innerHTML = iEstud.reporteEstudiante(estud.cedula, estud.nota1, estud.nota2, estud.nota3, estud.calcularNotaFinal());

