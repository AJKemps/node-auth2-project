const router = require("express").Router();

const Users = require("./user-model");

router.get("/", (req, res) => {
  Users.find({})
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.get("/department", (req, res) => {
  let department = req.decodedToken.department;

  Users.findBy({ department: department })
    .then((response) => {
      res.status(200).json({ data: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
