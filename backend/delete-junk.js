require("dotenv").config();
const mongoose = require("mongoose");
const Blog = require("./models/blog");

mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
        console.log("Connected to DB");

        const titles = [
            "Zepto – Redefining Convenience with India’s 10-Minute Delivery Revolution",
            "ABCDEFGH"
        ];

        for (const title of titles) {
            const result = await Blog.deleteMany({ title: title });
            console.log(`Deleted ${result.deletedCount} blogs with title: "${title}"`);
        }

        mongoose.disconnect();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
