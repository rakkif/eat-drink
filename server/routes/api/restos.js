const express = require("express");
const router = express.Router();

const Resto = require("../../models/RestoSchema");
const Coffee = require("../../models/CoffeeSchema");
const Drink = require("../../models/DrinkSchema");
router.get("/test", (req, res) => res.send("route testing!"));

router.get("/eat", (req, res) => {
  Resto.find()
    .then((restos) => res.json(restos))
    .catch((err) => res.status(404).json({ norestosfound: "No Restos found" }));
});
router.get("/drink", (req, res) => {
  Drink.find()
    .then((restos) => res.json(restos))
    .catch((err) => res.status(404).json({ norestosfound: "No drinks found" }));
});
router.get("/coffee", (req, res) => {
  Coffee.find()
    .then((restos) => res.json(restos))
    .catch((err) => res.status(404).json({ norestosfound: "No coffee found" }));
});

router.get("/:id", (req, res) => {
  Resto.findById(req.params.id)
    .then((resto) => res.json(resto))
    .catch((err) => res.status(404).json({ norestosfound: "No I can't" }));
});

router.post("/", (req, res) => {
  Resto.create(req.body)
    .then((book) => res.json({ msg: "Place added successfuly" }))
    .catch((err) => res.status(400).json({ error: "I can't do it" }));
});

module.exports = router;
