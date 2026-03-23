/* Questão 03
Crie um laço de repetição while que conte quantos números negativos existem no
array abaixo. Armazene a quantidade encontrada na variável resposta03.

const numeros = [15, -3, 8, -12, 0, -7, 22, -1, 9, -5, 18, -2]
*/
// Escreva o código da solução abaixo:
let numeros = [15, -3, 8, -12, 0, -7, 22, -1, 9, -5, 18, -2]
let i = 0
let contador = 0

while (i < numeros.length) {
  if (numeros[i] < 0) {
    contador++
  }
  i++
}
export const resposta03 = contador

/* Questão 04
Utilizando um laço de repetição while, faça a soma de todos os múltiplos de 7 
entre 1 e 100 (incluindo 100). Armazene o resultado na variável resposta04.
*/
// Escreva o código da solução abaixo:
let multiplos = 1
let aMultiplos = 0
 while (multiplos <= 100){
  if (multiplos % 7 == 0){
    aMultiplos += multiplos
  }
  multiplos ++
 }
export const resposta04 = aMultiplos

// Lista para as questões 5 a 10:
let nomes = [
  "Ana", "Bruno", "Carla", "Daniel", "Eduarda", 
  "Fábio", "Gabriela", "Hugo", "Isabela", "João"
]

/* DICA
Lembrem-se que para JavaScript, textos são listas de caracteres, e portanto possuem
as mesmas propriedades de índices e comprimento (length)
*/

/* Questão 05
Dada a lista de nomes acima, utilize um laço de repetição while para criar um
novo array contendo a mesma lista, mas 
em ordem reversa. Armazene o novo array
na variável resposta05.
*/
// Escreva o código da solução abaixo:
let i = nomes.length - 1
let invertido = []

while (i >= 0) {
  invertido.push(nomes[i])
  i--
}

export const resposta05 = invertido

/* Questão 06
Utilizando a mesma lista de nomes da questão anterior, crie um novo array contendo
apenas os nomes que estão nos índices pares da lista original (índices 0, 2, 4, 6, 8).
Armazene o novo array na variável resposta06.
*/
// Escreva o código da solução abaixo:
let i = 0
let pares = []

while (i < nomes.length) {
  if (i % 2 === 0) {
    pares.push(nomes[i])
  }
  i++
}

export const resposta06 = pares

/* Questão 07
Continuando com a lista de nomes, crie um novo array contendo apenas os nomes
que possuem 5 letras ou menos. Armazene o novo array na variável resposta07.
*/
// Escreva o código da solução abaixo:
let i = 0
let curtos = []

while (i < nomes.length) {
  if (nomes[i].length <= 5) {
    curtos.push(nomes[i])
  }
  i++
}

export const resposta07 = curtos

/* Questão 08
Ainda com a lista de nomes, crie um novo array onde todos os nomes estejam
escritos em letras maiúsculas. Armazene o novo array na variável resposta08.
*/
// Escreva o código da solução abaixo:

export const resposta08 = false

/* Questão 09
Seguindo com a mesma lista de nomes, crie um novo array contendo apenas os nomes
que começam com vogal (considere A, E, I, O, U, inclusive acentuadas se houver).
Armazene o novo array na variável resposta09.
*/
// Escreva o código da solução abaixo:

export const resposta09 = false

/* Questão 10
Finalizando com a lista de nomes, encontre o nome mais longo da lista.
Se houver empate (mais de um nome com o mesmo comprimento máximo), armazene
apenas o primeiro que aparecer na lista. Coloque o nome encontrado na variável resposta10.
*/
// Escreva o código da solução abaixo:

export const resposta10 = false
