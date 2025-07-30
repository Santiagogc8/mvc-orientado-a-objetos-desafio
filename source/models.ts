// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import fs from "fs"; // Importamos fs
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
	id: number = 0;
	name: string = "";
}

class ContactsCollection { // Creamos la clase ContactsCollection
  data: Contact[] = []; // Inicializamos data de tipo array de Contact y lo inicializamos vacio

  load(){ // Creamos el metodo load
    const obtenerData = fs.readFileSync('./contacts.json', 'utf-8'); // Que lee el archivo contacts.json con fs
    const datos = JSON.parse(obtenerData); // Y luego, guardamos el json convertido en objeto en una variable
    this.data = datos; // Le asignamos el objeto a this.data
  }

  getAll(){ // Creamos el metodo que retorna todo el array de objetos
    return this.data; // Y retornamos this.data
  }
  
  addOne(contact: Contact){ // Creamos el metodo que permite agregar contactos de tipo Contact
    this.data.push(contact); // Pusheamos el objeto al array
    return this.data; // Y retornamos el nuevo objeto
  }

  save(){ // Creamos el metodo save para guardar en el JSON los objetos agregados
    const dataToSave = JSON.stringify(this.data, null, 2); // Guardamos en la variable dataToSave la conversion de this.data, con valores null a reemplazar y con una identacion de 2 en el JSON
    fs.writeFileSync('./contacts.json', dataToSave, 'utf-8'); // Y usamos el metodo writeFileSync para guardar en './contacts.json', la dataToSave, en formato utf-8
  }

  getOneById(id: number){ // Creamos el metodo getOneById que recibe un id de tipo number
    return this.data.find(e => e.id === id) || null; // Retornamos el id buscado con un find. En caso contrario, se retorna null
  }
}

export { ContactsCollection };