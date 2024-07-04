export default class IEmpleado{
    leernombre(){
        return prompt ("Escriba su nombre: ");
    }
    leersueldoBase(){
        return prompt ("Escriba su sueldo base: ");
    }
    leeraniosdeServicio(){
        return prompt ("Escriba sus años de servicio: ");
    }

    reporteEmpleados(m,a,ms){
        return `
        <br> nombre: ${m}
        <br> aumento: ${a}
        <br> nuevoSueldo: ${ms}
        `
    }
}