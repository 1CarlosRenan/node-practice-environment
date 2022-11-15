console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const name = args[0].split("=")[1]

console.log(name)