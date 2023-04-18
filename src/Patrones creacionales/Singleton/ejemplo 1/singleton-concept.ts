/*
.:Ejemplo contextual:.

Este ejemplo ilustra la estructura de un Singleton y se enfoca en las siguientes preguntas:

- ¿De qué clases consiste?
- ¿Cuál es el rol de estas clases?
- ¿En qué manera están relacionados los elementos de este patrón?
*/

/*
* Esta clase define el método 'getInstance' que deja que los clientes accedan
* a una única instancia de singleton
*/
class Singleton {

    private static instance: Singleton;

    /* 
    * El constructor en un Singleton debería siempre ser privado para prevenir
    * llamadas directas con el operador 'new'
    */
    private constructor() { }

    /* 
    * Esta implementación le permite subclasificar esa clase Singleton 
    * mientras mantiene solo una instancia de cada subclase.
    */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    /* 
    * Finalmente, cualquier singleton debería definir alguna lógica de negocio,
    * que puede ser ejecutado en su instancia.
    */
    public someBusinessLogic() {
        // ...
    }
}

/* 
* El código del cliente
*/
function clientCode() {

    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain diferent instances.');
    }
}

clientCode(); // Singleton works, both variables contain the same instance.
