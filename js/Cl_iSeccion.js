export default class iSeccion{
    leerCodigo(){
        return prompt("Ingresa el codigo de la seccion");
    }

    reportarSeccion(c,p){
        return `
        <br> Contador de aprobados: ${c}
        <br> promedio de notas: ${p}`
    }
}