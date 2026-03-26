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

/* Questão 01 */

let soma01 = 0

for (let i = 1; i <= 100; i++) {
  soma01 += i
}

export const resposta01 = soma01

/* Questão 02 */

let contador02 = 0

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    contador02++
  }
}

export const resposta02 = contador02

/* Questão 03 */


let soma03 = 0

for (let i = -100; i <= -1; i++) {
  if (i % 2 === 0) {
    soma03 += i
  }
}

export const resposta03 = soma03

/* Questão 04 */

let soma04 = 0
let contador04 = 0

for (let i = 1; i <= 200; i++) {
  if (i % 3 === 0) {
    soma04 += i
    contador04++
  }
}

export const resposta04 = soma04 / contador04

/* Questão 05 */


const resposta05 = []

for (let i = 0; i < itensDomesticos.length; i++) {
  if (itensDomesticos[i][0] === "c") {
    resposta05.push(itensDomesticos[i])
  }
}

/* Questão 06 */


const resposta06 = []

for (let i = 0; i < itensDomesticos.length; i++) {
  if (i % 2 !== 0) {
    resposta06.push(itensDomesticos[i])
  }
}

/* Questão 07 */

const resposta07 = []

for (let i = 0; i < itensDomesticos.length; i++) {
  if (itensDomesticos[i].length > 6) {
    resposta07.push(itensDomesticos[i])
  }
}

/* Questão 08 */

const resposta08 = []

for (let i = itensDomesticos.length - 1; i >= 0; i--) {
  resposta08.push(itensDomesticos[i])
}

/* Questão 09 */

const resposta09 = []

for (let pet of petsExoticos) {
  resposta09.push(pet.toUpperCase())
}

/* Questão 10 */


const resposta10 = []

for (let pet of petsExoticos) {
  if (pet.includes("r")) {
    resposta10.push(pet)
  }
}

/* Questão 11 */

let contador11 = 0

for (let pet of petsExoticos) {
  if (pet.length > 7) {
    contador11++
  }
}

export const resposta11 = contador11

/* Questão 12 */

let encontrado = "não encontrado"

for (let pet of petsExoticos) {
  if (pet[0] === "s") {
    encontrado = pet
    break
  }
}

export const resposta12 = encontrado