/* 
En este ejemplo de concepto, el cliente quiere un objeto llamado 'b'

En lugar de crear 'b' directamente en el cliente, le pide al creador (fábrica) el objeto.

La fábrica encuentra la clase relevante utilizando algún tipo de lógica a partir de los atributos de la solicitud. Luego le pide a
la subclase que cree una instancia del nuevo objeto que luego devuelve como una referencia al cliente que lo solicita.

(ver imagen)
*/

interface IProduct {
    name: string;
}

class ConcreteProduct implements IProduct {
    name = '';
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'ConcreteProductA';
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'ConcreteProductB';
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'ConcreteProductC';
    }
}

class Creator {
    static createObject(someProperty: string): IProduct {
        if (someProperty === 'a') {
            return new ConcreteProductA();
        } else if (someProperty === 'b') {
            return new ConcreteProductB();
        } else {
            return new ConcreteProductC();
        }
    }
}

// The Client
const PRODUCT = Creator.createObject('b');
console.log(PRODUCT.name); // ConcreteProductB

