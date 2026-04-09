/*
Assunto 02 - Laços de repetição: For

A outra forma principal de executar um laço de repetição é utilizando o "for".
Ele segue os mesmos princípios, mas segue uma sintaxe diferente:

// PSEUDO-CÓDIGO
for (valor inicial do contador; condição para o contador; mudança do contador) {
  código a ser executado repetidamente
}

// CÓDIGO REAL
for (let contador = 0; contador <= 20; contador = contador + 1) {
  console.log(contador)
}

Vamos comparar com o loop de while do exercício anterior:

let contador = 0

while (contador <= 20) {
  console.log(contador)
  contador = contador + 1
}

A diferença principal é que na sintaxe do for incluimos tudo referente ao 
contador na mesma linha: A criação e valor inicial dele, a condição de término,
e como este contador é modificado. O que isso muda para nós?

1. No caso do "for", o contador não fica disponível para uso fora do "for".
   Na linha que o "for" acaba o contador deixa de existir. 
2. No caso do "while", como o contador é criado externamente, ele segue existindo
   mesmo após o término do laço.

E para quais situações cada um é mais adequado?

- É mais recomendado usar "for" quando queremos manipular uma quantidade CONHECIDA
  de itens, ou quando queremos executar as instruções uma quantidade definida
  de vezes, já pré-estabelecida.
- Se recomenda usar "while" quando a condição para repetição é dependente de
  algo externo ao código, ou quando lidamos com uma quantidade DESCONHECIDA
  de "inputs" (exemplo: Enquanto eu pressionar a seta para a direita, meu personagem
  se move para a direita. No código não temos como representar isso com um "for").

Vamos ver os exemplos do exercício anterior na sintaxe de for:

1. Realizar algo em sequência:

for (let comeco = 0; comeco <= fim; comeco++) {
  console.log(comeco)
}

- O código acima imprime os números de 0 a 10

2. Realizar algo em sequência inversa:

for (let comeco = 10; comeco >= fim; comeco--) {
  console.log(comeco)
}

- O código acima imprime os números de 10 a 0

3. Acumular valores:

let acumulador = 0

for (let valor = 3; valor <= 9; valor = valor + 1) {
  acumulador += valor
}

- O código acima vai calcular a soma de todos os números de 3 a 9 (é 42)

4. Manipular itens de uma lista:

let nomes = ["arnoldo", "betolino", "carmem", "denise", "érica", "fátima"]

for (let indice = 0; indice < nomes.length; indice += 1) {
  nomes[indice] = nomes[indice].toUpperCase()
}

- O código acima acessa todos os itens da lista e deixa em maiúsculas

5. Manipular itens de uma lista de acordo com alguma condição:

let numeros = [3, 4, 6, 7, 9, 11, 12, 13, 14, 16, 18, 19]

for (let indice = 0; indice < numeros.length; indice += 1) {
  if (numeros[indice] % 2 === 0) {
    console.log(numeros[indice])
  }
}

- O código acima só imprime os números pares da lista

6. Realizar uma operação pulando alguns itens:

let numeros = [3, 4, 6, 7, 9, 11, 12, 13, 14, 16, 18, 19]

for (let indice = 0; indice < numeros.length; indice += 3) {
  console.log(numeros[indice])
}

- O código acima imprime os números da lista pulando de 3 em 3 índices

7. Extrair valores de uma lista e criar outra

const nomes = [
  "arnoldo", "betolino", "cadu", "denise", "érica", 
  "ferdinanda", "gina", "helen", "ingride", "jeremias"
]
const nomesLongos = []

for (let indice = 0; indice < nomes.length; indice += 1) {
  if (nomes[indice].length > 6) {
    nomesLongos.push(nomes[indice])
  }
}

- O código acima vai copiar todos os nomes com mais de 6 letras para a lista
de nomes longos

Da mesma forma que ocorre no "while", é necessário cuidado com a condição
e incremento do contador, pois mesmo em um "for" é possível criar situações
indesejadas:

for (let contador = 0; contador !== 5; contador += 2) {
  // resulta em um loop infinito: Mesmo caso do exemplo do exercício 01
}

Como frequentemente utilizamos o loop de for para interagir com listas, ele possui
também uma outra sintaxe, mais diretamente voltada para isso:

// EM PSEUDO-CÓDIGO:
for (cada item da lista) {
  código a ser executado
}

// EM CÓDIGO REAL:
const lista = ["casa", "camelo", "cera", "coxinha", "cinto", "cocada", "computador", "cd"]

for (let item of lista) {
  console.log(item)
}

Nesta versão do loop, não precisamos acessar cada item da lista usando a sintaxe
"nomeDaLista[indice]". A variável criada dentro do "for" (chamada de "item" neste
exemplo) é automaticamente atualizada com o valor dos itens da lista em sequência:

1. Na primeira vez que o código dentro do "for" é executado, o valor de "item" é "casa"
2. Na segunda vez, o valor de "item" é "camelo"
3. Na teerceira vez, o valor de "item" é "cera"
4. Na quarta vez, o valor de "item" é "coxinha"
5. E por aí vai.

Não é necessário explicitar onde fica o fim da lista, pois neste caso o "for"
já sabe onde fica.

E qual a desvantagem disso?

1. Não é possível utilizar os índices das listas (sem utilizar um método de lista
   específico pra isso). Isso impede percorrer e utilizar duas ou mais listas de 
   mesmo tamanho ao mesmo tempo. O exemplo abaixo não é possível na sintaxe 
   "for item of lista":

   const comida = ["arroz", "macarrão", "queijo", "batata-doce"]
   const acompanhamento = ["feijão", "molho bolonhesa", "goiabada", "frango"]

   for (let indice = 0; indice < comida.length; indice++) {
     console.log(comida[indice], " com ", acompanhamento[indice])
   }

   Resulta em:
   "arroz com feijão", "macarrão com molho bolonhesa",
   "queijo com goiabada", "batata-doce com frango"

2. Não é possível percorrer a lista em ordem decrescente. Se quiser fazer
   isso é necessário primeiro modificar a lista original invertendo ela.
3. Não é possível pular itens da lista.

------------------------------------------------------------------------------

Questões 01 a 12: Exercícios com laços de repetição do tipo "For"

MÍNIMO NECESSÁRIO PARA NOTA MÁXIMA: 8 questões
*/

/* Questão 01
Utilizando um laço de repetição for, calcule a soma de todos os números de 1 a 100
(incluindo 100). Armazene o resultado na variável resposta01.
*/
let somaAteCem = 0;
for (let i = 1; i <= 100; i++) {
    somaAteCem += i;
}
export const resposta01 = somaAteCem;

/* Questão 02
Utilizando um laço de repetição for, calcule quantos números ímpares existem entre
1 e 50 (incluindo o 1 e 50). Armazene a quantidade encontrada na variável resposta02.
*/
let qtdImparesAteCinquenta = 0;
for (let i = 1; i <= 50; i += 2) {
    qtdImparesAteCinquenta++;
}
export const resposta02 = qtdImparesAteCinquenta;

/* Questão 03
Utilizando um laço de repetição for, calcule a soma de todos os números pares
negativos entre -100 e -1 (incluindo o -100). Armazene o resultado na 
variável resposta03.
*/
let somaParesNegativos = 0;
for (let i = -100; i <= -2; i += 2) {
    somaParesNegativos += i;
}
export const resposta03 = somaParesNegativos;

/* Questão 04
Utilizando um laço de repetição for, calcule a média aritmética de todos os números
múltiplos de 3 entre 1 e 200 (incluindo os limites). Armazene o resultado 
(pode ser decimal) na variável resposta04.
*/
let somaMultiplosTres = 0;
let contadorMultiplosTres = 0;
for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0) {
        somaMultiplosTres += i;
        contadorMultiplosTres++;
    }
}
export const resposta04 = somaMultiplosTres / contadorMultiplosTres;

// Lista para as questões 5 a 8:
const itensDomesticos = [
  "mesa", "cadeira", "sofá", "cortina", "tapete", 
  "abajur", "copo", "prato", "panela", "cafeteira",
  "espelho", "quadro", "vaso", "relógio", "almofada"
];

/* Questão 05
Dada a lista de itens domésticos acima, utilize um laço de repetição for (com contador)
para criar um novo array contendo todos os itens que começam com a letra "c".
*/
let itensComC = [];
for (let i = 0; i < itensDomesticos.length; i++) {
    if (itensDomesticos[i][0] === "c") {
        itensComC.push(itensDomesticos[i]);
    }
}
export const resposta05 = itensComC;

/* Questão 06
Utilizando a mesma lista de itens domésticos da questão anterior, use um laço de
repetição for (com contador) para criar um novo array contendo apenas os itens que
estão nos índices ímpares da lista original (índices 1, 3, 5, 7, 9, 11, 13).
*/
let itensIndicesImpares = [];
for (let i = 1; i < itensDomesticos.length; i += 2) {
    itensIndicesImpares.push(itensDomesticos[i]);
}
export const resposta06 = itensIndicesImpares;

/* Questão 07
Seguindo com a lista de itens domésticos, use um laço de repetição for (com contador)
para criar um novo array contendo os itens com mais de 6 letras.
*/
let itensMaisDeSeisLetras = [];
for (let i = 0; i < itensDomesticos.length; i++) {
    if (itensDomesticos[i].length > 6) {
        itensMaisDeSeisLetras.push(itensDomesticos[i]);
    }
}
export const resposta07 = itensMaisDeSeisLetras;

/* Questão 08
Finalizando com a lista de itens domésticos abaixo, use um laço de repetição for 
(com contador) para criar um novo array contendo os itens em ordem reversa.
*/
let itensReversos = [];
for (let i = itensDomesticos.length - 1; i >= 0; i--) {
    itensReversos.push(itensDomesticos[i]);
}
export const resposta08 = itensReversos;

const petsExoticos = [
  "lagarto", "tarântula", "hamster", "cacatua", "iguana",
  "escorpião", "sagui", "jacaré", "serpente", "camaleão"
];

/* Questão 09
Dada a lista de nomes de pets exóticos acima, utilize um laço de repetição for...of
para criar um novo array contendo todos os nomes em letras maiúsculas.
*/
let petsMaiusculos = [];
for (let pet of petsExoticos) {
    petsMaiusculos.push(pet.toUpperCase());
}
export const resposta09 = petsMaiusculos;

/* Questão 10
Com a mesma lista de pets exóticos acima, use um laço de repetição for...of para
criar um novo array contendo apenas os nomes que possuem a letra "r" em qualquer posição.
*/
let petsComR = [];
for (let pet of petsExoticos) {
    if (pet.includes("r")) {
        petsComR.push(pet);
    }
}
export const resposta10 = petsComR;

/* Questão 11
Continuando com a lista de pets exóticos, use um laço de repetição for...of para
contar quantos nomes têm mais de 7 letras.
*/
let qtdPetsMaisSeteLetras = 0;
for (let pet of petsExoticos) {
    if (pet.length > 7) {
        qtdPetsMaisSeteLetras++;
    }
}
export const resposta11 = qtdPetsMaisSeteLetras;

/* Questão 12
Encerrando com a lista de pets exóticos, use um laço de repetição for...of para
encontrar o primeiro nome que começa com a letra "s". Se encontrar, armazene este
nome na variável resposta12. Se não encontrar nenhum, armazene a string "não encontrado".
*/
let primeiroPetComS = "não encontrado";
for (let pet of petsExoticos) {
    if (pet[0] === "s") {
        primeiroPetComS = pet;
        break;
    }
}
export const resposta12 = primeiroPetComS;
