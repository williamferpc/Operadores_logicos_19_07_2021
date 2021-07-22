// let vasoPlastico = true;
// let cafeSinAzucar = false;
// console.log(vasoPlastico && cafeSinAzucar);




// let resultado = 5>3;
// let resultado2 = 5>=5;
// console.log(`Valor de la variable resultado:`,resultado,` y valor de la variable resultado2:`,resultado2);
// console.log(resultado,` && `,resultado2,` = `,(resultado && resultado2));

let A = 0;
let B = 1;

console.log(`Operadores AND`);
console.log(`1. A:`,!(!A),` (OPERADOR AND) B:`,!B,` A && B =`,!(!A) && !B);
console.log(`2. A:`,A,` (OPERADOR AND) B:`,B,` A && B =`,A && B);
console.log(`3. A:`,!A,` (OPERADOR AND) B:`,!B,` A && B =`,!A && !B);
console.log(`4. A:`,!A,` (OPERADOR AND) B:`,B,` A && B =`,!A && B);
console.log(`A:`,A,`B:`,B,`Datos verdaderos`);

console.log(`Operadores OR`);
console.log(`1. A:`,!(!A),` (OPERADOR OR) B:`,!B,` A || B =`,!(!A) || !B);
console.log(`2. A:`,A,` (OPERADOR OR) B:`,B,` A || B =`,A || B);
console.log(`3. A:`,!A,` (OPERADOR OR) B:`,!B,` A || B =`,!A || !B);
console.log(`4. A:`,!A,` (OPERADOR OR) B:`,B,` A || B =`,!A || B);
console.log(`A:`,A,`B:`,B,`Datos verdaderos`);

console.log(`Operadores NOT`);
console.log(`1. A:`,!(!A),` (OPERADOR NOT) B:`,` !A =`,!A);
console.log(`1. A:`,` (OPERADOR NOT) B:`,B,` !B =`,!B);

function Operador(a, b, r) {
    this.A = a;
    this.B = b;
    this.A_AND_B = r;
}
let one   = new Operador(A, !B, !(!A) && !B);
let two   = new Operador(A, B, A && B);
let three = new Operador(!A, !B, !A && !B);
let four  = new Operador(!A, B, !A && B);
let five  = new Operador(A, B, 'Datos Verdaderos');

console.log(`\n\nOperadores AND`);
console.table([one, two, three, four, five]);

one   = new Operador(A, !B, !(!A) || !B);
two   = new Operador(A, B, A || B);
three = new Operador(!A, !B, !A || !B);
four  = new Operador(!A, B, !A || B);
five  = new Operador(A, B, 'Datos Verdaderos');

console.log(`\n\nOperadores OR`);
console.table([one, two, three, four, five]);

one   = new Operador(A, null, !A);
two   = new Operador(null, B, !B); 

console.log(`\n\nOperadores NOT`);
console.table([one, two]);

// Operador AND (&&)
let tablaAND = document.querySelector("#myTablaAND");
tablaAND.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) && !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>
    <tr>
        <td>${  !A}</td>
        <td>${!B}</td>
        <td>${!A && !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A && B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
// Operador OR (||)
let tablaOR = document.querySelector("#myTablaOR");
tablaOR.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) || !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A || B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${!B}</td>
        <td>${!A || !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A || B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
// Operador NOT (!)
let tablaNOT = document.querySelector("#myTablaNOT");
tablaNOT.innerHTML = `
    <tr>
        <td>${A}</td>
        <td></td>
        <td>${!A}</td>
    </tr>
    <tr>
        <td></td>
        <td>${B}</td>
        <td>${!B}</td>
    </tr>
`;








// let vasoPlastico = true;
// let cafeSinAzucar = false;
// console.log(vasoPlastico && cafeSinAzucar);




// let resultado = 5>3;
// let resultado2 = 5>=5;
// console.log(`Valor de la variable resultado:`,resultado,` y valor de la variable resultado2:`,resultado2);
// console.log(resultado,` && `,resultado2,` = `,(resultado && resultado2));