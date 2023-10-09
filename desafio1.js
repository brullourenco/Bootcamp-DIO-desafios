/* Obs: Se o herói tiver pontos de vida entre 5001 e 6000, o nível não está descrito 
no desafio prosposto, para não atribuir um valor arbitrário preferi deixar como uma mensagem de erro."*/

let hero = "Homem de Ferro"
let xp = 10000
let nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']

if (xp < 1001) {
  console.log("O herói de nome " + hero + " está no nível " + nivel[0])
} else if (xp >= 1001 && xp <= 2000) {
    console.log("O herói de nome " + hero + " está no nível " + nivel[1])
} else if (xp >= 2001 && xp <= 5000) {
    console.log("O herói de nome " + hero + " está no nível " + nivel[2])
} else if (xp >= 6001 && xp <= 6000) {
    console.log("O herói de nome " + hero + " está no nível " + nivel[3])
} else if (xp >= 7001 && xp <= 7000) {
    console.log("O herói de nome " + hero + " está no nível " + nivel[4])
} else if (xp >= 8001 && xp <= 8000) {
  console.log("O herói de nome " + hero + " está no nível " + nivel[5])
} else if (xp >= 9001 && xp <= 10000) {
    console.log("O herói de nome " + hero + " está no nível " + nivel[6])
} else if (xp > 10000) {
    console.log("O herói de nome " + hero + " está no nível " + nivel[7])
} else {
    console.log("Não foi possível definir o nível do Herói.")
}