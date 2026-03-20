/*
Assunto 01 - Laços de repetição: While

Uma das principais utilizades de realizar uma operação como código é a possibilidade
de repetir a execução de um conjunto de instrições que escrevemos uma única vez. A
estrutura que nos permite isso é chamada de "Laço de Repetição".

Há mais de um tipo de laço de repetição, não só em JavaScript, mas também em outras
linguagens. Focaremos nos tipos primários mais comuns: "While" e "For"

O princípio de todo laço de repetição é o mesmo: informamos a eles uma condição,
e enquanto esta condição for verdadeira, a instrução dentro do laço é executada e
repetida. No momento que a condição deixar de ser verdadeira, o laço deixa de ser
executado e o código pode avançar para as instruções seguintes, como no exemplo 
em pseudo-código abaixo:

variável fim = 20
variável começo = 0

enquanto (começo for menor que fim) {
  começo = começo + 1
}

imprimir (começo é igual a fim?)

Em JavaScript o pseudo-código acima viraria:

const fim = 20
let comeco = 0

while (comeco < fim) {
  comeco += 1
}

console.log(comeco === fim)

Esta é a sintaxe básica. Vamos entender ela:

while (condição) {
  código a ser repetido
}

Vamos ver então alguns casos de uso:

1. Realizar algo em sequência:

let comeco = 0
let fim = 10

while (comeco <= fim) {
  console.log(comeco)
  comeco++
}

- O código acima imprime os números de 0 a 10

2. Realizar algo em sequência inversa:

let comeco = 10
let fim = 0

while (comeco >= fim) {
  console.log(comeco)
  comeco--
}

- O código acima imprime os números de 10 a 0

3. Acumular valores:

let acumulador = 3
let fim = 9

while (acumulador >= fim) {
  acumulador = acumulador + 1
}

- O código acima vai calcular a soma de todos os números de 3 a 9 (é 42)

4. Manipular itens de uma lista:

let nomes = ["arnoldo", "betolino", "carmem", "denise", "érica", "fátima"]
let indice = 0

while (indice < nomes.length) {
  nomes[indice] = nomes[indice].toUpperCase()
  indice++
}

- O código acima acessa todos os itens da lista e deixa em maiúsculas

5. Manipular itens de uma lista de acordo com alguma condição:

let numeros = [3, 4, 6, 7, 9, 11, 12, 13, 14, 16, 18, 19]
let indice = 0

while (indice < numeros.length) {
  if (numeros[indice] % 2 === 0) {
    console.log(numeros[indice])
  }
  indice++
}

- O código acima só imprime os números pares da lista

6. Realizar uma operação pulando alguns itens:

let numeros = [3, 4, 6, 7, 9, 11, 12, 13, 14, 16, 18, 19]
let indice = 0

while (indice < numeros.length) {
  console.log(numeros[indice])
  indice = indice + 3
}

- O código acima imprime os números da lista pulando de 3 em 3 índices

7. Extrair valores de uma lista e criar outra

const nomes = [
  "arnoldo", "betolino", "cadu", "denise", "érica", 
  "ferdinanda", "gina", "helen", "ingride", "jeremias"
]
const nomesLongos = []
let indice = 0

while (indice < nomes.length) {
  if (nomes[indice].length > 6) {
    nomesLongos.push(nomes[indice])
  }
  indice++
}

- O código acima vai copiar todos os nomes com mais de 6 letras para a lista
de nomes longos

No caso de um laço de repetição do tipo "while", é importante que modifiquemos
o valor utilizado na comparação dentro do bloco de código a ser repetido, caso
contrário, o laço de repetição nunca terá fim. Vamos pra alguns outros exemplos
que resultam em problemas:

let contador = 0

while (contador !== 5) {
  contador += 2
}

O laço acima nunca chegará ao fim, pois na primeira execução contador passa
de 0 para 2, depois de 2 para 4, depois de 4 para 6, e com isso nunca atingirá
a condição de ser igual a 5.

const lista = ["a", "b", "c", "d", "e"]
let final = lista.length
let contador = 0

while (contador <= final) {
  console.log(lista[contador])
  contador += 1
}

No exemplo acima, o contador na última execução será igual ao número 5, que
representa um índice não existente na lista, então o último console.log()
resultará em "undefined".

------------------------------------------------------------------------------

Questões 01 a 10: Exercícios com laços de repetição do tipo "While"

MÍNIMO NECESSÁRIO PARA NOTA MÁXIMA: 7 questões
*/

/* Questão 01
Crie um laço de repetição while que armazene em uma variável a soma dos números
de 1 a 32. Envie o valor resultante na variável resposta01.
*/
// Escreva o código da solução abaixo:


export const resposta01 = (() => {
  let soma = 0
  let i = 1

  while (i <= 32) {
    soma += i
    i++
  }

  return soma
})()



/* Questão 02
Utilizando um laço de repetição while, calcule a soma de todos os números ímpares
de 1 até 50 (incluindo 50). Armazene o resultado da soma na variável resposta02.
*/
// Escreva o código da solução abaixo:

export const resposta02 = (() => {
  let soma = 0
  let i = 1
  while (i <= 50) {
    if (i % 2 !== 0) {
      soma += i
    }
    i++
  }
  return soma
})()




/* Questão 03
Crie um laço de repetição while que conte quantos números negativos existem no
array abaixo. Armazene a quantidade encontrada na variável resposta03.

const numeros = [15, -3, 8, -12, 0, -7, 22, -1, 9, -5, 18, -2]
*/
// Escreva o código da solução abaixo:

export const resposta03 = (() => {
  const numeros = [15, -3, 8, -12, 0, -7, 22, -1, 9, -5, 18, -2]
  let contador = 0
  let i = 0
  while (i < numeros.length) {
    if (numeros[i] < 0) {
      contador++
    }
    i++
  }
  return contador
})()

/* Questão 04
Utilizando um laço de repetição while, faça a soma de todos os múltiplos de 7 
entre 1 e 100 (incluindo 100). Armazene o resultado na variável resposta04.
*/
// Escreva o código da solução abaixo:

export const resposta04 = (() => {
  let soma = 0
  let i = 1
  while (i <= 100) {
    if (i % 7 === 0) {
      soma += i
    }
    i++
  }
  return soma
})()

// Lista para as questões 5 a 10:
const nomes = [
  "Ana", "Bruno", "Carla", "Daniel", "Eduarda", 
  "Fábio", "Gabriela", "Hugo", "Isabela", "João"
]

/* DICA
Lembrem-se que para JavaScript, textos são listas de caracteres, e portanto possuem
as mesmas propriedades de índices e comprimento (length)
*/

/* Questão 05
Dada a lista de nomes acima, utilize um laço de repetição while para criar um
novo array contendo a mesma lista, mas em ordem reversa. Armazene o novo array
na variável resposta05.
*/
// Escreva o código da solução abaixo:

export const resposta05 = (() => {
  const resposta = []
  let i = nomes.length - 1
  while (i >= 0) {
    resposta.push(nomes[i])
    i--
  }
  return resposta
})()


/* Questão 06
Utilizando a mesma lista de nomes da questão anterior, crie um novo array contendo
apenas os nomes que estão nos índices pares da lista original (índices 0, 2, 4, 6, 8).
Armazene o novo array na variável resposta06.
*/
// Escreva o código da solução abaixo:

export const resposta06 = (() => {
  const resposta = []
  let i = 0
  while (i < nomes.length) {
    if (i % 2 === 0) {
      resposta.push(nomes[i])
    }
    i++
  }
  return resposta
})()

/* Questão 07
Continuando com a lista de nomes, crie um novo array contendo apenas os nomes
que possuem 5 letras ou menos. Armazene o novo array na variável resposta07.
*/
// Escreva o código da solução abaixo:

export const resposta07 = (() => {
  const resposta = []
  let i = 0
  while (i < nomes.length) {
    if (nomes[i].length <= 5) {
      resposta.push(nomes[i])
    }
    i++
  }
  return resposta
})()

/* Questão 08
Ainda com a lista de nomes, crie um novo array onde todos os nomes estejam
escritos em letras maiúsculas. Armazene o novo array na variável resposta08.
*/
// Escreva o código da solução abaixo:

export const resposta08 = (() => {
  const resposta = []
  let i = 0
  while (i < nomes.length) {
    resposta.push(nomes[i].toUpperCase())
    i++
  }
  return resposta
})()

/* Questão 09
Seguindo com a mesma lista de nomes, crie um novo array contendo apenas os nomes
que começam com vogal (considere A, E, I, O, U, inclusive acentuadas se houver).
Armazene o novo array na variável resposta09.
*/
// Escreva o código da solução abaixo:


export const resposta09 = (() => {
  const resposta = []
  let i = 0
  while (i < nomes.length) {
    if (nomes[i].startsWith('A') || nomes[i].startsWith('E') || nomes[i].startsWith('I') || nomes[i].startsWith('O') || nomes[i].startsWith('U')) {
      resposta.push(nomes[i])
    }
    i++
  }
  return resposta
})()

/* Questão 10
Finalizando com a lista de nomes, encontre o nome mais longo da lista.
Se houver empate (mais de um nome com o mesmo comprimento máximo), armazene
apenas o primeiro que aparecer na lista. Coloque o nome encontrado na variável resposta10.
*/
// Escreva o código da solução abaixo:

export const resposta10 = (() => {
  let nomeMaisLongo = ""
  let i = 0
  while (i < nomes.length) {
    if (nomes[i].length > nomeMaisLongo.length) {
      nomeMaisLongo = nomes[i]
    }
    i++
  }
  return nomeMaisLongo
})()

