/*
En el código de concepto a continuación, se crea una jerarquía de cualquier objeto. Es similar a un compuesto simplificado. 
Los objetos de Part también pueden contener una jerarquía de subelementos/partes.

La clase Part también podría constar de muchas variaciones, pero este ejemplo usa solo una.

En lugar de escribir un código específico dentro de todos estos elementos/partes cada vez que quería manejar una nueva operación 
personalizada, puedo implementar la interfaz IVisitable y crear el método accept() que permite que el Visitante personalizado lo 
atraviese y acceda a los Elementos/Partes atributos internos en su lugar.

Se crean dos clases de Visitante diferentes, PrintPartNamesVisitor y CalculatePartTotalsVisitor. Se crean instancias y se pasan a 
través de la jerarquía de objetos existente utilizando la misma interfaz IVisitable.
*/
// The Visitor Pattern Concept

interface IVisitor {
    // An interface that custom Visitors should implement
    visit(part: Part): void
}

interface IVisitable {
    // An interface the concrete objects should implement that allows
    // the visitor to traverse a hierarchical structure of objects
    accept(visitor: IVisitor): void
}

class Part implements IVisitable {
    // a.k.a Element. An Object that can be part of any hierarchy
    name: string
    value: number
    parts: Set<Part>

    constructor(name: string, value: number, parent?: Part) {
        this.name = name
        this.value = value
        this.parts = new Set()
        if (parent) {
            parent.parts.add(this)
        }
    }

    accept(visitor: IVisitor) {
        // required by the Visitor that will traverse
        this.parts.forEach((part) => {
            part.accept(visitor)
        })
        visitor.visit(this)
    }
}

// The Client
// Creating an example object hierarchy.
const Part_A = new Part('A', 101)
const Part_B = new Part('B', 305, Part_A)
const Part_C = new Part('C', 185, Part_A)
const Part_D = new Part('D', -30, Part_B)

// Now Rather than changing the Part class to support custom
// operations, we can utilise the accept method that was
// implemented in the Part class because of the addition of
// the IVisitable interface

class PrintPartNamesVisitor implements IVisitor {
    // Create a visitor that prints the part names
    visit(part: Part) {
        console.log(part.name)
    }
}

// Using the PrintPartNamesVisitor to traverse the object hierarchy
Part_A.accept(new PrintPartNamesVisitor())

class CalculatePartTotalsVisitor implements IVisitor {
    // Create a visitor that totals the part values
    totalValue = 0

    visit(part: Part) {
        this.totalValue += part.value
    }
}

// Using the CalculatePartTotalsVisitor to traverse the
// object hierarchy
const CALC_TOTALS_VISITOR = new CalculatePartTotalsVisitor()
Part_A.accept(CALC_TOTALS_VISITOR)
console.log(CALC_TOTALS_VISITOR.totalValue)