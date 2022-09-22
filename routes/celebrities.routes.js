// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model.js");

// all your routes here
router.post("/", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  try {
    const newCeleb = await Celebrity.create({
      name,
      occupation,
      catchPhrase,
    });
    if (!newCeleb) {
      res.status(400).json({ message: "400 BAD REQUEST" });
    }
    res.status(201).json({ newCeleb });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
