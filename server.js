const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;

// Middleware to replace dynamic content in HTML
const renderHTML = (req, res, next) => {
    // Fetch dynamic content here
    let dynamic_title = "Dynamic Title";
    let dynamic_description = "Dynamic Description";
    let dynamic_image = req.path === "/" ? "https://example.com/home-image.jpg" : "https://example.com/default-image.jpg";

    // Read the index.html file asynchronously
    fs.readFile("./build/index.html", "utf8", (err, htmlContent) => {
        if (err) {
            console.error("Error reading HTML file:", err);
            res.status(500).send("Internal Server Error");
            return;
        }

        // Replace dynamic content in the HTML
        htmlContent = htmlContent.replace("__PAGE_TITLE__", dynamic_title);
        htmlContent = htmlContent.replace("__OG_DESCRIPTION__", dynamic_description);
        htmlContent = htmlContent.replace("__OG_IMAGE__", dynamic_image);

        // Set modified HTML to response locals for use in routes
        res.locals.modifiedHTML = htmlContent;
        next(); // Proceed to the next middleware or route handler
    });
};

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "./build")));

// Use the renderHTML middleware for all routes
app.use(renderHTML);

// Route to serve the modified HTML for all routes
app.get("*", (req, res) => {
    // Send the modified HTML as the response
    res.send(res.locals.modifiedHTML);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express app running on port ${PORT}.`);
});
