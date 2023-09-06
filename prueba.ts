/* const suma = (a: number, b: number, printText: string) => {
    console.log(printText, a + b);
}

const parseArguments = (args: Array<string>) => {
    // las formas de declarar los tipos de array son Array<(tipo de dato)> o (tipo de datos)[]
    if (args.length !== 4) throw new Error("Argumento invalido")

    const firstNumber = Number(args[2])
    const secondNumber = Number(args[3])

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [
            firstNumber,
            secondNumber
        ]
    }
    throw new Error("Los valores ingresados no son correctos")
}

const cleanArguments = parseArguments(process.argv)


console.log(process.argv);
//process.argv devuelve un array en donde las primeros dos posiciones son los scripts del package.json


const a: number = Number(cleanArguments[0])
const b: number = Number(cleanArguments[1])

suma(a, b, `Suma ${a} y ${b} y el resultado es:`); */


console.log(process.argv);