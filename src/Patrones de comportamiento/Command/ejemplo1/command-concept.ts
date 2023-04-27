/*
El Cliente instancia un Receptor que acepta ciertos comandos que hacen cosas.

Luego, el cliente crea dos objetos de comando que llamarán a uno de los comandos específicos en el receptor.

Luego, el Cliente crea un Invocador, por ejemplo, una interfaz de usuario con botones, y registra ambos Comandos en el diccionario 
de comandos de los Invocadores.

El cliente no llama a los comandos de los receptores directamente, sino a través del invocador, que luego llama al método de 
ejecución() de los objetos de comando registrados.

Esta abstracción entre el invocador, el comando y el receptor permite que el invocador agregue funciones adicionales, como 
historial, reproducción, DESHACER/REHACER, registro, alertas y cualquier otra cosa útil que pueda ser necesaria.
*/

// The Command Pattern Concept

interface ICommand {
    execute(): void
}

class Invoker {
    // The Invoker Class
    #commands: { [id: string]: ICommand }

    constructor() {
        this.#commands = {}
    }

    register(commandName: string, command: ICommand) {
        // Register commands in the Invoker
        this.#commands[commandName] = command
    }

    execute(commandName: string) {
        // Execute any registered commands
        if (commandName in this.#commands) {
            this.#commands[commandName].execute()
        } else {
            console.log(`Command [${commandName}] not recognised`)
        }
    }
}

class Receiver {
    // The Receiver

    runCommand1() {
        // A set of instructions to run
        console.log('Executing Command 1')
    }

    runCommand2() {
        // A set of instructions to run
        console.log('Executing Command 2')
    }
}

class Command1 implements ICommand {
    // A Command object, that implements the ICommand interface and
    // runs the command on the designated receiver

    #receiver: Receiver

    constructor(receiver: Receiver) {
        this.#receiver = receiver
    }

    execute() {
        this.#receiver.runCommand1()
    }
}

class Command2 implements ICommand {
    // A Command object, that implements the ICommand interface and
    // runs the command on the designated receiver

    #receiver: Receiver

    constructor(receiver: Receiver) {
        this.#receiver = receiver
    }

    execute() {
        this.#receiver.runCommand2()
    }
}

// The Client
// Create a receiver
const RECEIVER = new Receiver()

// Create Commands
const COMMAND1 = new Command1(RECEIVER)
const COMMAND2 = new Command2(RECEIVER)

// Register the commands with the invoker
const INVOKER = new Invoker()
INVOKER.register('1', COMMAND1)
INVOKER.register('2', COMMAND2)

// Execute the commands that are registered on the Invoker
INVOKER.execute('1')
INVOKER.execute('2')
INVOKER.execute('1')
INVOKER.execute('2')