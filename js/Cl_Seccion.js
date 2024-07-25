export default class Cl_Seccion{
    constructor (codigo){
        this.codigo = codigo;
        this.contAprob = 0;
        this.acumNotas = 0;
    }

    set codigo(c){
        this._codigo = c;
    }

    get codigo(){
        return this._codigo;
    }


    procesarEstudiante(nf)
    {
       this.acumNotas+=nf;

       if (nf>= 47.5)
        this.contAprob++
    }


    devolverAcumuNotas(){
        return this.acumNotas;
    }
    devolverContAprob(){
        return this.contAprob;
    }

    promedio(){
        return this.acumNotas / 2;
    }


}