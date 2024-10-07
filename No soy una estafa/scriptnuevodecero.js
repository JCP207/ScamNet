class cliente {
    constructor(nombre, numeroContrato, planTipo) {
        this.nombre = nombre;
        this.numeroContrato = numeroContrato;
        this.planTipo = planTipo
        this.planPrecio = 15000;
        this.planVelocidad = 50;
    }

    getNombre(){
        return this.nombre
    }
    getNumeroContrato(){
        return this.numeroContrato
    }
    getVelocidad(){
        return this.planVelocidad
    }
    getPrecio(){
        return this.planPrecio
    }
    getTipoPlan(){
        return this.planTipo   
    }
    setPrecio(nuevoPrecio){
        if (nuevoPrecio > 0){
            this.planPrecio = nuevoPrecio
        }
        else{
            alert("El nuevo precio debe ser mayor a 0")
        }        
    }
    setCambiarPlan(nuevoPlan){
        if (nuevoPlan == "Basico" || nuevoPlan == "Intermedio" || nuevoPlan == "Avanzado"){
            this.planTipo = nuevoPlan
            if (nuevoPlan == "Basico"){
                this.planVelocidad = 50
            }
            else if (nuevoPlan == "Intermedio"){
                this.getVelocidad = 100
            }
            else {
                this.planVelocidad = 200
            }
        }
        else {
            alert("El nuevo plan debe ser Basico, Intermedio o Avanzado")
        }
    }
    calcularPeriodo(cantidadMeses){
        return this.planPrecio * cantidadMeses
    }

}
ini=0
let gestor1;

function cambPrec(){
    if (ini==1){
        let nuevoPrecio = document.getElementById("precio").value
        gestor1.setPrecio(nuevoPrecio)
    }
    else{
        alert("Realize su contrato primero")
    } 
}

function calcMes(){
    if (ini==1){
        let cantidadMeses = document.getElementById("tiempo").value
        let calculo = gestor1.calcularPeriodo(cantidadMeses)
        alert("Se le cobrarán " + calculo + " por sus " + cantidadMeses + " meses de 'contrato'")
    }
    else{
        alert("Realize su contrato primero")
    }
}

function iniciarUsuario(){
    const nombre = document.getElementById("nombre").value
    const numeroContrato = document.getElementById("numcon").value
    const planTipo = document.getElementById("plan").value
    if (planTipo=="Select"){
        alert("Ingrese un tipo de plan válido")
    }
    if (nombre==""){
        alert("Ingrese su nombre")
    }
    if (numeroContrato==""){
        alert("Ingrese su número de contrato")
    }
    else{
        ini = 1
        alert("Gracias por sus datos, se le extraerán 278 U$D de su cuenta bancaria a la brevedad. Siéntase libre de proceder a usar la página")
    }

    gestor1 = new cliente(nombre, numeroContrato, planTipo)
    document.getElementById("output").innerHTML = "Nombre: " + gestor1.getNombre()
    document.getElementById("output2").innerHTML = "Número de Contrato: " + gestor1.getNumeroContrato()
    document.getElementById("output3").innerHTML = "Tipo de Plan: " + gestor1.getTipoPlan()

}

