require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog")
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))


app.use(express.static(path.join(__dirname, "../frontend-next/public")));

// app.get("/", async (req, res) => {
const allBlogs = await Blog.find({});
// API mode: return JSON or redirect to frontend (which is likely on port 3000)
// Since this is the backend API, we can just return a message or JSON.
// But to keep it simple and maybe strictly API:
res.json({
  message: "Welcome to Blogify API",
  user: req.user,
  blogs: allBlogs,
});
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`Server Started at PORT: ${PORT}`);
});



