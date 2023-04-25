/*
En el código de demostración del concepto, imagine que las clases están estrechamente acopladas. La clase concreta imprimiría algo 
de texto en la consola.

Después de abstraer la clase a lo largo de un terreno común, ahora es más versátil. La implementación se ha separado de la 
abstracción y ahora puede imprimir el mismo texto de dos maneras diferentes.

El beneficio ahora es que ahora se puede trabajar en cada abstracción e implementador refinados de forma independiente sin afectar 
las otras implementaciones.
*/

// Bridge Pattern Concept Sample Code

interface IAbstraction {
    method(value: string[]): void
}

class RefinedAbstractionA implements IAbstraction {
    #implementer: IImplementer

    constructor(implementer: IImplementer) {
        this.#implementer = implementer
    }

    method(value: string[]) {
        this.#implementer.method(value)
    }
}

class RefinedAbstractionB implements IAbstraction {
    #implementer: IImplementer

    constructor(implementer: IImplementer) {
        this.#implementer = implementer
    }

    method(value: string[]) {
        this.#implementer.method(value)
    }
}

interface IImplementer {
    method(value: string[]): void
}

class ConcreteImplementerA implements IImplementer {
    method(value: string[]) {
        console.log(value)
    }
}

class ConcreteImplementerB implements IImplementer {
    method(value: string[]) {
        value.forEach((v) => console.log(v))
    }
}

// The Client
const VALUES = ['a', 'b', 'c']

const REFINED_ABSTRACTION_A = new RefinedAbstractionA(
    new ConcreteImplementerA()
)
REFINED_ABSTRACTION_A.method(VALUES)

const REFINED_ABSTRACTION_B = new RefinedAbstractionB(
    new ConcreteImplementerB()
)
REFINED_ABSTRACTION_B.method(VALUES)