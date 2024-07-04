export default class Empleado{
    constructor(nombre,sueldoBase,aniosdeServicio){
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
        this.añosdeServicio = aniosdeServicio;
    } 

    set nombre (n){
        this._nombre = n;
    }
    get nombre (){
        return this._nombre;
    }
    set sueldoBase (sb){
        return this._sueldoBase = sb;
    }
    get sueldoBase (){
        return this._sueldaBase;
    }
    set aniosdeServicio (as){
        return this.añosdeServicio = as;
    }
    get aniosdeServicio (){
        return this.aniosdeServicio;
    }

    Aumento(){
        if (this.aniosdeServicio > 5){
            return this.sueldoBase * 15/100;
        }
        else{
            return 0;
        }
    }
    nuevoSueldo(){
        return this.sueldoBase + this.Aumento();
    }
}