const ContactsRepository = require("../repositories/ContactsRepository.js");

class ContactController {
  async index(request, response) {
    //Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    //Obter um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 Not Found
      return response.status(404).json({ message: "User not found" });
    }

    response.json(contact);
  }

  store() {
    //Criar Novo registro
  }

  update() {
    //Editar um reistro
  }

  async delete(request, response) {
    //Deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 Not Found
      return response.status(404).json({ message: "User not found" });
    }

    await ContactsRepository.delete(id);
    // 204 Not content
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
