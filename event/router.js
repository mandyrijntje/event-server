const { Router } = require("express");
const Event = require("./model");
//
const router = new Router();
//
router.get("/events", (req, res, next) => {
  Event.findAll()
    .then(list => res.json(list))
    .catch(next);
});
//
router.post("/events", (req, res, next) => {
  Event.create(req.body)
    .then(event => {
      res.json(event);
    })
    .catch(next);
});
//
module.exports = router;
