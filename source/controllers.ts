import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController { // Creamos la clase ContactsController
  contacts: ContactsCollection; // Declaramos la propiedad ContactsCollection
  constructor() { // Definimos el constructor que 
    this.contacts = new ContactsCollection(); // Inicializa la instancia
    this.contacts.load(); // Y usamos el metodo load para que cargue la data del archivo en el modelo
  }

  processOptions(options: ContactsControllerOptions) { // Definimos el metodo
    if(options.action === "get"){

    }
  }
}

export { ContactsController };