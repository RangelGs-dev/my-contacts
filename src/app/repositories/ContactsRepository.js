const { v4 } = require("uuid");

let contacts = [
  {
    //Instalamos a biblioteca uuidv4 para hashear os Id's
    id: v4(),
    name: "Rangel",
    email: "rangelgs17@gmail.com",
    phone: "93991627229",
    category_id: v4(),
  },
  {
    //Instalamos a biblioteca uuidv4 para hashear os Id's
    id: v4(),
    name: "Lidia",
    email: "lidia@gmail.com",
    phone: "93991699999",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    // Busca todos
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    // Busca todos
    return new Promise((resolve) =>
      resolve(
        contacts.find((contact) => {
          return contact.id === id;
        })
      )
    );
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
