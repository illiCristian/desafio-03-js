// class DatosGuardados{
//   constructor(monto,precioFinal){
//     this.monto = monto;
//     this.precioFinal = precioFinal;
//   }
// }

const arrayDatos = [];
let acum = 0;

const fImprimirSuma = () => console.log(`La suma total de los gastos ingresados es = $${acum}`);

const fImprimir = () => console.log(arrayDatos);

const validarNumero = (num, rango1, rango2, mensaje1) => {
  while (num < rango1 || num > rango2 || isNaN(num)) {
    alert(mensaje1);
    num = parseFloat(prompt("Ingrese solo numeros! dentro de los rangos validos"));
  }
  return num;
};


const calcularIntereses = (valor, porcentaje, cuotas) =>
  ((valor + valor * porcentaje) / cuotas).toFixed(2);

const pagoEfectivo = (monto) => (monto - (monto * 0.10));

const pedirNumero = (mensaje) => parseFloat(prompt(mensaje));

const pedirMonto = () =>{
  let monto = parseFloat(prompt("Ingrese el monto total"));
  let mensajeMonto = `Tiene que ingresar un monto entre 1 y 100.000`;
  monto = validarNumero(monto, 1, 100000, mensajeMonto);
  return monto;
}
const fCalcular = () => {

  monto = pedirMonto();

  let menu = parseFloat(prompt("Ingrese solo el numero de cada opcion \n 1- Pago en efectivo (10% descuento) \n 2- Tarjeta en 1 pago (sin recargo)\n 3- Tarjeta en cuotas con o sin intereses"));
  let mensajeMenu = `Tiene que ingresar un numero entre 1 y 3`;
  menu = validarNumero(menu, 1, 3, mensajeMenu);
  

  switch (menu) {
    case 1:
      let mensaje1 = `El monto $${monto} a pagar en efectivo con 10% de descuento es $ ${pagoEfectivo(monto)}`;
      // console.log(mensaje1);
      arrayDatos.push(mensaje1);
      acum += Number(`${pagoEfectivo(monto)}`);
      alert(mensaje1);
      break;
    case 2:
      let mensaje2 = `El monto ${monto} a pagar sin recargos es ${monto}`;
      arrayDatos.push(mensaje2);
      alert(mensaje2);
      acum += Number(monto);
      break;
    case 3:
      let opcion2 = parseFloat(prompt("(Opcion 1) - Ahora 12 / Cuotas sin intereses \n (Opcion 2) - 2 Cuotas 10% de recargo \n (Opcion 3) - 3 Cuotas 15% de recargo \n (Opcion 4) - 6 Cuotas 30 % de recargo"));
      let mensaje3 = `Tienes que ingresar un numero del 1 al 4`,
        csi = "";
      opcion2 = validarNumero(opcion2, 1, 4, mensaje3);
      switch (opcion2) {
        case 1:
          csi = `El monto:$ ${monto} queda en 12 cuotas de:$ ${(monto / 12).toFixed(2)} `;
          arrayDatos.push(csi);
          alert(csi);
          acum += Number(monto);
          break;
        case 2:
          csi = `El monto:$ ${monto} con 10% de recargo, Total $${monto*1.1} queda en 2 cuotas de :$ ${calcularIntereses(monto,0.1,2)} `;
          alert(csi);
          arrayDatos.push(csi);
          acum += Number(`${monto*1.1}`);
          break;
        case 3:
          csi = `El monto:$ ${monto} con 15% de recargo, Total $${monto*1.15} queda en 3 cuotas de :$ ${calcularIntereses(monto,0.15,3)} `;
          alert(csi);
          arrayDatos.push(csi);
          acum += Number(`${monto*1.15}`);
          break;
        case 4:
          csi = `El monto:$ ${monto} con 30% de recargo, Total $${monto*1.3} queda en 6 cuotas de :$ ${calcularIntereses(monto,0.3,6)} `;
          alert(csi);
          arrayDatos.push(csi);
          acum += Number(`${monto*1.3}`);
          break;
      }
    case 4:
      break;
  }
};

const fCalculoPersonalizado = () =>{
  let montoP = pedirMonto();
  let cuotas = pedirNumero('Ingrese la cantidad de cuotas');
  let intereses = pedirNumero('Ingrese la cantidad de intereses');
  let calculo = (Number(montoP) * Number(intereses/100 +1)) / Number(cuotas);
  console.log(`El monto: $${montoP} en cuotas: ${cuotas} con intereses: ${intereses}% queda un total de $${(Number(montoP) * Number(intereses/100 +1))} en ${cuotas} de ${calculo}`);
}

console.log(arrayDatos);

const $botonCalcular = document.getElementById("calcular-intereses");
$botonCalcular.onclick = fCalcular;

const $botonMostrar = document.getElementById("mostrar-calculos");
$botonMostrar.onclick = fImprimir;

const $btnMostrarSuma = document.getElementById("mostrar-suma");
$btnMostrarSuma.onclick = fImprimirSuma;

const $btnCalculoPersonalizado = document.getElementById("calculo-personalizado");
$btnCalculoPersonalizado.onclick = fCalculoPersonalizado;
