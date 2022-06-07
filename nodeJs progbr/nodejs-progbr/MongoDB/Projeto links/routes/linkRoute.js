const { urlencoded } = require("express");
const express = require("express");
const router = express.Router();
const linkController = require("../controlers/linkController");
var methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.get("/", linkController.allLinks)

router.get("/add", (req, res) => {
  res.render('index', {error: false, body: {}});
});

router.get("/:title", linkController.redirect);

router.get("/edit/:id", linkController.loadLink)


router.delete('/:id', linkController.deleteLink)

router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink)

router.post(
    "/",
    express.urlencoded({ extended: true }),
    linkController.addLink
  );

router.post("/edit/:id", express.urlencoded({ extended: true }),linkController.editLink)

module.exports = router;
