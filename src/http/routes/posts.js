const { Router } = require("express");
const postService = require("../../services/posts");

const router = Router();

router.get("/:id", async (req, res) => {
  const post = await postService.getPost(req.params.id);
  return res.json({
    success: true,
    data: post,
  });
});

module.exports = router;
