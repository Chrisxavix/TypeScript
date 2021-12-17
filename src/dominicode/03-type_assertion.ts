/* Type Assertion
   Si no se conoce el tipo de un valor se realiza un cast para
   convertir en un valor que querramos
   Ejemplo: al consumir una api nos puede devolver de diferente
   tipo de dato, y lo quiero pasar a number, se usa el cast */

let channel: any = "Chris";
/* La assertion: <string>channel
   Cualquiera de las dos formas */
let channelStr = <string>channel;
let channelStr1 = channel as string;

