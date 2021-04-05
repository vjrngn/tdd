const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    success: true,
    data: [],
  });
});

module.exports = router;
