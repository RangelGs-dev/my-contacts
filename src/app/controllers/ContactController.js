class ContactController {
  index(request, response) {
    //Listar todos os registros
    response.send("Send from Contact Controller");
  }

  show() {
    //Obter um registro
  }

  store() {
    //Criar Novo registro
  }

  update() {
    //Editar um reistro
  }

  delete() {
    //Deletar um registro
  }
}

module.exports = new ContactController();
