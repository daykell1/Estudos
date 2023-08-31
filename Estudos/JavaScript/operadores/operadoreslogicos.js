let pontos=100;
let tipo;
//exemplo de if comum
if (pontos>100)
    tipo="premium";
else
    tipo="comum";
//operador ternário
tipo=pontos>100? "premium":"comum";

// operador and (&&)

console.log(true && false); // deu false
// os dois tem que ser verdade 
console.log(true && true); // deu true

let filme = true;
let pessoa = true;
let cinema = filme && pessoa;



console.log(cinema);

// operador or (||)
// basta uma ser verdadeira para a expreção ser verdadeira
filme = true;
pessoa = false;
cinema = filme || pessoa;
console.log("TESTE COM TRUE && FALSE: "+cinema)

filme = true;
pessoa = true;
cinema = filme || pessoa;

console.log(cinema);


//operador NOT (!)
filme = !true;
pessoa = !true;
cinema = !(filme || pessoa);
// nega o booleano

//comparações com não boolanos
//Em JavaScript, um valor "falsey"
// refere-se a um valor que é avaliado como falso em um contexto booleano. 

if (false) {
    // Este bloco não será executado.
  }
  
  if (null) {
    // Este bloco não será executado.
  }
  
  if (undefined) {
    // Este bloco não será executado.
  }
  
  if (0) {
    // Este bloco não será executado.
  }
  
  if (NaN) {
    // Este bloco não será executado.
  }
  
  if ('') {
    // Este bloco não será executado.
  }
  
  if ("") {
    // Este bloco não será executado.
  }
  
// truthy 

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);


//Atividade 01 Trocando valores

let a = 'vermelho';
let b = 'azul';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);














