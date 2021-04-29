const { Router } = require("express");
const postService = require("../../services/posts");

const router = Router();

router.get("/", async function index(req, res) {
  const posts = await postService.all();

  if (!posts) {
    return res.json({
      success: false,
      error: "Failed fetching posts",
    });
  }

  return res.json({
    success: true,
    data: posts,
  });
});

router.post("/", async function create(req, res) {
  // validation
  const post = await postService.create({
    userId: 1,
    ...req.body,
  });

  if (!post) {
    return res.json({
      success: false,
      error: "Failed creating post",
    });
  }

  return res.json({
    success: true,
    data: post,
  });
});

router.get("/:id", async function show(req, res) {
  const post = await postService.getPost(req.params.id);

  if (!post) {
    return res.json({
      success: false,
      error: `Error fetching post with id ${req.params.id}`,
    });
  }

  return res.json({
    success: true,
    data: post,
  });
});

router.patch("/:id", async function update(req, res) {
  const post = await postService.updatePost(req.params.id, req.body);

  if (!post) {
    return res.json({
      success: false,
      error: `Error updating post with id ${req.params.id}`,
    });
  }

  return res.json({
    success: true,
    data: post,
  });
});

router.delete("/:id", async function deletePost(req, res) {
  try {
    await postService.deletePost(req.params.id);
    return res.json({
      success: true,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: `Error deleting post with id ${req.params.id}`,
    });
  }
});

module.exports = router;
