# Lab4-Web
1. Analicemos ¿Qué ocurre en cada caso presentado anteriormente con los operadores y por qué 
JS me permite esto?
Esto ocurre debido a que en JavaScript a veces los operadores hacen tienen un comportamiento 
extraño, pero esto se debe a que el lenguaje cambia los tipos automáticamente. Si hago la 
suma de 2 numeros obtendre el resultado de una suma normal.Pero por el otro lado si hago la 
suma de 1 numero más un texto, JavaScript convierte el número en texto y los concatena. 
Pero si en cambio hago la resta de texto menos 1 numero, se hace una conversion del texto a 
número y hace la resta.

2. Analicemos ¿El comportamiento de los flujos de control es similar a otros lenguajes y 
ambientes de desarrollo?
El flujo de control en JavaScript es muy parecido al de otros lenguajes, pero tiene matices 
importantes. Las condiciones aceptan cualquier expresión y se evalúan por truthy/falsy: 0, 
"", null, undefined, NaN y false son falsy; en cambio [] y {} son truthy. Con el switch, la 
comparación es estricta, por lo que "1" no coincide con 1. En los bucles, el alcance de let/
const es de bloque, mientras que var es de función. Además, for...in itera propiedades y 
for...of itera valores de iterables. A diferencia de C/Java, JS usa extensamente promesas y 
async/await, así que gran parte del control real del flujo es asíncrono.