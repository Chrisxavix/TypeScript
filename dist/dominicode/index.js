"use strict";
/* Datos tipados */
let myTypeString = "Chris";
let myTypeNumber = 7;
let myTypeBoolean = true;
/* Arrays: ambas declaraciones son válidas */
let arrayNumber = [1, 2, 3];
let arrayNumber2 = [1, 2, 3];
let arrayString = ["uno", "dos", "tres"];
let arrayString2 = ["uno", "dos", "tres"];
/* Acepta diferentes tipos de datos: any */
let arrayString3 = ["uno", "dos", "tres", true, 87];
/* Tupla: se definen los tipos de datos para la posición */
let tuplaPlayer = ["Chris", 25, true];
/* Array de tupla */
let players;
players = [
    [1, "Dani"],
    [2, "Joseph"],
    [3, "Xavi"]
];
/* Inferencia de tipos: TypeScript asigna el tipo de dato en base al primer valor asignado */
let myVariable; //any
let myVariable1 = 7; //asigna dato numérico al ser el primer valor declarado
/* Composición de tipos */
/* Unions types: Una variable puede ser de dos tipos */
let myVariableComp;
myVariableComp = "9";
myVariableComp = 78;
myVariableComp = null;
