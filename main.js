class Clientes {
    constructor(nombre, apellido, dni, pedido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.pedido = pedido;
    }
}

const clienteLucas = new Clientes("Lucas", "Castro", 12345678, 1000);
const clienteFabian = new Clientes("Fabian", "Parentelli", 25145698, 2000);
const clienteMilagros = new Clientes("Milagros", "Acuña", 35569745, 3000);
const clienteFederico = new Clientes("Federico", "Rodriguez", 12569325, 4000);

const arrayClientes = [];

arrayClientes.push(clienteLucas);
arrayClientes.push(clienteFabian);
arrayClientes.push(clienteMilagros);
arrayClientes.push(clienteFederico);

console.log(arrayClientes);

// Funcion con el menu de opciones:

function menu() {
    alert("Bienvenido a Trc soporte");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Ventas \n 2) Baja de orden Por garantia \n 3) Quiero que me llamen \n 4) Consulta de reparaciones \n 5) salir"));
    return opcion;
} 

// Funcion para Ventas

function ventas() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del Cliente: ");
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let pedido = parseInt(prompt("Ingrese su pedido"));
    let cliente = new Clientes(nombre, apellido, dni, pedido);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

// Funcion Baja por Garantia

function bajaPorGarantias() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente"));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1);
    console.log(arrayClientes);
}

// funcion para llamar al cliente:

function llamarcliente() {
    let dni = parseInt(prompt("Ingrese el Dni del Cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del cliente");
    let apellido = prompt("ingrese el apellido del cliente: ");
    let tel = parseInt(prompt("ingrese su telefono "));
    let clientemodificado = new Clientes(nombre, apellido, dni, pedido);
    arrayClientes.splice(indice, 1, clientemodificado);
    console.log(arrayClientes);
}

// Funcion para consultar reparaciones

function consultaReparaciones() {
    let dni = parseInt(prompt("Ingrese el Dni del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log(cliente);
}

// Funcion para salir del programa

function salir() {
    alert("Gracias por confiar en Trc soporte");
}

// Ejecutar el programa

let opcion = menu()
    switch (opcion) {
        case 1:
            ventas();
            break;
        case 2:
            bajaPorGarantias();
            break;
        case 3:
            llamarcliente();
            break;
        case 4:
            consultaReparaciones();
            break;
        case 5:
            salir()
            break;                
    }
