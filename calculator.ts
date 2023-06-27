/* const operation = ['multiply', 'add', 'subtract', 'divide'] */

type Operation = 'multiply' | 'add' | 'subtract' | 'divide'

const calculator = (a: number, b: number, op: Operation): number => {
    /* if (!operation.includes(op)) {
        console.log('Operación invalida');
    } */
    if (op === 'add') return a + b;
    if (op === 'subtract') return a - b;
    if (op === 'multiply') return a * b;
    if (op === 'divide') {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }

    throw new Error('Operación invalida');
}


try {
    console.log(calculator(3, 5, 'divide'));
    console.log(calculator(3, 0, 'divide'));

} catch (e) {
    console.log(`Algo anda mal ${e}`);

}

