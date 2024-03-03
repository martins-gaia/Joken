const result = document.querySelector(".result")
const humanpontos = document.querySelector("#human-pontos")
const machinepontos = document.querySelector("#machine-pontos")


let humanPontosNumeros = 0
let machinePontosNumeros = 0

const GAME_OPTIONS = {
    PEDRA: "pedra",
    PAPEL: "papel",
    TESOURA: "tesoura",
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())

}
const playMachine = () => {
    const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
    const randomNumber = Math.floor(Math.random() * 3)



    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("humano: " + human + "maquina: " + machine)

    if (human === machine) {
        result.innerHTML = " Não foi dessa vez, Deu empate!"
    } else if (
        (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA) ||
        (human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA) ||
        (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL)
    ) {
        humanPontosNumeros++
        humanpontos.innerHTML = humanPontosNumeros

        result.innerHTML = " Parabéns Você ganhooouuu!"
    } else {
        machinePontosNumeros++
        machinepontos.innerHTML = machinePontosNumeros
        result.innerHTML = " Você perdeu para o Martins! "
    }
}
