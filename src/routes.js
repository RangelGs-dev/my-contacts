const { Router } = require("express");

const ContactController = require("./app/controllers/ContactController.js");
const CategoryController = require("./app/controllers/CategoryController.js");

const router = Router();

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);

router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);
// O metodo .use também é usado para as rotas, pois as mesmas são também entendidos como middlewares

module.exports = router;
