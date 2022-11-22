const chalk = require('chalk')

const nota = 9

if (nota >= 7) {
  console.log(chalk.green('Parabéns'))
} else {
  console.log(chalk.bgRed('Você foi reprovado.'))
}