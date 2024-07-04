import cl_Empleado from "./CL_Empleado.js";
import cl_IEmpleado from "./CL_IEmpleado.js";

let iEmpl = new cl_IEmpleado(),
  n = iEmpl.leernombre(),
  a = iEmpl.leeraniosdeServicio(),
  sb = iEmpl.leersueldoBase(),

  empl =  new cl_Empleado(n,sb,a),

  salida = document.getElementById("salida");
  
  salida = innerHTML = iEmpl.reporteEmpleados(n,a,sb);