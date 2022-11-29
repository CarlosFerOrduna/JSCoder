let operador, primerValor, segundoValor, resultado

const sumar = (primerValor, segundoValor) => primerValor + segundoValor
const restar = (primerValor, segundoValor) => primerValor - segundoValor
const multiplicar = (primerValor, segundoValor) => primerValor * segundoValor
const dividir = (primerValor, segundoValor) => primerValor / segundoValor

function operar() {
    do {
        operador = prompt('Ingrese la operacion matematica que quiere realizar, para salir ingrese "N":').toLocaleUpperCase()
        if (operador !== 'N') {
            primerValor = parseFloat(prompt('Ingrese el primer valor:'))
            segundoValor = parseFloat(prompt('Ingrese el segundo valor:'))

            switch (operador) {
                case '+':
                    resultado = sumar(primerValor, segundoValor)
                    alert('El resultado de la suma es: ' + resultado)
                    break
                case  '-':
                    resultado = restar(primerValor, segundoValor)
                    alert('El resultado de la resta es: ' + resultado)
                    break
                case '*':
                    resultado = multiplicar(primerValor, segundoValor)
                    alert('El resultado de la multiplicacion es: ' + resultado)
                    break
                case '/':
                    if (segundoValor !== 0) {
                        resultado = dividir(primerValor, segundoValor)
                        alert('El resultado de la divicion es: ' + resultado)
                    } else {
                        alert('No se puede dividir por cero')
                    }
                    break
                default:
                    alert('Operador desconocido, o no se ingreso ningun dato')
                    break
            }
        }
    } while (operador !== 'N')
}

operar()