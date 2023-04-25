/*
En este concepto de código fuente, hay dos clases, ClassA y ClassB, con firmas de métodos diferentes. Consideremos que ClassA
proporciona la interfaz preferida y más compatible para el cliente.

Puedo crear objetos de ambas clases en el cliente y funciona. Pero antes de usar cada método de objetos, necesito hacer una
verificación condicional para ver a qué tipo de clase estoy llamando, ya que las firmas del método son diferentes.

Significa que el cliente está haciendo trabajo extra. En su lugar, puedo crear una interfaz de Adaptador para la ClaseB 
incompatible, que reduce la necesidad de la lógica condicional adicional.
*/

// Adapter Concept Sample Code

interface IA {
    methodA(): void
}

class ClassA implements IA {
    methodA() {
        console.log('method A')
    }
}

interface IB {
    methodB(): void
}

class ClassB implements IB {
    methodB() {
        console.log('method B')
    }
}

class ClassBAdapter implements IA {
    // ClassB does not have a methodA, so we can create an adapter

    #classB: ClassB

    constructor() {
        this.#classB = new ClassB()
    }

    methodA() {
        'calls the class b method_b instead'
        this.#classB.methodB()
    }
}

// The Client
// Before the adapter I need to test the objects class to know which
// method to call.
const ITEMS = [new ClassA(), new ClassB()]
ITEMS.forEach((item) => {
    if (item instanceof ClassB) {
        item.methodB()
    } else {
        item.methodA()
    }
})

// After creating an adapter for ClassB I can reuse the same method
// signature as ClassA (preferred)
const ADAPTED = [new ClassA(), new ClassBAdapter()]
ADAPTED.forEach((item) => {
    item.methodA()
})